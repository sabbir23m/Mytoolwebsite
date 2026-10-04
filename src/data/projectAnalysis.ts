export interface ToolItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  path: string;
  icon: string;
  keywords: string[];
  popularity: number;
}

export interface CategoryItem {
  key: string;
  name: string;
  icon: string;
  color: string;
  intro: string;
  count: number;
}

export const TOTAL_TOOLS = 1088;
export const TOTAL_CATEGORIES = 35;
export const CATEGORIES: CategoryItem[] = [
  {
    "key": "dev",
    "name": "开发工具",
    "icon": "⚡",
    "color": "cyan",
    "intro": "面向程序员的在线开发工具集合，涵盖 JSON、Base64、正则、JWT、哈希、编码转换等高频需求。所有处理在浏览器本地完成，无需安装、不上传数据。",
    "count": 205
  },
  {
    "key": "life",
    "name": "生活工具",
    "icon": "🏠",
    "color": "green",
    "intro": "贴近日常的在线生活工具，覆盖记账、提醒、换算、查询等场景，让生活琐事更省心。",
    "count": 67
  },
  {
    "key": "text",
    "name": "文本工具",
    "icon": "📝",
    "color": "yellow",
    "intro": "在线文本处理工具，支持格式化、对比、统计、大小写转换、查找替换等操作，帮你快速整理和加工各类文字内容。",
    "count": 65
  },
  {
    "key": "generator",
    "name": "生成器",
    "icon": "🎲",
    "color": "purple",
    "intro": "各类在线生成器，一键生成 UUID、密码、二维码、随机数、占位文本等，省去手动制作的麻烦。",
    "count": 59
  },
  {
    "key": "media",
    "name": "媒体工具",
    "icon": "🖼️",
    "color": "blue",
    "intro": "在线图片与媒体处理工具，支持压缩、格式转换、取色、裁剪、Base64 编码等，无需上传即可在浏览器内完成。",
    "count": 57
  },
  {
    "key": "calculator",
    "name": "计算器",
    "icon": "🔢",
    "color": "yellow",
    "intro": "各类在线计算器，覆盖贷款、利息、BMI、单位换算、百分比等日常与专业计算场景。",
    "count": 54
  },
  {
    "key": "design",
    "name": "设计工具",
    "icon": "🎨",
    "color": "pink",
    "intro": "面向设计师的在线工具，涵盖配色、渐变、阴影、字体、尺寸、图标等视觉设计需求。",
    "count": 48
  },
  {
    "key": "ai",
    "name": "AI 工具",
    "icon": "🤖",
    "color": "magenta",
    "intro": "与 AI 相关的实用在线工具，包括提示词辅助、文本处理、Token 估算等，提升与大模型协作的效率。",
    "count": 44
  },
  {
    "key": "travel",
    "name": "旅行工具",
    "icon": "✈️",
    "color": "cyan",
    "intro": "旅行规划相关的在线工具，涵盖行李清单、时差、预算、汇率、里程计算等出行需求。",
    "count": 39
  },
  {
    "key": "converter",
    "name": "转换器",
    "icon": "🔄",
    "color": "purple",
    "intro": "在线格式与单位转换工具，支持文档、数据、编码、度量单位之间的互转，快速搞定格式不兼容问题。",
    "count": 38
  },
  {
    "key": "office",
    "name": "办公效率",
    "icon": "📊",
    "color": "blue",
    "intro": "提升办公效率的在线工具，涵盖文档、表格、计时、清单、格式处理等日常办公场景。",
    "count": 34
  },
  {
    "key": "health",
    "name": "医疗健康",
    "icon": "⚕️",
    "color": "red",
    "intro": "健康管理类在线工具，涵盖 BMI、热量、心率、用药、体征计算等，帮助关注身体状况。",
    "count": 30
  },
  {
    "key": "data",
    "name": "数据工具",
    "icon": "📊",
    "color": "blue",
    "intro": "在线数据处理工具，支持表格、CSV/JSON 转换、清洗、统计、可视化等数据加工需求。",
    "count": 30
  },
  {
    "key": "network",
    "name": "网络工具",
    "icon": "🌐",
    "color": "cyan",
    "intro": "网络相关的在线工具，支持 IP 查询、子网计算、DNS、URL 解析、端口参考等，便于排查与配置网络。",
    "count": 22
  },
  {
    "key": "fun",
    "name": "趣味工具",
    "icon": "🎯",
    "color": "orange",
    "intro": "轻松有趣的在线小工具，用于消遣、抽签、测试、随机决策，给日常添点乐趣。",
    "count": 22
  },
  {
    "key": "game",
    "name": "小游戏",
    "icon": "🎮",
    "color": "purple",
    "intro": "浏览器即开即玩的在线小游戏，无需下载安装，利用碎片时间放松一下。",
    "count": 22
  },
  {
    "key": "finance",
    "name": "财务工具",
    "icon": "💰",
    "color": "green",
    "intro": "个人与企业财务相关的在线工具，包括贷款、税务、投资、汇率、预算计算，辅助理财决策。",
    "count": 21
  },
  {
    "key": "education",
    "name": "教育学习",
    "icon": "📚",
    "color": "blue",
    "intro": "面向学习与教学的在线工具，涵盖单位换算、公式计算、记忆训练、成绩统计等。",
    "count": 20
  },
  {
    "key": "math",
    "name": "数学工具",
    "icon": "🔢",
    "color": "blue",
    "intro": "数学相关的在线工具，涵盖方程、几何、统计、进制、概率等计算与求解需求。",
    "count": 19
  },
  {
    "key": "food",
    "name": "餐饮食品",
    "icon": "🍳",
    "color": "orange",
    "intro": "与饮食相关的在线工具，包括食谱换算、热量计算、烹饪计时、营养参考等。",
    "count": 18
  },
  {
    "key": "business",
    "name": "商业工具",
    "icon": "💼",
    "color": "cyan",
    "intro": "面向企业与创业者的在线工具，涵盖报价、发票、利润、营销文案等日常经营需求。",
    "count": 17
  },
  {
    "key": "realestate",
    "name": "房产工具",
    "icon": "🏠",
    "color": "blue",
    "intro": "房产与租房相关的在线工具，涵盖房贷、首付、税费、面积、租金计算，辅助购房与租房决策。",
    "count": 16
  },
  {
    "key": "chinese",
    "name": "中文工具",
    "icon": "中",
    "color": "red",
    "intro": "专为中文场景设计的在线工具，涵盖简繁转换、拼音、字数统计、汉字查询等。",
    "count": 15
  },
  {
    "key": "crypto",
    "name": "加密货币",
    "icon": "₿",
    "color": "orange",
    "intro": "加密货币相关的在线工具，包括价格换算、收益计算、地址校验、Gas 费参考等。",
    "count": 15
  },
  {
    "key": "time",
    "name": "时间工具",
    "icon": "⏰",
    "color": "magenta",
    "intro": "时间与日期相关的在线工具，包括时间戳转换、时区换算、倒计时、日期计算等，轻松处理跨时区与时间格式问题。",
    "count": 14
  },
  {
    "key": "privacy",
    "name": "隐私安全",
    "icon": "🔒",
    "color": "green",
    "intro": "注重隐私的在线工具，涵盖数据脱敏、匿名化、本地加密等，所有运算在本地进行，保护敏感信息不外泄。",
    "count": 14
  },
  {
    "key": "security",
    "name": "安全工具",
    "icon": "🛡️",
    "color": "red",
    "intro": "在线安全工具集合，包括哈希校验、加解密、密码强度检测等，帮助验证数据完整性与账户安全。",
    "count": 13
  },
  {
    "key": "legal",
    "name": "法律合规",
    "icon": "⚖️",
    "color": "purple",
    "intro": "法律与合规相关的在线工具，涵盖合同要素、隐私政策、赔偿计算、条款参考等常见场景。",
    "count": 13
  },
  {
    "key": "social-media",
    "name": "社交媒体",
    "icon": "📱",
    "color": "pink",
    "intro": "面向自媒体与运营的在线工具，涵盖文案、标签、字数限制、封面尺寸等社媒内容制作需求。",
    "count": 13
  },
  {
    "key": "team-tools",
    "name": "团队协作",
    "icon": "👥",
    "color": "teal",
    "intro": "面向团队的在线协作工具，涵盖排期、投票、分工、会议、估时等协作场景。",
    "count": 12
  },
  {
    "key": "seo",
    "name": "SEO 工具",
    "icon": "📈",
    "color": "green",
    "intro": "面向网站优化的在线 SEO 工具，涵盖 meta 标签、结构化数据、关键词、sitemap 等，助力搜索引擎排名。",
    "count": 9
  },
  {
    "key": "productivity",
    "name": "效率工具",
    "icon": "🎯",
    "color": "cyan",
    "intro": "提升个人效率的在线工具，涵盖待办、专注计时、习惯追踪、决策辅助等。",
    "count": 7
  },
  {
    "key": "pets",
    "name": "宠物工具",
    "icon": "🐾",
    "color": "orange",
    "intro": "养宠相关的在线工具，涵盖年龄换算、喂食量、健康提醒等宠物日常照护需求。",
    "count": 6
  },
  {
    "key": "extractor",
    "name": "提取器",
    "icon": "📤",
    "color": "blue",
    "intro": "在线信息提取工具，从文本、网页、文件中抽取链接、邮箱、关键词等结构化数据。",
    "count": 5
  },
  {
    "key": "ai-coding",
    "name": "AI 编程",
    "icon": "🤖",
    "color": "purple",
    "intro": "AI 编程与 Vibe Coding 资源导航，汇集 AI IDE、Claude Skills、Cursor Rules、MCP 等工具与指南。",
    "count": 5
  }
];

