/* ==========================================================
 * tool-chrome.js  v2.0
 *
 * 「一行脚本」运行时外壳 —— 完全自包含，单文件直接拿去用。
 *
 * 功能：
 *   1. 无闪烁主题初始化（localStorage + prefers-color-scheme）
 *   2. 注入悬浮 FAB：返回主页胶囊 + 主题切换圆钮
 *   3. 内联 fallback CSS（当工具页不引入 tool-base.css 时兜底）
 *   4. 智能主页 URL 推断（无论文件在几层目录都能正确返回）
 *   5. 暴露 window.ToolChrome 扩展钩子（埋点 / 多语言 / 其他）
 *   6. 注册 Service Worker（有 sw.js 时自动生效）
 *
 * 用法（放在 <body> 末尾或 <head> 均可）：
 *   <script src="../../assets/js/tool-chrome.js"></script>
 *
 * 覆盖主页地址（可选）：
 *   <meta name="home-url" content="/">
 *
 * ========================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------
   * 0. 工具函数
   * ------------------------------------------------------ */
  var doc = document;
  var root = doc.documentElement;
  // ⚠️ 必须在 IIFE 顶层同步捕获 —— DOMContentLoaded 回调里 currentScript 已是 null
  var _currentScript = doc.currentScript;
  var THEME_KEY = 'theme';
  var RECENTS_KEY = 'html_tools_recents_v1';
  var MAX_RECENTS = 20;

  /** 安全读取 localStorage */
  function lsGet(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }
  /** 安全写入 localStorage */
  function lsSet(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  }

  /** 从完整 URL 中提取 tools/...html 注册路径 */
  function toolPathFromUrl(value) {
    if (!value) return null;

    try {
      var pathname = decodeURIComponent(new URL(value, window.location.href).pathname);
      var marker = '/tools/';
      var markerIndex = pathname.lastIndexOf(marker);
      if (markerIndex < 0) return null;

      var toolPath = 'tools/' + pathname.slice(markerIndex + marker.length).replace(/^\/+/, '');
      if (!toolPath || /\/$/.test(toolPath)) return null;
      if (!/\.[a-z0-9]+$/i.test(toolPath)) toolPath += '.html';
      return toolPath;
    } catch (e) {
      return null;
    }
  }

  /** 优先使用 canonical，失败时回退到当前地址 */
  function resolveCurrentToolPath() {
    var canonical = doc.querySelector('link[rel="canonical"]');
    return toolPathFromUrl(canonical && canonical.href) || toolPathFromUrl(window.location.href);
  }

  /** 记录最近访问工具：倒序、去重、最多 20 个 */
  function recordRecentTool() {
    // 分类落地页同样位于 /tools/ 下，但不属于可操作工具，不进入最近列表。
    if (doc.querySelector('.cat-main')) return;

    var toolPath = resolveCurrentToolPath();
    if (!toolPath) return;

    var recent = [];
    var stored = lsGet(RECENTS_KEY);

    if (stored) {
      try {
        var parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          recent = parsed.filter(function (item) {
            return typeof item === 'string' && item !== toolPath;
          });
        }
      } catch (e) {}
    }

    recent.unshift(toolPath);
    lsSet(RECENTS_KEY, JSON.stringify(recent.slice(0, MAX_RECENTS)));
  }

  /* --------------------------------------------------------
   * 1. 主题：尽早应用，避免首屏闪烁
   *    （此块在脚本解析时同步执行，不等 DOMContentLoaded）
   * ------------------------------------------------------ */
  var saved = lsGet(THEME_KEY);
  var initTheme =
    saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

  root.setAttribute('data-theme', initTheme);

  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    // 切换瞬间禁掉全页过渡，避免大面积颜色渐变卡顿
    root.classList.add('tc-anim-off');
    root.setAttribute('data-theme', theme);
    lsSet(THEME_KEY, theme);

    var btn = doc.getElementById('tcThemeBtn');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      btn.setAttribute('title', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    }

    void root.offsetWidth; // force reflow
    requestAnimationFrame(function () {
      root.classList.remove('tc-anim-off');
    });

    // 通知扩展钩子
    if (window.ToolChrome && window.ToolChrome.onThemeChange) {
      window.ToolChrome.onThemeChange(theme);
    }
  }

  /* --------------------------------------------------------
   * 2. 智能主页 URL 推断
   *
   *    优先级：
   *    a. <meta name="home-url" content="...">  （显式覆盖，最高优先）
   *    b. 根据 <script src="..."> 路径逆推        （自动计算）
   *    c. 兜底 '/'
   * ------------------------------------------------------ */
  function resolveHomeUrl() {
    // a. meta 显式指定（最高优先）
    var meta = doc.querySelector('meta[name="home-url"]');
    if (meta && meta.content) return meta.content;

    // b. 从 IIFE 顶层捕获的 script.src 推断（准确，适用于服务器和 file://）
    if (_currentScript && _currentScript.src) {
      try {
        var scriptUrl = new URL(_currentScript.src);
        var parts = scriptUrl.pathname.split('/');
        var assetIdx = parts.lastIndexOf('assets');
        if (assetIdx > 0) {
          var rootPath = parts.slice(0, assetIdx).join('/') || '';
          return rootPath + (scriptUrl.protocol === 'file:' ? '/index.html' : '/');
        }
      } catch (e) {}
    }

    // c. 兜底：从 window.location.pathname 的目录层级计算相对路径
    //    正确算法：找到 'tools' 目录，计算从当前文件到 tools 父目录的 .. 层数
    //    tools/dev/base64.html      -> ../../      (afterTools=['dev'], depth=2)
    //    tools/ai/wiki/page.html    -> ../../../   (afterTools=['ai','wiki'], depth=3)
    try {
      var segs = window.location.pathname.split('/').filter(Boolean);
      var toolsIdx = segs.indexOf('tools');
      if (toolsIdx >= 0) {
        // afterTools：tools 后面的路径段，去掉最后一段（文件名）
        var afterTools = segs.slice(toolsIdx + 1, -1);
        var depth = afterTools.length + 1; // +1 for 'tools' itself
        return (
          Array(depth).fill('..').join('/') +
          (window.location.protocol === 'file:' ? '/index.html' : '/')
        );
      }
    } catch (e) {}

    return window.location.protocol === 'file:' ? '/index.html' : '/';
  }

  /** 分类页保留物理文件回退，确保直接双击 HTML 时仍可离线导航。 */
  function restoreFileLinks() {
    if (window.location.protocol !== 'file:') return;
    doc.querySelectorAll('[data-file-href]').forEach(function (link) {
      link.setAttribute('href', link.getAttribute('data-file-href'));
    });
  }

  /**
   * 仅在已知提供 HTML rewrite 的主机上启用 clean URL。
   * 静态主机（例如 github.io）必须保留物理 .html 路径，否则站内链接会 404。
   */
  function hostSupportsCleanUrls() {
    var hostname = (window.location.hostname || '').toLowerCase();
    return (
      hostname === 'tools.realtime-ai.chat' ||
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.endsWith('.vercel.app') ||
      hostname.endsWith('.netlify.app') ||
      hostname.endsWith('.pages.dev')
    );
  }

  /** 在支持 rewrite 的主机上规范化同源 HTML 链接，避免站内跳转触发 308。 */
  function normalizeHttpLinks() {
    if (!hostSupportsCleanUrls()) return;

    doc.querySelectorAll('a[href]').forEach(function (link) {
      try {
        var url = new URL(link.getAttribute('href'), window.location.href);
        if (url.origin !== window.location.origin) return;

        if (url.pathname === '/index.html') {
          url.pathname = '/';
        } else if (url.pathname.endsWith('/index.html')) {
          url.pathname = url.pathname.slice(0, -'index.html'.length);
        } else if (url.pathname.endsWith('.html')) {
          url.pathname = url.pathname.slice(0, -'.html'.length);
        } else {
          return;
        }

        link.href = url.pathname + url.search + url.hash;
      } catch (e) {}
    });
  }

  /* --------------------------------------------------------
   * 3. 注入 fallback CSS（当页面没有引入 tool-base.css 时兜底）
   *    使用 @layer 保证不污染已有样式，优先级最低
   * ------------------------------------------------------ */
  function injectFallbackCSS() {
    if (doc.getElementById('tc-style')) return;

    var css = [
      /* 主题变量 — 暗色（默认） */
      ':root,[data-theme="dark"]{',
      '  --tc-bg:rgba(20,20,30,.82);',
      '  --tc-border:rgba(255,255,255,.10);',
      '  --tc-text:#e8e8ed;',
      '  --tc-accent:#00f5d4;',
      '  --tc-shadow:0 4px 24px rgba(0,0,0,.45);',
      '  --tc-radius-pill:9999px;',
      '  --tc-radius-circle:50%;',
      '}',
      /* 主题变量 — 亮色 */
      '[data-theme="light"]{',
      '  --tc-bg:rgba(255,255,255,.88);',
      '  --tc-border:rgba(0,0,0,.08);',
      '  --tc-text:#1a1a1a;',
      '  --tc-accent:#00b8a0;',
      '  --tc-shadow:0 4px 24px rgba(0,0,0,.12);',
      '}',
      /* 外壳容器 */
      '#tcChrome{position:fixed;bottom:20px;left:0;right:0;pointer-events:none;z-index:2147483000}',
      /* FAB 公共 */
      '.tc-fab{',
      '  pointer-events:auto;',
      '  display:inline-flex;align-items:center;justify-content:center;gap:7px;',
      '  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;',
      '  font-size:13.5px;font-weight:600;',
      '  color:var(--tc-text,#e8e8ed);',
      '  text-decoration:none;',
      '  background:var(--tc-bg,rgba(20,20,30,.82));',
      '  border:1.5px solid var(--tc-border,rgba(255,255,255,.1));',
      '  box-shadow:var(--tc-shadow);',
      '  cursor:pointer;',
      '  -webkit-backdrop-filter:blur(12px) saturate(160%);',
      '  backdrop-filter:blur(12px) saturate(160%);',
      '  transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease;',
      '}',
      '.tc-fab:hover{transform:translateY(-2px);border-color:var(--tc-accent);box-shadow:var(--tc-shadow),0 0 0 1px var(--tc-accent)}',
      '.tc-fab:active{transform:translateY(0)}',
      '.tc-fab:focus-visible{outline:2px solid var(--tc-accent);outline-offset:3px}',
      /* 返回主页胶囊 */
      '#tcHome{position:fixed;bottom:20px;bottom:max(20px,calc(env(safe-area-inset-bottom) + 10px));left:20px;left:max(20px,calc(env(safe-area-inset-left) + 10px));padding:10px 16px 10px 13px;border-radius:var(--tc-radius-pill)}',
      '#tcHome svg{width:16px;height:16px;flex-shrink:0}',
      /* 主题切换圆钮 */
      '#tcThemeBtn{position:fixed;bottom:20px;bottom:max(20px,calc(env(safe-area-inset-bottom) + 10px));right:20px;right:max(20px,calc(env(safe-area-inset-right) + 10px));width:46px;height:46px;padding:0;border-radius:var(--tc-radius-circle);background:none;border:1.5px solid var(--tc-border)}',
      '#tcThemeBtn svg{width:18px;height:18px}',
      /* 日/月图标切换 */
      '.tc-icon-sun{display:none}',
      '[data-theme="light"] .tc-icon-sun{display:block}',
      '[data-theme="light"] .tc-icon-moon{display:none}',
      /* 移动端 */
      '@media(max-width:600px){',
      '  #tcHome{left:14px;left:max(14px,calc(env(safe-area-inset-left) + 8px));bottom:14px;bottom:max(14px,calc(env(safe-area-inset-bottom) + 8px));width:46px;height:46px;padding:0;border-radius:var(--tc-radius-circle)}',
      '  #tcHome .tc-label{display:none}',
      '  #tcThemeBtn{right:14px;right:max(14px,calc(env(safe-area-inset-right) + 8px));bottom:14px;bottom:max(14px,calc(env(safe-area-inset-bottom) + 8px))}',
      '}',
      /* 打印隐藏 */
      '@media print{#tcChrome{display:none}}',
      /* 切换主题时禁掉全页过渡 */
      '.tc-anim-off,.tc-anim-off *,.tc-anim-off *::before,.tc-anim-off *::after{transition:none!important}',
      '@media(prefers-reduced-motion:reduce){.tc-fab{transition:none!important}}'
    ].join('\n');

    var style = doc.createElement('style');
    style.id = 'tc-style';
    style.textContent = css;
    doc.head.appendChild(style);
  }

  /* --------------------------------------------------------
   * 4. SVG 图标
   * ------------------------------------------------------ */
  var SVG_BACK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>';

  var SVG_MOON =
    '<svg class="tc-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

  var SVG_SUN =
    '<svg class="tc-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

  /* --------------------------------------------------------
   * 5. 注入 FAB 外壳
   * ------------------------------------------------------ */
  function injectChrome() {
    if (doc.getElementById('tcChrome') || !doc.body) return;

    var homeUrl = resolveHomeUrl();
    var theme = currentTheme();
    var isHomePage = !!doc.getElementById('tools-grid') || window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '';

    var wrap = doc.createElement('div');
    wrap.id = 'tcChrome';

    // Home button capsule
    var home = doc.createElement('a');
    home.id = 'tcHome';
    home.className = 'tc-fab';
    home.href = homeUrl;
    home.setAttribute('aria-label', 'Back to all tools');
    home.setAttribute('title', 'Back to all tools');
    home.innerHTML = SVG_BACK + '<span class="tc-label">All Tools</span>';

    if (isHomePage) {
      home.style.display = 'none';
    } else {
      home.addEventListener('click', function (e) {
        if (window.history.length > 1 && document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
          e.preventDefault();
          window.history.back();
        }
      });
    }

    // Theme toggle round button
    var themeBtn = doc.createElement('button');
    themeBtn.id = 'tcThemeBtn';
    themeBtn.className = 'tc-fab';
    themeBtn.type = 'button';
    themeBtn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    themeBtn.setAttribute('title', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    themeBtn.innerHTML = SVG_MOON + SVG_SUN;
    themeBtn.addEventListener('click', function () {
      applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
    });

    wrap.appendChild(home);
    wrap.appendChild(themeBtn);
    doc.body.appendChild(wrap);

    // 通知扩展钩子
    if (window.ToolChrome && window.ToolChrome.onReady) {
      window.ToolChrome.onReady({ homeUrl: homeUrl });
    }
  }

  /* --------------------------------------------------------
   * 6. 首页最近使用控制器
   * ------------------------------------------------------ */
  function loadHomepageRecentController() {
    if (!_currentScript || !_currentScript.src) return;
    if (!doc.getElementById('tools-grid') || doc.getElementById('recent-tools-script')) return;

    try {
      var script = doc.createElement('script');
      script.id = 'recent-tools-script';
      script.src = new URL('recent-tools.js', _currentScript.src).href;
      doc.body.appendChild(script);
    } catch (e) {}
  }

  /* --------------------------------------------------------
   * 7. Service Worker 注册
   * ------------------------------------------------------ */
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    // 使用 IIFE 顶层捕获的 _currentScript，DOMContentLoaded 时 currentScript 已是 null
    if (!_currentScript || !_currentScript.src) return;
    var swSrc = _currentScript.src;
    window.addEventListener('load', function () {
      try {
        var swUrl = new URL('../../sw.js', swSrc).href;
        navigator.serviceWorker.register(swUrl).catch(function () {});
      } catch (e) {}
    });
  }

  /* --------------------------------------------------------
   * 8. 暴露全局扩展钩子  window.ToolChrome
   *
   * 使用方式（在 tool-chrome.js 引入之前设置）：
   *   <script>
   *     window.ToolChrome = {
   *       homeUrl: '/custom/index.html',   // 覆盖主页路径
   *       onReady: function(ctx) { ... },  // FAB 注入完成后触发
   *       onThemeChange: function(theme) { ... }, // 主题切换时触发
   *     };
   *   </script>
   *   <script src="tool-chrome.js"></script>
   * ------------------------------------------------------ */
  window.ToolChrome = Object.assign(
    {
      version: '2.0',
      getTheme: currentTheme,
      setTheme: applyTheme
    },
    window.ToolChrome || {}
  );

  /* --------------------------------------------------------
   * 9. 智能英文本地化引擎 (Auto English Localization Engine)
   * ------------------------------------------------------ */
  var EN_MAP = {
    '首页': 'Home',
    '全部工具': 'All Tools',
    '开发工具': 'Developer Tools',
    '文本工具': 'Text Utilities',
    '时间工具': 'Time & Date',
    '生成器': 'Generators',
    '图片工具': 'Media & Images',
    '多媒体工具': 'Media Tools',
    '加密解密': 'Cryptography & Privacy',
    '安全工具': 'Security Tools',
    '网络工具': 'Network Tools',
    '计算器': 'Calculators',
    '转换器': 'Converters',
    '提取工具': 'Extractors',
    '人工智能': 'AI & Prompts',
    '生活日常': 'Lifestyle & Daily',
    '站长工具': 'SEO Tools',
    '趣味游戏': 'Fun & Games',
    '网页游戏': 'Web Games',
    '金融理财': 'Finance & Wealth',
    '健康健身': 'Health & Fitness',
    '教育学习': 'Education & Learning',
    '美食烹饪': 'Food & Cooking',
    '语言工具': 'Language Tools',
    'AI 编程': 'AI Coding',
    '房产工具': 'Real Estate',
    '商业工具': 'Business Tools',
    '加密货币': 'Cryptocurrency',
    '法律合规': 'Legal & Compliance',
    '社交媒体': 'Social Media',
    '团队协作': 'Team Collaboration',
    '数据处理': 'Data Processing',
    '办公效率': 'Office Productivity',
    '旅游出行': 'Travel & Exploration',
    '设计工具': 'Design & UI',
    '数学工具': 'Mathematics',
    '宠物护理': 'Pet Care',
    '复制成功': 'Copied Successfully!',
    '已复制': 'Copied',
    '复制结果': 'Copy Result',
    '复制内容': 'Copy Content',
    '复制': 'Copy',
    '清空内容': 'Clear Content',
    '清空所有': 'Clear All',
    '清空历史': 'Clear History',
    '清空': 'Clear',
    '清除': 'Clear',
    '重置所有': 'Reset All',
    '重置配置': 'Reset Settings',
    '重置': 'Reset',
    '格式化代码': 'Format Code',
    '格式化': 'Format',
    '压缩代码': 'Minify Code',
    '压缩图片': 'Compress Image',
    '压缩': 'Minify',
    '解压缩': 'Decompress',
    '解压': 'Decompress',
    '美化': 'Beautify',
    '立即生成': 'Generate Now',
    '重新生成': 'Regenerate',
    '生成中...': 'Generating...',
    '生成': 'Generate',
    '开始转换': 'Start Converting',
    '转换中...': 'Converting...',
    '转换': 'Convert',
    '立即计算': 'Calculate Now',
    '计算中...': 'Calculating...',
    '计算': 'Calculate',
    '开始校验': 'Validate Now',
    '校验': 'Validate',
    '验证': 'Verify',
    '执行': 'Execute',
    '运行': 'Run',
    '下载文件': 'Download File',
    '下载结果': 'Download Result',
    '下载图片': 'Download Image',
    '下载': 'Download',
    '上传文件': 'Upload File',
    '上传图片': 'Upload Image',
    '上传': 'Upload',
    '导出 JSON': 'Export JSON',
    '导出 CSV': 'Export CSV',
    '导出': 'Export',
    '导入数据': 'Import Data',
    '导入文件': 'Import File',
    '导入': 'Import',
    '从剪贴板粘贴': 'Paste from Clipboard',
    '粘贴': 'Paste',
    '全选': 'Select All',
    '反选': 'Invert Selection',
    '保存设置': 'Save Settings',
    '保存配置': 'Save Settings',
    '保存': 'Save',
    '编辑': 'Edit',
    '删除': 'Delete',
    '移除': 'Remove',
    '新增': 'Add New',
    '添加': 'Add',
    '搜索': 'Search',
    '确定': 'Confirm',
    '确认': 'Confirm',
    '取消': 'Cancel',
    '关闭': 'Close',
    '返回主页': 'Back to Home',
    '返回': 'Back',
    '刷新': 'Refresh',
    '撤销': 'Undo',
    '重做': 'Redo',
    '实时预览': 'Live Preview',
    '预览': 'Preview',
    '历史记录': 'History',
    '高级设置': 'Advanced Settings',
    '参数设置': 'Parameters',
    '设置': 'Settings',
    '选项': 'Options',
    '说明': 'Instructions',
    '使用帮助': 'Help & Guide',
    '使用说明': 'Instructions',
    '常见问题': 'FAQ',
    '示例': 'Example',
    '加载示例': 'Load Example',
    '查看示例': 'View Example',
    '默认': 'Default',
    '恢复默认': 'Restore Defaults',
    '加载中...': 'Loading...',
    '处理中...': 'Processing...',
    '请稍候...': 'Please wait...',
    '操作成功': 'Success!',
    '成功': 'Success',
    '操作失败': 'Operation failed',
    '失败': 'Failed',
    '错误': 'Error',
    '警告': 'Warning',
    '提示': 'Tip',
    '暂无数据': 'No data available',
    '暂无内容': 'No content yet',
    '格式错误': 'Invalid format',
    '解析失败': 'Parsing failed',
    '输入不能为空': 'Input cannot be empty',
    '请输入有效内容': 'Please enter valid content',
    '输入': 'Input',
    '输出': 'Output',
    '原始数据': 'Original Data',
    '转换结果': 'Conversion Result',
    '计算结果': 'Calculation Result',
    '生成结果': 'Generated Result',
    '结果': 'Result',
    '输入文本': 'Input Text',
    '输出文本': 'Output Text',
    '字符统计': 'Character Count',
    '字符数': 'Characters',
    '字数': 'Words',
    '行数': 'Lines',
    '大小': 'Size',
    '字节': 'Bytes',
    '长度': 'Length',
    '数量': 'Quantity',
    '类型': 'Type',
    '模式': 'Mode',
    '编码': 'Encoding',
    '解码': 'Decoding',
    '加密': 'Encrypt',
    '解密': 'Decrypt',
    '格式': 'Format',
    '选择文件': 'Choose File',
    '浏览文件': 'Browse Files',
    '拖拽文件至此处': 'Drag & drop files here',
    '拖拽文件到此处或点击上传': 'Drag & drop file here or click to upload',
    '点击选择文件': 'Click to select file',
    '支持格式': 'Supported formats',
    '文件名': 'File Name',
    '密码强度': 'Password Strength',
    '极强': 'Very Strong',
    '强': 'Strong',
    '中': 'Medium',
    '弱': 'Weak',
    '大写字母': 'Uppercase (A-Z)',
    '小写字母': 'Lowercase (a-z)',
    '数字': 'Numbers (0-9)',
    '特殊字符': 'Symbols (!@#$)',
    '排除歧义字符': 'Exclude Ambiguous (0,O,l,1)',
    '密钥': 'Secret Key',
    '哈希值': 'Hash Value',
    '公钥': 'Public Key',
    '私钥': 'Private Key',
    '时间戳': 'Timestamp',
    '当前时间': 'Current Time',
    '标准时间': 'Standard Time',
    '本地时间': 'Local Time',
    'UTC时间': 'UTC Time',
    '毫秒': 'Milliseconds',
    '秒': 'Seconds',
    '分钟': 'Minutes',
    '小时': 'Hours',
    '天': 'Days',
    '周': 'Weeks',
    '月': 'Months',
    '年': 'Years',
    '时区': 'Timezone',
    '贷款金额': 'Loan Amount',
    '贷款年限': 'Loan Term (Years)',
    '年利率': 'Annual Interest Rate (%)',
    '还款方式': 'Repayment Method',
    '等额本息': 'Equal Principal & Interest (EMI)',
    '等额本金': 'Equal Principal',
    '月供': 'Monthly Payment',
    '总利息': 'Total Interest',
    '还款总额': 'Total Repayment',
    '本金': 'Principal',
    '利息': 'Interest',
    '金额': 'Amount',
    '单价': 'Unit Price',
    '税率': 'Tax Rate',
    '折扣': 'Discount'
  };

  var regexKeys = Object.keys(EN_MAP).sort(function (a, b) {
    return b.length - a.length;
  });
  var translationRegex = new RegExp(
    regexKeys
      .map(function (k) {
        return k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      })
      .join('|'),
    'g'
  );

  function translateText(str) {
    if (!str || typeof str !== 'string') return str;
    if (!/[\u4e00-\u9fa5]/.test(str)) return str;
    return str.replace(translationRegex, function (matched) {
      return EN_MAP[matched] || matched;
    });
  }

  function translateNode(node) {
    if (!node) return;
    if (node.nodeType === 3) {
      var parent = node.parentNode;
      if (parent && parent.tagName && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) return;
      var text = node.nodeValue;
      if (text && /[\u4e00-\u9fa5]/.test(text)) {
        node.nodeValue = translateText(text);
      }
    } else if (node.nodeType === 1) {
      var tag = node.tagName.toLowerCase();
      if (tag === 'script' || tag === 'style') return;

      ['placeholder', 'title', 'aria-label', 'alt', 'data-placeholder', 'data-tip'].forEach(function (attr) {
        var val = node.getAttribute(attr);
        if (val && /[\u4e00-\u9fa5]/.test(val)) {
          node.setAttribute(attr, translateText(val));
        }
      });

      if ((tag === 'input' || tag === 'button') && node.value && /[\u4e00-\u9fa5]/.test(node.value)) {
        node.value = translateText(node.value);
      }

      for (var child = node.firstChild; child; child = child.nextSibling) {
        translateNode(child);
      }
    }
  }

  function runAutoTranslate() {
    root.setAttribute('lang', 'en');
    if (doc.title && /[\u4e00-\u9fa5]/.test(doc.title)) {
      doc.title = translateText(doc.title);
    }
    translateNode(doc.body);

    if (window.MutationObserver && doc.body) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function (n) {
              translateNode(n);
            });
          } else if (mutation.type === 'characterData') {
            if (mutation.target && /[\u4e00-\u9fa5]/.test(mutation.target.nodeValue)) {
              mutation.target.nodeValue = translateText(mutation.target.nodeValue);
            }
          }
        });
      });
      observer.observe(doc.body, { childList: true, subtree: true, characterData: true });
    }
  }

  /* --------------------------------------------------------
   * 启动
   * ------------------------------------------------------ */
  function start() {
    recordRecentTool();
    restoreFileLinks();
    normalizeHttpLinks();
    injectFallbackCSS();
    injectChrome();
    runAutoTranslate();
    loadHomepageRecentController();
    registerSW();
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