export const SAMPLE_TOOLS: ToolItem[] = [
  {
    "id": "1",
    "name": "AI Coding 资源导航",
    "category": "ai-coding",
    "desc": "AI Coding 资源导航，在线使用，AI 编程，浏览器本地运行无需上传",
    "path": "tools/ai-coding/index.html",
    "icon": "🔧",
    "keywords": [
      "ai coding 资源导航"
    ],
    "popularity": 0
  },
  {
    "id": "2",
    "name": "AI IDE 环境指南",
    "category": "ai-coding",
    "desc": "AI IDE 环境指南，在线使用，AI 编程，浏览器本地运行无需上传",
    "path": "tools/ai-coding/wiki/ai-ide.html",
    "icon": "🔧",
    "keywords": [
      "ai ide 环境指南"
    ],
    "popularity": 0
  },
  {
    "id": "3",
    "name": "Claude Skills 指南",
    "category": "ai-coding",
    "desc": "Claude Skills 指南，在线使用，AI 编程，浏览器本地运行无需上传",
    "path": "tools/ai-coding/wiki/claude-skills.html",
    "icon": "🔧",
    "keywords": [
      "claude skills 指南"
    ],
    "popularity": 0
  },
  {
    "id": "4",
    "name": "Cursor Rules 指南",
    "category": "ai-coding",
    "desc": "Cursor Rules 指南，在线使用，AI 编程，浏览器本地运行无需上传",
    "path": "tools/ai-coding/wiki/cursor-rules.html",
    "icon": "🔧",
    "keywords": [
      "cursor rules 指南"
    ],
    "popularity": 0
  },
  {
    "id": "5",
    "name": "MCP Servers 指南",
    "category": "ai-coding",
    "desc": "MCP Servers 指南，在线使用，AI 编程，浏览器本地运行无需上传",
    "path": "tools/ai-coding/wiki/mcp-servers.html",
    "icon": "🔧",
    "keywords": [
      "mcp servers 指南"
    ],
    "popularity": 0
  },
  {
    "id": "6",
    "name": "AGI 2026 展望",
    "category": "ai",
    "desc": "AGI 2026展望：OpenAI/Anthropic/马斯克预测，超级智能时代",
    "path": "tools/ai/agi-2026-outlook.html",
    "icon": "🔮",
    "keywords": [
      "agi 通用人工智能 2026 openai anthropic 超级智能 预测"
    ],
    "popularity": 0
  },
  {
    "id": "7",
    "name": "AI Agent 2025 年度指南",
    "category": "ai",
    "desc": "2025 AI Agent商业化元年：OpenAI Operator、Google Jarvis、Copilot全解析",
    "path": "tools/ai/ai-agent-2025-guide.html",
    "icon": "🤖",
    "keywords": [
      "ai agent operator jarvis copilot 智能体 自主ai 2025"
    ],
    "popularity": 0
  },
  {
    "id": "8",
    "name": "AI Agent 入门指南",
    "category": "ai",
    "desc": "AI Agent 2024 入门指南，涵盖主流框架、应用场景和发展趋势",
    "path": "tools/ai/ai-agent-guide.html",
    "icon": "🤖",
    "keywords": [
      "ai agent 智能体 autogpt langchain dify"
    ],
    "popularity": 0
  },
  {
    "id": "9",
    "name": "AI 编程工具 2025",
    "category": "ai",
    "desc": "2025 年 AI 编程工具全面对比：Cursor、Windsurf、Claude Code、Copilot",
    "path": "tools/ai/ai-coding-tools-2025.html",
    "icon": "💻",
    "keywords": [
      "ai编程 cursor windsurf claude code copilot 2025"
    ],
    "popularity": 0
  },
  {
    "id": "10",
    "name": "AI 编程工具对比",
    "category": "ai",
    "desc": "Cursor vs Windsurf vs Cline vs Copilot 对比，AI 编程工具选择指南",
    "path": "tools/ai/ai-coding-tools.html",
    "icon": "🤖",
    "keywords": [
      "cursor windsurf cline copilot ai编程"
    ],
    "popularity": 0
  },
  {
    "id": "11",
    "name": "AI 图像生成工具大全",
    "category": "ai",
    "desc": "2025年AI图像生成完整指南：Flux vs Midjourney vs SD对比",
    "path": "tools/ai/ai-image-generation-2025.html",
    "icon": "🎨",
    "keywords": [
      "ai 图像生成 flux midjourney stable diffusion dall-e ideogram 可灵 通义万相"
    ],
    "popularity": 0
  },
  {
    "id": "12",
    "name": "AI 模型对比表",
    "category": "ai",
    "desc": "AI 模型对比表，在线使用，AI 工具，浏览器本地运行无需上传",
    "path": "tools/ai/ai-models.html",
    "icon": "🤖",
    "keywords": [
      "ai 模型对比表"
    ],
    "popularity": 0
  },
  {
    "id": "13",
    "name": "AI API 价格计算器",
    "category": "ai",
    "desc": "AI API 价格计算器，快速计算结果，AI 工具，浏览器本地运行无需上传",
    "path": "tools/ai/ai-pricing.html",
    "icon": "💰",
    "keywords": [
      "ai api 价格计算器"
    ],
    "popularity": 0
  },
  {
    "id": "14",
    "name": "AI 视频生成对比 2025",
    "category": "ai",
    "desc": "可灵2.0/Runway Gen-4.5/Sora Turbo/海螺AI/Vidu 2.0 全面对比",
    "path": "tools/ai/ai-video-generation-2025.html",
    "icon": "🎬",
    "keywords": [
      "ai视频 可灵 runway sora 海螺 vidu 视频生成 文生视频 2025"
    ],
    "popularity": 0
  },
  {
    "id": "15",
    "name": "国产大模型 2025",
    "category": "ai",
    "desc": "2025年12月国产大模型最新：GLM-4.7、MiniMax M2.1、DeepSeek、Qwen",
    "path": "tools/ai/china-llm-2025.html",
    "icon": "🤖",
    "keywords": [
      "glm-4.7 minimax m2.1 deepseek qwen 智谱 国产大模型"
    ],
    "popularity": 0
  },
  {
    "id": "16",
    "name": "Claude 4 使用指南",
    "category": "ai",
    "desc": "Anthropic Claude 4 系列完整指南：Opus 4.5、Sonnet 4.5",
    "path": "tools/ai/claude-4-guide.html",
    "icon": "🤖",
    "keywords": [
      "claude 4 opus sonnet anthropic ai"
    ],
    "popularity": 0
  },
  {
    "id": "17",
    "name": "Claude Code 生态大全",
    "category": "ai",
    "desc": "Claude Code 生态系统完整指南：MCP Servers、Skills、插件市场",
    "path": "tools/ai/claude-code-ecosystem.html",
    "icon": "🤖",
    "keywords": [
      "claude code mcp skills 插件 servers"
    ],
    "popularity": 0
  },
  {
    "id": "18",
    "name": "Claude Skills 精选",
    "category": "ai",
    "desc": "Anthropic 官方 Skills 集合，提升 Claude 特定任务表现",
    "path": "tools/ai/claude-skills.html",
    "icon": "✨",
    "keywords": [
      "claude skills anthropic 技能 plugin 插件 pdf xlsx docx pptx"
    ],
    "popularity": 0
  },
  {
    "id": "19",
    "name": "Cursor 快捷键速查",
    "category": "ai",
    "desc": "Cursor 快捷键速查，在线使用，AI 工具，浏览器本地运行无需上传",
    "path": "tools/ai/cursor-shortcuts.html",
    "icon": "🔧",
    "keywords": [
      "cursor 快捷键速查"
    ],
    "popularity": 0
  },
  {
    "id": "20",
    "name": "DeepSeek API 使用指南 | 在线工具",
    "category": "ai",
    "desc": "DeepSeek API 使用指南 | 在线工具，在线使用，AI 工具，浏览器本地运行无需上传",
    "path": "tools/ai/deepseek-guide.html",
    "icon": "🔧",
    "keywords": [
      "deepseek api 使用指南 | 在线工具"
    ],
    "popularity": 0
  },
  {
    "id": "21",
    "name": "DeepSeek V3 完整指南",
    "category": "ai",
    "desc": "DeepSeek V3 最新版：6850亿参数MoE架构，557万美元训练成本，MIT开源",
    "path": "tools/ai/deepseek-v3-guide.html",
    "icon": "🐋",
    "keywords": [
      "deepseek v3 开源 moe 大模型 中国ai 幻方量化 2025"
    ],
    "popularity": 0
  },
  {
    "id": "22",
    "name": "豆包 1.8 使用指南",
    "category": "ai",
    "desc": "字节跳动豆包 1.8 大模型使用指南",
    "path": "tools/ai/doubao-1.8-guide.html",
    "icon": "🫘",
    "keywords": [
      "豆包 doubao 字节跳动 bytedance 大模型"
    ],
    "popularity": 0
  },
  {
    "id": "23",
    "name": "Gemini 2.5 Pro 指南",
    "category": "ai",
    "desc": "Google最智能AI模型：首个思考模型，100万token上下文，LMArena第一",
    "path": "tools/ai/gemini-2.5-pro-guide.html",
    "icon": "💎",
    "keywords": [
      "gemini 2.5 pro google 思考模型 推理 多模态 lmarena 2025"
    ],
    "popularity": 0
  },
  {
    "id": "24",
    "name": "Gemini 3 使用指南",
    "category": "ai",
    "desc": "Google Gemini 3 完整指南：Pro/Flash 版本，万亿参数，100万token上下文",
    "path": "tools/ai/gemini3-guide.html",
    "icon": "🤖",
    "keywords": [
      "gemini 3 gemini 3 pro gemini 3 flash google 谷歌 deep research"
    ],
    "popularity": 0
  },
  {
    "id": "25",
    "name": "GPT-5 完整指南",
    "category": "ai",
    "desc": "OpenAI GPT-5 系列指南：GPT-5.2 三版本策略、Instant/Thinking/Pro 详解",
    "path": "tools/ai/gpt5-guide.html",
    "icon": "🤖",
    "keywords": [
      "gpt-5 gpt5 openai chatgpt gpt-5.2 大语言模型"
    ],
    "popularity": 0
  },
  {
    "id": "26",
    "name": "Grok 4 使用指南",
    "category": "ai",
    "desc": "xAI Grok 4 完整指南：Grok 4 Heavy AIME满分，博士级AI，年费3000美元",
    "path": "tools/ai/grok4-guide.html",
    "icon": "🤖",
    "keywords": [
      "grok 4 grok 4 heavy xai 马斯克 elon musk aime"
    ],
    "popularity": 0
  },
  {
    "id": "27",
    "name": "人形机器人 2025",
    "category": "ai",
    "desc": "2025 年人形机器人发展综述：特斯拉 Optimus、Figure、波士顿动力",
    "path": "tools/ai/humanoid-robots-2025.html",
    "icon": "🤖",
    "keywords": [
      "人形机器人 optimus figure boston dynamics 2025"
    ],
    "popularity": 0
  },
  {
    "id": "28",
    "name": "Kimi K2 完整指南",
    "category": "ai",
    "desc": "月之暗面 Kimi K2：万亿参数开源大模型，Agent时代先驱",
    "path": "tools/ai/kimi-k2-guide.html",
    "icon": "🌙",
    "keywords": [
      "kimi k2 月之暗面 moonshot 开源 moe agent 万亿参数"
    ],
    "popularity": 0
  },
  {
    "id": "29",
    "name": "Llama 4 完整指南",
    "category": "ai",
    "desc": "Meta Llama 4：MoE架构多模态开源模型，千万token上下文",
    "path": "tools/ai/llama-4-guide.html",
    "icon": "🦙",
    "keywords": [
      "llama 4 meta 开源 moe scout maverick behemoth 多模态"
    ],
    "popularity": 0
  },
  {
    "id": "30",
    "name": "MCP 客户端大全",
    "category": "ai",
    "desc": "支持 MCP 的 AI 客户端、IDE 和开发工具汇总",
    "path": "tools/ai/mcp-clients.html",
    "icon": "🖥️",
    "keywords": [
      "mcp 客户端 cherry studio cursor windsurf cline chatbox raycast openrouter ai ide"
    ],
    "popularity": 0
  },
  {
    "id": "31",
    "name": "MCP 配置指南",
    "category": "ai",
    "desc": "Model Context Protocol 配置教程与热门服务器",
    "path": "tools/ai/mcp-guide.html",
    "icon": "🔌",
    "keywords": [
      "mcp model context protocol 配置 服务器 claude desktop code"
    ],
    "popularity": 0
  },
  {
    "id": "32",
    "name": "MCP 协议指南",
    "category": "ai",
    "desc": "Model Context Protocol 完整指南：连接 AI 与外部工具",
    "path": "tools/ai/mcp-protocol-guide.html",
    "icon": "🔗",
    "keywords": [
      "mcp protocol model context ai tools"
    ],
    "popularity": 0
  },
  {
    "id": "33",
    "name": "Midjourney V7 指南",
    "category": "ai",
    "desc": "Midjourney V7 完整指南：草图模式、语音生图、Omni-Reference 全向参考",
    "path": "tools/ai/midjourney-v7-guide.html",
    "icon": "🤖",
    "keywords": [
      "midjourney v7 ai绘画 文生图 草图模式 语音生图"
    ],
    "popularity": 0
  },
  {
    "id": "34",
    "name": "Nemotron 3 指南",
    "category": "ai",
    "desc": "Nvidia Nemotron 3 开源大模型使用指南",
    "path": "tools/ai/nemotron-3-guide.html",
    "icon": "🟢",
    "keywords": [
      "nemotron nvidia 开源 大模型"
    ],
    "popularity": 0
  },
  {
    "id": "35",
    "name": "NotebookLM 指南",
    "category": "ai",
    "desc": "Google NotebookLM AI 笔记助手使用指南",
    "path": "tools/ai/notebooklm-guide.html",
    "icon": "📓",
    "keywords": [
      "notebooklm google ai 笔记 助手"
    ],
    "popularity": 0
  },
  {
    "id": "36",
    "name": "OpenAI o3/o4-mini 指南",
    "category": "ai",
    "desc": "首个图像思维链推理模型：o3旗舰推理、o4-mini高效推理、Codex CLI",
    "path": "tools/ai/openai-o3-o4-guide.html",
    "icon": "🧠",
    "keywords": [
      "openai o3 o4-mini 图像思维链 推理模型 codex cli 视觉 2025"
    ],
    "popularity": 0
  },
  {
    "id": "37",
    "name": "OpenAI 推理模型指南",
    "category": "ai",
    "desc": "o1/o3/o4-mini 推理模型完全解析：图像思维链、工具调用、Codex CLI",
    "path": "tools/ai/openai-reasoning-models-2025.html",
    "icon": "🧠",
    "keywords": [
      "openai o1 o3 o4-mini reasoning 推理模型 codex cli 思维链 2025"
    ],
    "popularity": 0
  },
  {
    "id": "38",
    "name": "Perplexity 指南",
    "category": "ai",
    "desc": "Perplexity AI 深度搜索使用指南",
    "path": "tools/ai/perplexity-guide.html",
    "icon": "🔍",
    "keywords": [
      "perplexity ai search 搜索 深度研究"
    ],
    "popularity": 0
  },
  {
    "id": "39",
    "name": "Prompt 模板库",
    "category": "ai",
    "desc": "AI 提示词模板库",
    "path": "tools/ai/prompt-templates.html",
    "icon": "📝",
    "keywords": [
      "prompt 模板库"
    ],
    "popularity": 0
  },
  {
    "id": "40",
    "name": "Prompt 技巧速查 2025",
    "category": "ai",
    "desc": "2025 年 Prompt Engineering 实用技巧速查，含 10 大核心技术",
    "path": "tools/ai/prompt-tips-2025.html",
    "icon": "🤖",
    "keywords": [
      "prompt 提示词 cot few-shot react"
    ],
    "popularity": 0
  },
  {
    "id": "41",
    "name": "RAG 技术完全指南",
    "category": "ai",
    "desc": "2025年RAG技术完整指南：框架、向量库、Embedding模型详解",
    "path": "tools/ai/rag-technology-2025.html",
    "icon": "📚",
    "keywords": [
      "rag 检索增强 langchain llamaindex 向量数据库 embedding pinecone milvus"
    ],
    "popularity": 0
  },
  {
    "id": "42",
    "name": "Sora 视频生成指南",
    "category": "ai",
    "desc": "OpenAI Sora 视频生成入门指南，包含定价、使用教程、Prompt 技巧",
    "path": "tools/ai/sora-guide.html",
    "icon": "🤖",
    "keywords": [
      "sora openai 视频生成 ai视频 text-to-video"
    ],
    "popularity": 0
  },
  {
    "id": "43",
    "name": "Suno AI 音乐指南",
    "category": "ai",
    "desc": "Suno V4 AI 音乐生成完整指南",
    "path": "tools/ai/suno-ai-music-guide.html",
    "icon": "🎵",
    "keywords": [
      "suno ai music 音乐生成 v4"
    ],
    "popularity": 0
  },
  {
    "id": "44",
    "name": "Token 计数器",
    "category": "ai",
    "desc": "估算 AI 模型 Token 数量",
    "path": "tools/ai/token-counter.html",
    "icon": "🔢",
    "keywords": [
      "token 计数器"
    ],
    "popularity": 0
  },
  {
    "id": "45",
    "name": "TTS 语音合成工具大全",
    "category": "ai",
    "desc": "2025年TTS语音合成工具完整指南：开源与商业方案对比",
    "path": "tools/ai/tts-tools-2025.html",
    "icon": "🎙️",
    "keywords": [
      "tts 语音合成 cosyvoice fish speech chattts gpt-sovits elevenlabs 语音克隆"
    ],
    "popularity": 0
  },
  {
    "id": "46",
    "name": "UI/UX 设计资源导航",
    "category": "ai",
    "desc": "UI/UX设计资源综合导航：灵感、组件库、图标、配色、字体、素材一站式指南",
    "path": "tools/ai/ui-ux-design-resources.html",
    "icon": "🎨",
    "keywords": [
      "ui ux 设计 design dribbble behance awwwards 组件库 图标 配色 字体 素材"
    ],
    "popularity": 0
  },
  {
    "id": "47",
    "name": "Vibe Coding 入门指南",
    "category": "ai",
    "desc": "2025 Collins 年度词汇 Vibe Coding：AI 辅助编程新范式完全指南",
    "path": "tools/ai/vibe-coding-guide.html",
    "icon": "🎵",
    "keywords": [
      "vibe coding ai编程 cursor windsurf claude code copilot 自然语言编程 2025"
    ],
    "popularity": 0
  },
  {
    "id": "48",
    "name": "万象 2.6 视频指南",
    "category": "ai",
    "desc": "阿里巴巴万象 2.6 AI 视频生成指南",
    "path": "tools/ai/wanxiang-2.6-guide.html",
    "icon": "🎬",
    "keywords": [
      "万象 wanxiang alibaba 视频生成 ai"
    ],
    "popularity": 0
  },
  {
    "id": "49",
    "name": "缓动函数可视化",
    "category": "dev",
    "desc": "35+ 缓动函数可视化预览，支持 CSS/JS/Anime.js/GSAP 多格式导出",
    "path": "tools/dev/easing-visualizer.html",
    "icon": "〰️",
    "keywords": [
      "easing 缓动 动画 cubic-bezier 贝塞尔 timing-function transition animation ease bounce elastic spring gsap animejs"
    ],
    "popularity": 0
  },
  {
    "id": "50",
    "name": "年龄差计算器",
    "category": "calculator",
    "desc": "年龄差计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/age-diff-calc.html",
    "icon": "👥",
    "keywords": [
      "age diff calc 年龄差计算器"
    ],
    "popularity": 0
  },
  {
    "id": "51",
    "name": "宽高比计算器",
    "category": "calculator",
    "desc": "计算和转换宽高比，支持常见视频图片分辨率",
    "path": "tools/calculator/aspect-ratio-calculator.html",
    "icon": "📐",
    "keywords": [
      "aspect ratio 宽高比 比例 分辨率 16:9"
    ],
    "popularity": 0
  },
  {
    "id": "52",
    "name": "进制计算器",
    "category": "calculator",
    "desc": "多进制转换和位运算计算器，支持可视化位操作",
    "path": "tools/calculator/base-calculator.html",
    "icon": "🔢",
    "keywords": [
      "进制 计算器 二进制 八进制 十六进制 位运算 bit"
    ],
    "popularity": 0
  },
  {
    "id": "53",
    "name": "位运算计算器",
    "category": "calculator",
    "desc": "位运算计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/bitwise-calculator.html",
    "icon": "&",
    "keywords": [
      "位运算计算器"
    ],
    "popularity": 0
  },
  {
    "id": "54",
    "name": "BMI 计算器",
    "category": "calculator",
    "desc": "计算身体质量指数，评估体重健康状况",
    "path": "tools/calculator/bmi-calculator.html",
    "icon": "⚖️",
    "keywords": [
      "bmi 身体质量指数 体重 健康 计算器"
    ],
    "popularity": 65
  },
  {
    "id": "55",
    "name": "电费计算器",
    "category": "calculator",
    "desc": "电费计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/electricity-calc.html",
    "icon": "🔢",
    "keywords": [
      "electricity calc 电费计算器"
    ],
    "popularity": 0
  },
  {
    "id": "56",
    "name": "函数图像绘制器",
    "category": "calculator",
    "desc": "绘制数学函数图像",
    "path": "tools/calculator/function-plotter.html",
    "icon": "📊",
    "keywords": [
      "函数 图像 绘制 数学 坐标 function plot graph"
    ],
    "popularity": 0
  },
  {
    "id": "57",
    "name": "贷款计算器",
    "category": "calculator",
    "desc": "计算贷款月供、总利息，支持两种还款方式",
    "path": "tools/calculator/loan-calculator.html",
    "icon": "💰",
    "keywords": [
      "贷款 房贷 计算器 等额本息 等额本金 还款"
    ],
    "popularity": 0
  },
  {
    "id": "58",
    "name": "数学表达式计算器",
    "category": "calculator",
    "desc": "计算复杂数学表达式，支持函数和常量",
    "path": "tools/calculator/math-evaluator.html",
    "icon": "∑",
    "keywords": [
      "数学 表达式 计算器 公式 函数 math"
    ],
    "popularity": 0
  },
  {
    "id": "59",
    "name": "百分比计算器",
    "category": "calculator",
    "desc": "多种百分比计算模式：求百分比、增减、占比等",
    "path": "tools/calculator/percentage.html",
    "icon": "%",
    "keywords": [
      "百分比 percent 计算 增长率 折扣"
    ],
    "popularity": 0
  },
  {
    "id": "60",
    "name": "进度计算器",
    "category": "calculator",
    "desc": "计算项目进度百分比和预计完成时间",
    "path": "tools/calculator/progress.html",
    "icon": "📈",
    "keywords": [
      "进度 百分比 完成度 项目 预估"
    ],
    "popularity": 0
  },
  {
    "id": "61",
    "name": "税后工资计算器",
    "category": "calculator",
    "desc": "税后工资计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/salary-calc.html",
    "icon": "🔢",
    "keywords": [
      "salary calc 税后工资计算器"
    ],
    "popularity": 0
  },
  {
    "id": "62",
    "name": "网速计算器",
    "category": "calculator",
    "desc": "网速计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/speed-calc.html",
    "icon": "🔧",
    "keywords": [
      "网速计算器"
    ],
    "popularity": 0
  },
  {
    "id": "63",
    "name": "统计计算器",
    "category": "calculator",
    "desc": "统计计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/statistics-calc.html",
    "icon": "📈",
    "keywords": [
      "统计计算器"
    ],
    "popularity": 0
  },
  {
    "id": "64",
    "name": "存储单位换算",
    "category": "calculator",
    "desc": "B/KB/MB/GB/TB/PB 存储单位互转",
    "path": "tools/calculator/storage-converter.html",
    "icon": "💾",
    "keywords": [
      "存储 单位 字节 kb mb gb tb 换算"
    ],
    "popularity": 0
  },
  {
    "id": "65",
    "name": "时间加减计算器",
    "category": "calculator",
    "desc": "时间加减计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/time-calc.html",
    "icon": "🔧",
    "keywords": [
      "时间加减计算器"
    ],
    "popularity": 0
  },
  {
    "id": "66",
    "name": "小费/AA计算器",
    "category": "calculator",
    "desc": "小费/AA计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/tip-calculator.html",
    "icon": "💰",
    "keywords": [
      "tip calculator 小费/aa计算器"
    ],
    "popularity": 0
  },
  {
    "id": "67",
    "name": "三角函数计算器",
    "category": "calculator",
    "desc": "三角函数计算器，快速计算结果，计算器，浏览器本地运行无需上传",
    "path": "tools/calculator/triangle-calc.html",
    "icon": "🔢",
    "keywords": [
      "triangle calc 三角函数计算器"
    ],
    "popularity": 0
  },
  {
    "id": "68",
    "name": "角度单位转换器",
    "category": "converter",
    "desc": "度、弧度、梯度等角度单位互转",
    "path": "tools/converter/angle-converter.html",
    "icon": "📐",
    "keywords": [
      "angle 角度 弧度 度 梯度 转换"
    ],
    "popularity": 0
  },
  {
    "id": "69",
    "name": "CSV ⇄ JSON 转换",
    "category": "converter",
    "desc": "CSV 和 JSON 双向转换，支持表格预览",
    "path": "tools/converter/csv-json.html",
    "icon": "📊",
    "keywords": [
      "csv json 转换 表格 数据 excel converter"
    ],
    "popularity": 0
  },
  {
    "id": "70",
    "name": "cURL to Code",
    "category": "converter",
    "desc": "将 cURL 命令转换为多种编程语言代码",
    "path": "tools/converter/curl-to-code.html",
    "icon": "🔧",
    "keywords": [
      "curl 转换 代码 javascript python go php java api 请求"
    ],
    "popularity": 0
  },
  {
    "id": "71",
    "name": "数据存储单位转换器",
    "category": "converter",
    "desc": "Bit、Byte、KB、MB、GB 等单位互转",
    "path": "tools/converter/data-size-converter.html",
    "icon": "💾",
    "keywords": [
      "data size 数据 存储 KB MB GB TB 转换"
    ],
    "popularity": 0
  },
  {
    "id": "72",
    "name": "数据大小转换器",
    "category": "converter",
    "desc": "数据存储单位之间的转换",
    "path": "tools/converter/data-size.html",
    "icon": "💾",
    "keywords": [
      "data size converter 数据 大小 转换"
    ],
    "popularity": 0
  },
  {
    "id": "73",
    "name": "Data URL 转换器",
    "category": "converter",
    "desc": "文件与 Data URL/Base64 互转，支持多种输出格式",
    "path": "tools/converter/data-url-converter.html",
    "icon": "🔗",
    "keywords": [
      "data url base64 图片 文件 编码 解码 转换"
    ],
    "popularity": 0
  },
  {
    "id": "74",
    "name": "文件大小计算器",
    "category": "converter",
    "desc": "文件大小单位转换",
    "path": "tools/converter/file-size.html",
    "icon": "📁",
    "keywords": [
      "文件大小计算器"
    ],
    "popularity": 0
  },
  {
    "id": "75",
    "name": "HTML 转 Markdown",
    "category": "converter",
    "desc": "将 HTML 代码转换为 Markdown 格式",
    "path": "tools/converter/html-to-markdown.html",
    "icon": "📝",
    "keywords": [
      "html markdown 转换 md 格式"
    ],
    "popularity": 0
  },
  {
    "id": "76",
    "name": "JSON ⇄ YAML 转换",
    "category": "converter",
    "desc": "JSON 和 YAML 双向转换，支持格式化和压缩",
    "path": "tools/converter/json-yaml.html",
    "icon": "🔄",
    "keywords": [
      "json yaml 转换 converter 配置文件 双向转换"
    ],
    "popularity": 88
  },
  {
    "id": "77",
    "name": "数字转大写",
    "category": "converter",
    "desc": "数字转大写，在线使用，转换器，浏览器本地运行无需上传",
    "path": "tools/converter/number-words.html",
    "icon": "🔧",
    "keywords": [
      "数字转大写"
    ],
    "popularity": 0
  },
  {
    "id": "78",
    "name": "压力单位转换器",
    "category": "converter",
    "desc": "帕斯卡、巴、大气压、PSI 等压力单位互转",
    "path": "tools/converter/pressure-converter.html",
    "icon": "🌡️",
    "keywords": [
      "pressure 压力 帕斯卡 巴 大气压 psi 转换"
    ],
    "popularity": 0
  },
  {
    "id": "79",
    "name": "单位转换器",
    "category": "converter",
    "desc": "长度、重量、温度、面积等多种单位换算",
    "path": "tools/converter/unit-converter.html",
    "icon": "⚖️",
    "keywords": [
      "单位 换算 长度 重量 温度 面积"
    ],
    "popularity": 0
  },
  {
    "id": "80",
    "name": "API 响应模拟器",
    "category": "dev",
    "desc": "API 响应模拟器，在线模拟，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/api-mock.html",
    "icon": "🔧",
    "keywords": [
      "api 响应模拟器"
    ],
    "popularity": 0
  },
  {
    "id": "81",
    "name": "箭头符号生成器",
    "category": "dev",
    "desc": "箭头符号生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/arrow-generator.html",
    "icon": "➡",
    "keywords": [
      "arrow generator 箭头符号生成器"
    ],
    "popularity": 0
  },
  {
    "id": "82",
    "name": "ASCII 艺术",
    "category": "dev",
    "desc": "将文字转换为 ASCII 艺术字体",
    "path": "tools/dev/ascii-art.html",
    "icon": "▓",
    "keywords": [
      "ascii art 艺术字 文字图案 banner figlet"
    ],
    "popularity": 0
  },
  {
    "id": "83",
    "name": "ASCII 码表",
    "category": "dev",
    "desc": "ASCII 码表速查",
    "path": "tools/dev/ascii-table.html",
    "icon": "A",
    "keywords": [
      "ascii 码表"
    ],
    "popularity": 0
  },
  {
    "id": "84",
    "name": "Base64 编解码",
    "category": "dev",
    "desc": "Base64 编码与解码，支持文本和文件",
    "path": "tools/dev/base64.html",
    "icon": "b64",
    "keywords": [
      "base64 编码 解码 encode decode"
    ],
    "popularity": 95
  },
  {
    "id": "85",
    "name": "Basic Auth 生成器",
    "category": "dev",
    "desc": "生成 HTTP Basic Authentication 头部",
    "path": "tools/dev/basic-auth-generator.html",
    "icon": "🔑",
    "keywords": [
      "basic auth 认证 authorization http 头"
    ],
    "popularity": 0
  },
  {
    "id": "86",
    "name": "Box Shadow 生成器",
    "category": "dev",
    "desc": "可视化创建 CSS box-shadow，支持多层阴影和预设样式",
    "path": "tools/dev/box-shadow.html",
    "icon": "◰",
    "keywords": [
      "box-shadow 阴影 css 生成器 预设 多层"
    ],
    "popularity": 0
  },
  {
    "id": "87",
    "name": "浏览器存储查看器",
    "category": "dev",
    "desc": "查看和管理浏览器 LocalStorage、SessionStorage 和 Cookies",
    "path": "tools/dev/browser-storage-viewer.html",
    "icon": "🗄️",
    "keywords": [
      "localstorage sessionstorage cookie 存储 浏览器"
    ],
    "popularity": 0
  },
  {
    "id": "88",
    "name": "CHANGELOG 生成器",
    "category": "dev",
    "desc": "CHANGELOG 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/changelog-gen.html",
    "icon": "⚡",
    "keywords": [
      "changelog gen changelog 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "89",
    "name": "字符集转换器",
    "category": "dev",
    "desc": "文本编码转换，支持 UTF-8/16、Hex、URL 编码等格式",
    "path": "tools/dev/charset-converter.html",
    "icon": "🔤",
    "keywords": [
      "字符集 编码 utf8 utf16 unicode hex 转换"
    ],
    "popularity": 0
  },
  {
    "id": "90",
    "name": "Chmod 计算器",
    "category": "dev",
    "desc": "Linux 文件权限计算，支持数字和符号模式互转",
    "path": "tools/dev/chmod-calculator.html",
    "icon": "🔓",
    "keywords": [
      "chmod 权限 linux unix 文件权限 rwx"
    ],
    "popularity": 0
  },
  {
    "id": "91",
    "name": "剪贴板查看器",
    "category": "dev",
    "desc": "查看剪贴板中的各种格式数据",
    "path": "tools/dev/clipboard-viewer.html",
    "icon": "📋",
    "keywords": [
      "剪贴板 clipboard 查看 格式"
    ],
    "popularity": 50
  },
  {
    "id": "92",
    "name": "代码对比工具",
    "category": "dev",
    "desc": "并排对比两段代码的差异，高亮显示变更",
    "path": "tools/dev/code-diff.html",
    "icon": "⇔",
    "keywords": [
      "代码对比工具"
    ],
    "popularity": 0
  },
  {
    "id": "93",
    "name": "代码统计器",
    "category": "dev",
    "desc": "代码统计器，在线使用，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/code-stats.html",
    "icon": "🔧",
    "keywords": [
      "代码统计器"
    ],
    "popularity": 0
  },
  {
    "id": "94",
    "name": "色盲模拟器",
    "category": "dev",
    "desc": "模拟不同类型色盲用户看到的颜色效果",
    "path": "tools/dev/color-blindness.html",
    "icon": "👁",
    "keywords": [
      "色盲 模拟器 colorblind simulator accessibility 无障碍 a11y"
    ],
    "popularity": 0
  },
  {
    "id": "95",
    "name": "颜色转换器",
    "category": "dev",
    "desc": "HEX、RGB、HSL 颜色格式互转，可视化调色",
    "path": "tools/dev/color-converter.html",
    "icon": "🎨",
    "keywords": [
      "颜色 color hex rgb hsl 转换 调色板"
    ],
    "popularity": 0
  },
  {
    "id": "96",
    "name": "颜色混合器",
    "category": "dev",
    "desc": "两种颜色混合工具，支持多种混合模式和比例调节",
    "path": "tools/dev/color-mixer.html",
    "icon": "🎨",
    "keywords": [
      "颜色 混合 color mixer rgb hsl 正片叠底 滤色"
    ],
    "popularity": 0
  },
  {
    "id": "97",
    "name": "颜色命名查询",
    "category": "dev",
    "desc": "颜色命名查询，便捷查询，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/color-names.html",
    "icon": "🎨",
    "keywords": [
      "颜色命名查询"
    ],
    "popularity": 0
  },
  {
    "id": "98",
    "name": "调色板生成器",
    "category": "dev",
    "desc": "基于色彩理论生成和谐配色方案",
    "path": "tools/dev/color-palette-generator.html",
    "icon": "🎨",
    "keywords": [
      "color palette 调色板 配色 互补色 颜色搭配"
    ],
    "popularity": 0
  },
  {
    "id": "99",
    "name": "配色方案生成器",
    "category": "dev",
    "desc": "生成配色方案和调色板",
    "path": "tools/dev/color-palette.html",
    "icon": "🎨",
    "keywords": [
      "配色方案生成器"
    ],
    "popularity": 0
  },
  {
    "id": "100",
    "name": "颜色对比度检查器",
    "category": "dev",
    "desc": "检查颜色对比度是否符合 WCAG 2.1 无障碍标准",
    "path": "tools/dev/contrast-checker.html",
    "icon": "◐",
    "keywords": [
      "对比度 contrast wcag 无障碍 accessibility 颜色 color a11y"
    ],
    "popularity": 0
  },
  {
    "id": "101",
    "name": "Cron 生成器",
    "category": "dev",
    "desc": "可视化生成 Cron 表达式",
    "path": "tools/dev/cron-generator.html",
    "icon": "⏰",
    "keywords": [
      "cron 定时任务 生成器 调度 scheduler"
    ],
    "popularity": 72
  },
  {
    "id": "102",
    "name": "Cron 表达式解析器",
    "category": "dev",
    "desc": "Cron 表达式解析器，在线分析，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/cron-parser.html",
    "icon": "🔧",
    "keywords": [
      "cron 表达式解析器"
    ],
    "popularity": 0
  },
  {
    "id": "103",
    "name": "Crontab 生成器",
    "category": "dev",
    "desc": "Crontab 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/crontab-generator.html",
    "icon": "🔧",
    "keywords": [
      "crontab 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "104",
    "name": "CSS 动画生成器",
    "category": "dev",
    "desc": "可视化生成 CSS 动画和关键帧代码",
    "path": "tools/dev/css-animation-generator.html",
    "icon": "🎬",
    "keywords": [
      "css animation keyframes 动画 关键帧 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "105",
    "name": "Border Radius 生成器",
    "category": "dev",
    "desc": "CSS 圆角可视化生成器",
    "path": "tools/dev/css-border-radius.html",
    "icon": "◜",
    "keywords": [
      "css border-radius 圆角 生成器 可视化 generator"
    ],
    "popularity": 0
  },
  {
    "id": "106",
    "name": "CSS 盒子阴影生成器",
    "category": "dev",
    "desc": "可视化生成 CSS box-shadow 阴影效果，支持多层阴影",
    "path": "tools/dev/css-box-shadow.html",
    "icon": "🎨",
    "keywords": [
      "css box-shadow 阴影 生成器 可视化"
    ],
    "popularity": 0
  },
  {
    "id": "107",
    "name": "CSS Clip-path 生成器",
    "category": "dev",
    "desc": "CSS Clip-path 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-clip-path.html",
    "icon": "🔧",
    "keywords": [
      "css clip-path 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "108",
    "name": "CSS Filter 生成器",
    "category": "dev",
    "desc": "可视化调整 CSS filter 属性，支持预设效果和对比预览",
    "path": "tools/dev/css-filter-generator.html",
    "icon": "🎨",
    "keywords": [
      "css filter 滤镜 亮度 对比度 模糊 色相 饱和度"
    ],
    "popularity": 0
  },
  {
    "id": "109",
    "name": "CSS 滤镜生成器",
    "category": "dev",
    "desc": "CSS 滤镜生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-filter.html",
    "icon": "🔧",
    "keywords": [
      "css 滤镜生成器"
    ],
    "popularity": 0
  },
  {
    "id": "110",
    "name": "CSS 格式化",
    "category": "dev",
    "desc": "CSS 代码格式化和压缩",
    "path": "tools/dev/css-formatter.html",
    "icon": "🎨",
    "keywords": [
      "css 格式化"
    ],
    "popularity": 48
  },
  {
    "id": "111",
    "name": "CSS Grid 生成器 | 在线工具",
    "category": "dev",
    "desc": "CSS Grid 生成器 | 在线工具，在线使用，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-grid-generator.html",
    "icon": "🔧",
    "keywords": [
      "css grid 生成器 | 在线工具"
    ],
    "popularity": 0
  },
  {
    "id": "112",
    "name": "CSS Grid 生成器",
    "category": "dev",
    "desc": "CSS Grid 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-grid.html",
    "icon": "🔧",
    "keywords": [
      "css grid 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "113",
    "name": "CSS 压缩/美化工具",
    "category": "dev",
    "desc": "CSS 压缩/美化工具，在线使用，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-minifier.html",
    "icon": "🎨",
    "keywords": [
      "css 压缩/美化工具"
    ],
    "popularity": 0
  },
  {
    "id": "114",
    "name": "CSS 选择器测试器",
    "category": "dev",
    "desc": "CSS 选择器测试器，在线验证，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-selector-test.html",
    "icon": "🔧",
    "keywords": [
      "css 选择器测试器"
    ],
    "popularity": 0
  },
  {
    "id": "115",
    "name": "CSS雪碧图生成器",
    "category": "dev",
    "desc": "合并图片生成雪碧图",
    "path": "tools/dev/css-sprites.html",
    "icon": "🎨",
    "keywords": [
      "css sprite 雪碧图 合并 图片 sprites"
    ],
    "popularity": 0
  },
  {
    "id": "116",
    "name": "CSS Text Shadow 生成器",
    "category": "dev",
    "desc": "CSS Text Shadow 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-text-shadow.html",
    "icon": "🔧",
    "keywords": [
      "css text shadow 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "117",
    "name": "CSS Transform 生成器",
    "category": "dev",
    "desc": "CSS Transform 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-transform.html",
    "icon": "🔧",
    "keywords": [
      "css transform 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "118",
    "name": "CSS 单位转换器",
    "category": "dev",
    "desc": "CSS 单位转换器，多格式互转，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/css-unit-converter.html",
    "icon": "🔧",
    "keywords": [
      "css 单位转换器"
    ],
    "popularity": 0
  },
  {
    "id": "119",
    "name": "Cubic Bezier 编辑器",
    "category": "dev",
    "desc": "Cubic Bezier 编辑器，在线编辑，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/cubic-bezier.html",
    "icon": "🔧",
    "keywords": [
      "cubic bezier 编辑器"
    ],
    "popularity": 0
  },
  {
    "id": "120",
    "name": "cURL 转换器",
    "category": "dev",
    "desc": "将 cURL 命令转换为各种编程语言代码",
    "path": "tools/dev/curl-converter.html",
    "icon": "↔️",
    "keywords": [
      "curl 转换器"
    ],
    "popularity": 0
  },
  {
    "id": "121",
    "name": "Git Diff 查看器",
    "category": "dev",
    "desc": "解析并美化显示 Git diff 输出，支持文件统计",
    "path": "tools/dev/diff-viewer.html",
    "icon": "📊",
    "keywords": [
      "diff git 对比 查看器 unified patch 代码变更"
    ],
    "popularity": 0
  },
  {
    "id": "122",
    "name": "Docker Compose 生成器",
    "category": "dev",
    "desc": "Docker Compose 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/docker-compose-gen.html",
    "icon": "🔧",
    "keywords": [
      "docker compose 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "123",
    "name": "Docker Compose 生成器 | 在线工具",
    "category": "dev",
    "desc": "Docker Compose 生成器 | 在线工具，在线使用，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/docker-compose-generator.html",
    "icon": "🐳",
    "keywords": [
      "docker compose 生成器 | 在线工具"
    ],
    "popularity": 0
  },
  {
    "id": "124",
    "name": "Dockerfile 生成器",
    "category": "dev",
    "desc": "Dockerfile 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/dockerfile-generator.html",
    "icon": "🔧",
    "keywords": [
      "dockerfile 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "125",
    "name": "editorconfig 生成器",
    "category": "dev",
    "desc": "editorconfig 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/editorconfig-gen.html",
    "icon": "⚡",
    "keywords": [
      "editorconfig gen editorconfig 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "126",
    "name": "Emoji 选择器",
    "category": "dev",
    "desc": "浏览和复制各种 Emoji 表情符号",
    "path": "tools/dev/emoji-picker.html",
    "icon": "😀",
    "keywords": [
      "emoji 表情 选择器 符号 unicode"
    ],
    "popularity": 0
  },
  {
    "id": "127",
    "name": ".env 文件编辑器",
    "category": "dev",
    "desc": ".env 文件编辑器，在线编辑，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/env-editor.html",
    "icon": "🔧",
    "keywords": [
      ".env 文件编辑器"
    ],
    "popularity": 0
  },
  {
    "id": "128",
    "name": "Excel 预览器",
    "category": "dev",
    "desc": "Excel 预览器，在线使用，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/excel-viewer.html",
    "icon": "🔧",
    "keywords": [
      "excel 预览器"
    ],
    "popularity": 0
  },
  {
    "id": "129",
    "name": "Favicon 检测器",
    "category": "dev",
    "desc": "Favicon 检测器，在线分析，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/favicon-checker.html",
    "icon": "🔧",
    "keywords": [
      "favicon 检测器"
    ],
    "popularity": 0
  },
  {
    "id": "130",
    "name": "Flexbox 可视化编辑器",
    "category": "dev",
    "desc": "可视化调整 Flexbox 布局属性，实时预览效果",
    "path": "tools/dev/flexbox-playground.html",
    "icon": "📦",
    "keywords": [
      "flexbox css 布局 layout flex 可视化 playground"
    ],
    "popularity": 0
  },
  {
    "id": "131",
    "name": "Git 命令速查",
    "category": "dev",
    "desc": "常用 Git 命令速查表",
    "path": "tools/dev/git-cheatsheet.html",
    "icon": "📚",
    "keywords": [
      "git 命令 速查 cheatsheet commit push pull"
    ],
    "popularity": 0
  },
  {
    "id": "132",
    "name": "GitHub Actions 生成器",
    "category": "dev",
    "desc": "GitHub Actions 生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/github-actions-generator.html",
    "icon": "🔧",
    "keywords": [
      "github actions 生成器"
    ],
    "popularity": 0
  },
  {
    "id": "133",
    "name": ".gitignore 生成器",
    "category": "dev",
    "desc": "选择编程语言和框架，快速生成 .gitignore 文件",
    "path": "tools/dev/gitignore-generator.html",
    "icon": "📄",
    "keywords": [
      "gitignore git 忽略 生成器 node python java go rust php"
    ],
    "popularity": 0
  },
  {
    "id": "134",
    "name": "Glassmorphism 生成器",
    "category": "dev",
    "desc": "Glassmorphism 毛玻璃效果 CSS 代码生成器",
    "path": "tools/dev/glassmorphism.html",
    "icon": "🪟",
    "keywords": [
      "glassmorphism 毛玻璃 frosted glass css 模糊 blur backdrop-filter"
    ],
    "popularity": 0
  },
  {
    "id": "135",
    "name": "Glob 模式测试",
    "category": "dev",
    "desc": "Glob 模式匹配测试",
    "path": "tools/dev/glob-tester.html",
    "icon": "*",
    "keywords": [
      "glob 模式测试"
    ],
    "popularity": 0
  },
  {
    "id": "136",
    "name": "GraphQL 查询构建器",
    "category": "dev",
    "desc": "GraphQL 查询构建器，在线使用，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/graphql-builder.html",
    "icon": "🔧",
    "keywords": [
      "graphql 查询构建器"
    ],
    "popularity": 0
  },
  {
    "id": "137",
    "name": "GraphQL Playground",
    "category": "dev",
    "desc": "GraphQL查询测试工具",
    "path": "tools/dev/graphql-playground.html",
    "icon": "⬡",
    "keywords": [
      "graphql query mutation playground api"
    ],
    "popularity": 0
  },
  {
    "id": "138",
    "name": "Hash 生成器",
    "category": "dev",
    "desc": "计算文本或文件的 MD5、SHA-1、SHA-256、SHA-512 哈希值",
    "path": "tools/dev/hash-generator.html",
    "icon": "#",
    "keywords": [
      "hash md5 sha sha1 sha256 sha512 哈希 摘要 校验"
    ],
    "popularity": 80
  },
  {
    "id": "139",
    "name": "Hex 查看器",
    "category": "dev",
    "desc": "以十六进制查看文件或文本内容",
    "path": "tools/dev/hex-viewer.html",
    "icon": "0x",
    "keywords": [
      "hex 十六进制 二进制 查看器 文件"
    ],
    "popularity": 0
  },
  {
    "id": "140",
    "name": "HMAC 生成器",
    "category": "dev",
    "desc": "生成 HMAC 消息认证码，支持多种哈希算法",
    "path": "tools/dev/hmac-generator.html",
    "icon": "🔏",
    "keywords": [
      "hmac 签名 hash 消息认证 sha256"
    ],
    "popularity": 0
  },
  {
    "id": "141",
    "name": "htaccess转Nginx",
    "category": "dev",
    "desc": "Apache htaccess转Nginx配置",
    "path": "tools/dev/htaccess-nginx.html",
    "icon": "🔄",
    "keywords": [
      "htaccess nginx 转换 apache 配置"
    ],
    "popularity": 0
  },
  {
    "id": "142",
    "name": "HTML 实体参考",
    "category": "dev",
    "desc": "HTML 实体字符参考表，支持搜索和复制",
    "path": "tools/dev/html-entities.html",
    "icon": "📋",
    "keywords": [
      "html entity 实体 特殊字符 转义"
    ],
    "popularity": 0
  },
  {
    "id": "143",
    "name": "HTML 实体编解码",
    "category": "dev",
    "desc": "HTML 实体编码与解码，常用实体参考",
    "path": "tools/dev/html-entity.html",
    "icon": "&amp;",
    "keywords": [
      "html entity 实体 编码 解码 转义 escape"
    ],
    "popularity": 70
  },
  {
    "id": "144",
    "name": "HTML 格式化",
    "category": "dev",
    "desc": "HTML 代码格式化、压缩和美化",
    "path": "tools/dev/html-formatter.html",
    "icon": "</>",
    "keywords": [
      "html 格式化 美化 压缩 beautify minify format"
    ],
    "popularity": 0
  },
  {
    "id": "145",
    "name": "HTML 压缩",
    "category": "dev",
    "desc": "压缩 HTML 代码",
    "path": "tools/dev/html-minify.html",
    "icon": "📦",
    "keywords": [
      "html minify compress 压缩 最小化"
    ],
    "popularity": 0
  },
  {
    "id": "146",
    "name": "HTML 实时预览",
    "category": "dev",
    "desc": "HTML 实时预览，即时预览，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/html-preview.html",
    "icon": "🖼",
    "keywords": [
      "html 实时预览"
    ],
    "popularity": 0
  },
  {
    "id": "147",
    "name": "HTML 表格生成器",
    "category": "dev",
    "desc": "HTML 表格生成器，一键在线生成，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/html-table-generator.html",
    "icon": "🔧",
    "keywords": [
      "html 表格生成器"
    ],
    "popularity": 0
  },
  {
    "id": "148",
    "name": "HTML 模板生成器",
    "category": "dev",
    "desc": "生成 HTML5 页面模板，支持多种布局和 CSS 框架",
    "path": "tools/dev/html-template.html",
    "icon": "📄",
    "keywords": [
      "html 模板 template 骨架 landing page 表单 dashboard 邮件"
    ],
    "popularity": 0
  },
  {
    "id": "149",
    "name": "HTML 转 JSX/React 转换器",
    "category": "dev",
    "desc": "HTML 转 JSX/React 转换器，多格式互转，开发工具，浏览器本地运行无需上传",
    "path": "tools/dev/html-to-jsx.html",
    "icon": "⚡",
    "keywords": [
      "html to jsx html 转 jsx/react 转换器"
    ],
    "popularity": 0
  },
  {
    "id": "150",
    "name": "HTTP 状态码参考",
    "category": "dev",
    "desc": "HTTP 状态码速查，包含描述和使用场景",
    "path": "tools/dev/http-status.html",
    "icon": "200",
    "keywords": [
      "http status 状态码 响应码 1xx 2xx 3xx 4xx 5xx"
    ],
    "popularity": 0
  }
];

export const TOP_POPULAR: ToolItem[] = [
  {
    "id": "1087",
    "name": "极光背景生成器",
    "category": "design",
    "desc": "高级 CSS 极光流动渐变背景生成器，支持自定义色彩、模糊度与动画速度，一键导出纯 CSS 代码。",
    "path": "tools/design/aurora-generator.html",
    "icon": "🌌",
    "keywords": [
      "aurora 极光渐变 mesh gradient 流动背景 css 生成器"
    ],
    "popularity": 999
  },
  {
    "id": "160",
    "name": "JSON 格式化",
    "category": "dev",
    "desc": "JSON 格式化、压缩、校验，支持错误定位和语法高亮",
    "path": "tools/dev/json-formatter.html",
    "icon": "{}",
    "keywords": [
      "json 格式化 校验 validate format 美化"
    ],
    "popularity": 100
  },
  {
    "id": "447",
    "name": "时间戳转换",
    "category": "time",
    "desc": "时间戳与日期互转，支持多种格式和时区",
    "path": "tools/time/timestamp.html",
    "icon": "⏱",
    "keywords": [
      "时间戳 timestamp 日期 转换 unix epoch"
    ],
    "popularity": 100
  },
  {
    "id": "1088",
    "name": "结构化提示词生成器",
    "category": "ai",
    "desc": "根据 CREATE 框架结构化生成高质量 AI Prompt，提升大模型输出准确率",
    "path": "tools/ai/prompt-generator.html",
    "icon": "✨",
    "keywords": [
      "提示词生成 prompt generator create 框架 ai"
    ],
    "popularity": 100
  },
  {
    "id": "84",
    "name": "Base64 编解码",
    "category": "dev",
    "desc": "Base64 编码与解码，支持文本和文件",
    "path": "tools/dev/base64.html",
    "icon": "b64",
    "keywords": [
      "base64 编码 解码 encode decode"
    ],
    "popularity": 95
  },
  {
    "id": "218",
    "name": "URL 编解码",
    "category": "dev",
    "desc": "URL 编码与解码，支持完整 URL 或组件",
    "path": "tools/dev/url-codec.html",
    "icon": "%",
    "keywords": [
      "url 编码 解码 encode decode uri"
    ],
    "popularity": 95
  },
  {
    "id": "264",
    "name": "二维码生成器",
    "category": "generator",
    "desc": "生成自定义颜色和大小的二维码",
    "path": "tools/generator/qrcode-generator.html",
    "icon": "▣",
    "keywords": [
      "二维码 qrcode 生成 扫码"
    ],
    "popularity": 95
  },
  {
    "id": "318",
    "name": "Base64 图片转换",
    "category": "media",
    "desc": "图片与 Base64 编码互转，支持多种格式",
    "path": "tools/media/base64-image.html",
    "icon": "64",
    "keywords": [
      "base64 图片 转换 编码 解码 data uri"
    ],
    "popularity": 95
  },
  {
    "id": "173",
    "name": "JWT 解码器",
    "category": "dev",
    "desc": "解码 JWT Token，查看 Header、Payload 和签名信息",
    "path": "tools/dev/jwt-decoder.html",
    "icon": "🔓",
    "keywords": [
      "jwt token 解码 decode header payload 认证"
    ],
    "popularity": 90
  },
  {
    "id": "195",
    "name": "正则测试器",
    "category": "dev",
    "desc": "正则表达式测试，匹配高亮，捕获组展示",
    "path": "tools/dev/regex-tester.html",
    "icon": ".*",
    "keywords": [
      "正则 regex 测试 匹配 捕获组 regexp"
    ],
    "popularity": 90
  },
  {
    "id": "76",
    "name": "JSON ⇄ YAML 转换",
    "category": "converter",
    "desc": "JSON 和 YAML 双向转换，支持格式化和压缩",
    "path": "tools/converter/json-yaml.html",
    "icon": "🔄",
    "keywords": [
      "json yaml 转换 converter 配置文件 双向转换"
    ],
    "popularity": 88
  },
  {
    "id": "170",
    "name": "JSON-YAML 转换",
    "category": "dev",
    "desc": "JSON 与 YAML 格式互转，支持格式化输出",
    "path": "tools/dev/json-yaml.html",
    "icon": "⇄",
    "keywords": [
      "json yaml 转换 格式化 配置"
    ],
    "popularity": 88
  },
  {
    "id": "401",
    "name": "Markdown 编辑器",
    "category": "text",
    "desc": "Markdown 编辑器，在线编辑，文本工具，浏览器本地运行无需上传",
    "path": "tools/text/markdown-editor.html",
    "icon": "📝",
    "keywords": [
      "markdown 编辑器"
    ],
    "popularity": 88
  },
  {
    "id": "402",
    "name": "Markdown 预览",
    "category": "text",
    "desc": "实时 Markdown 预览，支持 GFM 语法，可导出 HTML",
    "path": "tools/text/markdown-preview.html",
    "icon": "M↓",
    "keywords": [
      "markdown md 预览 渲染 gfm"
    ],
    "popularity": 88
  },
  {
    "id": "696",
    "name": "Markdown预览",
    "category": "dev",
    "desc": "实时预览Markdown",
    "path": "tools/dev/markdown-preview.html",
    "icon": "📝",
    "keywords": [
      "Markdown预览 dev"
    ],
    "popularity": 88
  },
  {
    "id": "259",
    "name": "密码生成器",
    "category": "generator",
    "desc": "生成安全随机密码，支持自定义长度和字符类型",
    "path": "tools/generator/password-generator.html",
    "icon": "🔐",
    "keywords": [
      "密码 password 随机 安全 生成"
    ],
    "popularity": 85
  },
  {
    "id": "273",
    "name": "UUID/ULID 生成器",
    "category": "generator",
    "desc": "生成 UUID v4/v7 和 ULID，支持批量生成",
    "path": "tools/generator/uuid-generator.html",
    "icon": "#",
    "keywords": [
      "uuid ulid 生成 随机 id 唯一标识"
    ],
    "popularity": 85
  },
  {
    "id": "285",
    "name": "图片压缩器",
    "category": "media",
    "desc": "在浏览器中压缩图片",
    "path": "tools/media/image-compressor.html",
    "icon": "🗜️",
    "keywords": [
      "image compress 图片 压缩 优化"
    ],
    "popularity": 85
  },
  {
    "id": "309",
    "name": "随机密码生成器",
    "category": "life",
    "desc": "生成安全随机密码，支持自定义长度和字符类型，密码强度检测",
    "path": "tools/life/password-generator.html",
    "icon": "🔐",
    "keywords": [
      "密码 password 随机 安全 生成 强度 批量"
    ],
    "popularity": 85
  },
  {
    "id": "138",
    "name": "Hash 生成器",
    "category": "dev",
    "desc": "计算文本或文件的 MD5、SHA-1、SHA-256、SHA-512 哈希值",
    "path": "tools/dev/hash-generator.html",
    "icon": "#",
    "keywords": [
      "hash md5 sha sha1 sha256 sha512 哈希 摘要 校验"
    ],
    "popularity": 80
  },
  {
    "id": "374",
    "name": "哈希生成器",
    "category": "security",
    "desc": "计算文本或文件的哈希值",
    "path": "tools/security/hash-generator.html",
    "icon": "🔐",
    "keywords": [
      "hash md5 sha 哈希 加密 摘要"
    ],
    "popularity": 80
  },
  {
    "id": "393",
    "name": "文本对比工具",
    "category": "text",
    "desc": "对比两段文本的差异",
    "path": "tools/text/diff-checker.html",
    "icon": "📊",
    "keywords": [
      "diff compare 对比 比较 差异 文本"
    ],
    "popularity": 78
  },
  {
    "id": "423",
    "name": "文本 Diff",
    "category": "text",
    "desc": "文本差异对比，左右并排显示，行内差异高亮",
    "path": "tools/text/text-diff.html",
    "icon": "±",
    "keywords": [
      "diff 对比 比较 差异 文本"
    ],
    "popularity": 78
  },
  {
    "id": "586",
    "name": "文本差异比较",
    "category": "dev",
    "desc": "比较两段文本的差异，高亮显示修改内容",
    "path": "tools/dev/diff-checker.html",
    "icon": "📊",
    "keywords": [
      "diff 差异 比较 对比 文本比较"
    ],
    "popularity": 78
  },
  {
    "id": "300",
    "name": "颜色选择器",
    "category": "life",
    "desc": "颜色选择和转换工具，支持 RGB/HSL/HEX 格式，对比度预览",
    "path": "tools/life/color-picker.html",
    "icon": "🎨",
    "keywords": [
      "颜色 取色 RGB HSL HEX 调色板 前端 设计"
    ],
    "popularity": 75
  },
  {
    "id": "315",
    "name": "字数统计工具",
    "category": "life",
    "desc": "统计文本字数、字符数、行数，分析字符频率",
    "path": "tools/life/word-counter.html",
    "icon": "📊",
    "keywords": [
      "字数 统计 字符 单词 行数 频率 阅读时间"
    ],
    "popularity": 75
  },
  {
    "id": "437",
    "name": "字数统计",
    "category": "text",
    "desc": "统计字符、单词、句子、段落数量",
    "path": "tools/text/word-counter.html",
    "icon": "Aa",
    "keywords": [
      "字数 统计 word count 字符"
    ],
    "popularity": 75
  },
  {
    "id": "693",
    "name": "颜色选择器(媒体)",
    "category": "media",
    "desc": "选择和转换颜色",
    "path": "tools/media/color-picker.html",
    "icon": "🎨",
    "keywords": [
      "颜色选择器 media 颜色选择器(媒体)"
    ],
    "popularity": 75
  },
  {
    "id": "757",
    "name": "颜色选择器(设计版)",
    "category": "design",
    "desc": "可视化颜色选择工具，支持 HEX、RGB、HSL 等格式",
    "path": "tools/design/color-picker.html",
    "icon": "🎨",
    "keywords": [
      "color picker 颜色 选择器 hex rgb hsl 颜色选择器(设计版)"
    ],
    "popularity": 75
  },
  {
    "id": "101",
    "name": "Cron 生成器",
    "category": "dev",
    "desc": "可视化生成 Cron 表达式",
    "path": "tools/dev/cron-generator.html",
    "icon": "⏰",
    "keywords": [
      "cron 定时任务 生成器 调度 scheduler"
    ],
    "popularity": 72
  }
];
