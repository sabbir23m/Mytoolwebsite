import React, { useState, useMemo } from 'react';
import {
  Folder,
  FileCode,
  CheckCircle,
  Database,
  Layers,
  Wrench,
  Shield,
  Search,
  Terminal,
  BookOpen,
  Cpu,
  Sparkles,
  BarChart3,
  Globe,
  Code,
  FileText,
  Check,
  LayoutGrid,
  ListFilter,
  ExternalLink,
  ChevronRight,
  GitCommit,
  Flame,
  ArrowRight,
  Info,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';
import { CATEGORIES, TOTAL_TOOLS, TOTAL_CATEGORIES, SAMPLE_TOOLS, TOP_POPULAR, ToolItem } from './data/projectAnalysis';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'categories' | 'tests' | 'catalog' | 'conventions'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(SAMPLE_TOOLS[0] || null);

  const filteredTools = useMemo(() => {
    return SAMPLE_TOOLS.filter((t) => {
      const matchCat = selectedCategory === 'all' || t.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header Banner */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold tracking-tight text-white">WebUtils (html-tools)</h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono font-medium">v2.2.0</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Extracted &amp; Verified
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <GitCommit className="w-3.5 h-3.5 text-slate-500" />
                Commit <code className="font-mono text-slate-300">2384b2d</code> (master) • 1,088+ pure frontend local-first tools
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg px-3 py-1.5 text-center">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold tracking-wider">Total Tools</span>
              <span className="font-bold text-cyan-400 text-sm">{TOTAL_TOOLS}</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg px-3 py-1.5 text-center">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold tracking-wider">Categories</span>
              <span className="font-bold text-indigo-400 text-sm">{TOTAL_CATEGORIES}</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg px-3 py-1.5 text-center">
              <span className="text-slate-400 block text-[10px] uppercase font-semibold tracking-wider">Test Suite</span>
              <span className="font-bold text-emerald-400 text-sm">74 / 74 Pass</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 overflow-x-auto scrollbar-none flex space-x-1 border-t border-slate-800/60 pt-1">
          {[
            { id: 'overview', label: 'Architecture Overview', icon: Layers },
            { id: 'structure', label: 'Directory Map', icon: Folder },
            { id: 'categories', label: 'Category Metrics', icon: LayoutGrid },
            { id: 'tests', label: 'Verification & QA', icon: CheckCircle },
            { id: 'catalog', label: 'Tool Explorer', icon: Search },
            { id: 'conventions', label: 'Engineering Rules', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium rounded-t-lg transition-all border-b-2 whitespace-nowrap ${
                  active
                    ? 'border-cyan-400 text-cyan-300 bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-cyan-400' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Quick Hero Banner */}
            <div className="rounded-2xl border border-cyan-900/40 bg-gradient-to-br from-slate-900 via-cyan-950/20 to-slate-900 p-6 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Project Extraction &amp; Deep Architectural Audit
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Static-First, Zero-Build, Browser-Native Toolset
                </h2>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  WebUtils is an expansive collection of <strong className="text-cyan-300">1,088 standalone tools</strong> running
                  purely on the client side across <strong className="text-indigo-300">35 functional categories</strong>.
                  Each tool is engineered as an independent, single-file HTML document sharing a lightweight design system
                  (<code className="font-mono text-cyan-200 bg-cyan-950/80 px-1 py-0.5 rounded">tool-base.css</code> and{' '}
                  <code className="font-mono text-cyan-200 bg-cyan-950/80 px-1 py-0.5 rounded">tool-chrome.js</code>), with automated static site synchronization.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span><strong>Local-First:</strong> Processing occurs in browser DOM</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span><strong>Multi-Platform Deploy:</strong> Vercel, Netlify, Cloudflare Pages, GitHub Pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/50">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span><strong>Single Source of Truth:</strong> <code className="font-mono text-purple-300">tools.json</code></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition">
                <div className="h-9 w-9 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3.5 border border-cyan-800/50">
                  <FileCode className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-white">1. Single-File HTML Architecture</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Every tool in <code className="text-slate-300">tools/&lt;category&gt;/&lt;tool&gt;.html</code> is a fully self-contained page.
                  They require zero bundle compilation to run in production, and can be exported as standalone offline HTML via
                  <code className="text-slate-300 ml-1">export-standalone.mjs</code>.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> Inline CSS handles tool-specific layout
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> Shared design tokens via <code className="text-slate-200">tool-base.css</code>
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-cyan-400" /> Navigation &amp; theme via <code className="text-slate-200">tool-chrome.js</code>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition">
                <div className="h-9 w-9 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center mb-3.5 border border-indigo-800/50">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-white">2. SSG Sync Pipeline</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  The primary catalog manifest <code className="text-slate-300">tools.json</code> drives the entire project.
                  Running <code className="text-slate-300">npm run sync</code> triggers <code className="text-slate-300">scripts/sync-all.js</code>
                  which regenerates:
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-indigo-400" /> Homepage <code className="text-slate-200">index.html</code> inline tool card registry
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-indigo-400" /> Category landing pages <code className="text-slate-200">tools/&lt;cat&gt;/index.html</code>
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-indigo-400" /> <code className="text-slate-200">sitemap.xml</code> (1,123 locs with clean URLs)
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-indigo-400" /> <code className="text-slate-200">README.md</code> badges &amp; i18n counts
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition">
                <div className="h-9 w-9 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-3.5 border border-emerald-800/50">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-white">3. Multi-Layer Quality Gate</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  The repository enforces strict continuous verification across 9 automated test suites and linters before release:
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> <strong>HTMLHint &amp; ESLint:</strong> Syntax &amp; tag integrity
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> <strong>Stylelint:</strong> PostCSS HTML CSS linting
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> <strong>Data Quality Test:</strong> Disallows duplicate names or paths
                  </li>
                  <li className="flex items-center gap-1.5 text-slate-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> <strong>Playwright E2E:</strong> Browser smoke tests
                  </li>
                </ul>
              </div>
            </div>

            {/* Top Popular Tools Preview */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-semibold text-white">High-Popularity Tools in Catalog</h3>
                </div>
                <button
                  onClick={() => setActiveTab('catalog')}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  View All Tools <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {TOP_POPULAR.slice(0, 6).map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => {
                      setSelectedTool(tool);
                      setActiveTab('catalog');
                    }}
                    className="p-3 rounded-lg border border-slate-800 bg-slate-950/60 hover:border-slate-700 cursor-pointer transition flex items-start gap-3"
                  >
                    <span className="text-xl p-1.5 rounded-lg bg-slate-900 border border-slate-800">{tool.icon || '🛠️'}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-semibold text-white truncate">{tool.name}</h4>
                        <span className="text-[10px] text-amber-400/80 font-mono">pop: {tool.popularity}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">{tool.desc}</p>
                      <span className="inline-block mt-1 text-[10px] text-slate-500 font-mono truncate max-w-full">
                        {tool.path}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DIRECTORY MAP */}
        {activeTab === 'structure' && (
          <div className="space-y-6">
            <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Folder className="w-5 h-5 text-cyan-400" />
                Project Directory Anatomy (<code className="font-mono text-cyan-300">html-tools-master/</code>)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                A breakdown of root configurations, tool directories, shared assets, automation scripts, and test suites.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Left: Directory Tree Breakdown */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2 text-cyan-300 font-bold">
                      <Folder className="w-4 h-4 text-cyan-400" /> /tools/ [1,088 tools in 35 categories]
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans ml-6">
                      Contains standalone HTML files categorized into subdirectories (e.g., <code className="text-slate-300">dev/</code>, <code className="text-slate-300">calculator/</code>, <code className="text-slate-300">text/</code>, etc.). Each directory contains its own category landing <code className="text-slate-300">index.html</code>.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2 text-indigo-300 font-bold">
                      <Folder className="w-4 h-4 text-indigo-400" /> /assets/ [Shared Chrome &amp; Design System]
                    </div>
                    <ul className="text-[11px] text-slate-400 font-sans ml-6 space-y-1">
                      <li>• <code className="text-slate-300 font-mono">css/tool-base.css</code>: Design tokens, resets, theme variables, buttons, forms.</li>
                      <li>• <code className="text-slate-300 font-mono">js/tool-chrome.js</code>: Header, return button, theme toggling, recent tools persistence.</li>
                      <li>• <code className="text-slate-300 font-mono">css/main.css &amp; js/main.js</code>: Homepage card grid, category filter, instant search.</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold">
                      <Folder className="w-4 h-4 text-emerald-400" /> /scripts/ [Build &amp; Sync Automation]
                    </div>
                    <ul className="text-[11px] text-slate-400 font-sans ml-6 space-y-1">
                      <li>• <code className="text-slate-300 font-mono">sync-all.js</code>: Master synchronization script (31 KB) maintaining all mirrors.</li>
                      <li>• <code className="text-slate-300 font-mono">copy-to-dist.mjs</code>: Bundles production assets into <code className="text-slate-300">dist/</code>.</li>
                      <li>• <code className="text-slate-300 font-mono">export-standalone.mjs</code>: Inlines CSS/JS into standalone portable HTML files.</li>
                      <li>• <code className="text-slate-300 font-mono">check-version.mjs &amp; check-personal-paths.mjs</code>: CI audit gates.</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2.5">
                    <div className="flex items-center gap-2 text-purple-300 font-bold">
                      <Folder className="w-4 h-4 text-purple-400" /> /tests/ [74-Test Test Suite &amp; E2E]
                    </div>
                    <ul className="text-[11px] text-slate-400 font-sans ml-6 space-y-1">
                      <li>• <code className="text-slate-300 font-mono">run.js &amp; _harness.js</code>: Lightweight zero-dependency ESM test runner.</li>
                      <li>• <code className="text-slate-300 font-mono">tools-json.test.js &amp; data-quality.test.js</code>: Structure and uniqueness checks.</li>
                      <li>• <code className="text-slate-300 font-mono">html-structure.test.js</code>: Cheerio-based semantic validator for all 1,088 tools.</li>
                      <li>• <code className="text-slate-300 font-mono">e2e/</code>: Playwright browser specs for mobile, accessibility, and interactions.</li>
                    </ul>
                  </div>
                </div>

                {/* Right: Key Root Files & Metadata */}
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" /> Root Metadata &amp; Configuration
                    </h3>
                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-start justify-between pb-2 border-b border-slate-800/80">
                        <span className="font-mono text-cyan-300">tools.json</span>
                        <span className="text-slate-400 text-right">363 KB • Single Source of Truth for all 1,088 tools</span>
                      </div>
                      <div className="flex items-start justify-between pb-2 border-b border-slate-800/80">
                        <span className="font-mono text-cyan-300">index.html</span>
                        <span className="text-slate-400 text-right">373 KB • Full homepage with pre-rendered inline catalog</span>
                      </div>
                      <div className="flex items-start justify-between pb-2 border-b border-slate-800/80">
                        <span className="font-mono text-cyan-300">sitemap.xml</span>
                        <span className="text-slate-400 text-right">176 KB • 1,123 verified URLs without clean-url redirect loops</span>
                      </div>
                      <div className="flex items-start justify-between pb-2 border-b border-slate-800/80">
                        <span className="font-mono text-cyan-300">sw.js &amp; offline.html</span>
                        <span className="text-slate-400 text-right">Service Worker precaching &amp; offline fallback UI</span>
                      </div>
                      <div className="flex items-start justify-between pb-2 border-b border-slate-800/80">
                        <span className="font-mono text-cyan-300">_redirects &amp; vercel.json</span>
                        <span className="text-slate-400 text-right">Clean URL routing rules and 301 legacy redirects</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-cyan-300">CLAUDE.md &amp; docs/</span>
                        <span className="text-slate-400 text-right">Engineering conventions, QA logs, design system rules</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-2">
                    <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                      <Info className="w-4 h-4" /> Architectural Boundary Note
                    </div>
                    <p className="leading-relaxed">
                      In <code className="text-slate-300 font-mono">tools.json</code>, the <code className="text-slate-300 font-mono">tools</code> field is an
                      <strong> object with consecutive string numeric keys (&quot;1&quot;, &quot;2&quot;, ...)</strong> rather than an array.
                      Automated scripts expect this schema to preserve stable tool IDs during insertions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORY METRICS */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-400" />
                    35 Tool Categories (1,088 Tools Total)
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Distribution of tools across domains, sorted by catalog volume.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {CATEGORIES.map((cat) => {
                  const percentage = ((cat.count / TOTAL_TOOLS) * 100).toFixed(1);
                  return (
                    <div
                      key={cat.key}
                      onClick={() => {
                        setSelectedCategory(cat.key);
                        setActiveTab('catalog');
                      }}
                      className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 hover:border-slate-700 cursor-pointer transition flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-105 transition">
                            {cat.icon}
                          </span>
                          <div className="text-right">
                            <span className="text-base font-extrabold text-white">{cat.count}</span>
                            <span className="text-[10px] text-slate-400 block font-mono">{percentage}%</span>
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-white mt-3 flex items-center gap-1.5">
                          {cat.name}
                          <span className="text-[10px] font-mono text-slate-500 font-normal">({cat.key})</span>
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {cat.intro}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 group-hover:text-cyan-400 transition">
                        <span>Browse category</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: VERIFICATION & QA */}
        {activeTab === 'tests' && (
          <div className="space-y-6">
            <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-bold text-white">Full Test Suite &amp; Compliance Audit</h2>
              </div>
              <p className="text-xs text-slate-400">
                Executed against the freshly extracted <code className="text-slate-300 font-mono">html-tools-master</code> codebase:
                <strong className="text-emerald-400 ml-1">74 tests passed, 0 failures</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {[
                  {
                    title: 'tools.json Structure',
                    file: 'tests/tools-json.test.js',
                    passes: 9,
                    checks: [
                      'tools.json is valid JSON with categories and tools',
                      'Each category has name, icon, and color defined',
                      'All tool file paths physically exist on disk',
                      'Tool IDs are consecutively numbered starting from 1',
                      'No duplicate tool paths or missing mandatory fields'
                    ]
                  },
                  {
                    title: 'Data Quality & Hygiene',
                    file: 'tests/data-quality.test.js',
                    passes: 10,
                    checks: [
                      'Tool names are unique across entire repository',
                      'Normalized path syntax (tools/<category>/.../<name>.html)',
                      'No dangerous path traversal characters (.. // \\)',
                      'Title length <= 60, description <= 150 chars',
                      'Zero orphaned HTML files in tools/ directory'
                    ]
                  },
                  {
                    title: 'Static Sync Consistency',
                    file: 'tests/sync.test.js',
                    passes: 15,
                    checks: [
                      'index.html inline TOOLS count exactly matches tools.json (1,088)',
                      'category-count in index.html matches active categories (35)',
                      'sitemap.xml has 1,123 entries (1088 tools + homepage + 34 category index pages)',
                      'sitemap.xml uses clean URLs and avoids 301 redirect loops',
                      'README badges and i18n JSON files are in exact sync'
                    ]
                  },
                  {
                    title: 'HTML Structure & A11y',
                    file: 'tests/html-structure.test.js',
                    passes: 12,
                    checks: [
                      'All 1,088 pages start with <!doctype html> & <html lang="...">',
                      'Canonical URL matches production clean URL',
                      'Open Graph URL is synced with clean URL',
                      'Each tool page has exactly one non-empty <h1> heading',
                      'H1 verification properly ignores script/template tags'
                    ]
                  },
                  {
                    title: 'Redirects & Clean URLs',
                    file: 'tests/redirects.test.js',
                    passes: 7,
                    checks: [
                      '_redirects file parses cleanly',
                      'All 301 target files exist on disk',
                      'Source paths of 301 redirects are no longer physical files',
                      'vercel.json rules match _redirects target destinations'
                    ]
                  },
                  {
                    title: 'PWA & Static Assets',
                    file: 'tests/assets.test.js',
                    passes: 7,
                    checks: [
                      'i18n/en.json and zh-CN.json key parity is 100%',
                      'sw.js PRECACHE_ASSETS files all exist on disk',
                      'offline.html fallback page exists and is functional',
                      'manifest.json icons, screenshots and shortcuts are valid'
                    ]
                  },
                  {
                    title: 'Standalone Exporting',
                    file: 'tests/standalone-export.test.js',
                    passes: 5,
                    checks: [
                      'Inlines tool-base.css and tool-chrome.js directly into HTML',
                      'Strips external local script/link dependencies cleanly',
                      'Properly escapes </script> tags inside inlined JavaScript',
                      'Rejects inlining any assets outside the repository root'
                    ]
                  },
                  {
                    title: 'Recent Tools State',
                    file: 'tests/recent-tools.test.js',
                    passes: 5,
                    checks: [
                      'Limits history to 20 most recent tools with deduplication',
                      'Corrupted localStorage gracefully handled without UI crash',
                      'Clean URL normalization for legacy .html paths',
                      'Category landing pages excluded from recent tool history'
                    ]
                  }
                ].map((suite, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/60 mb-2.5">
                      <div>
                        <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          {suite.title}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-500">{suite.file}</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                        {suite.passes} passed
                      </span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-400">
                      {suite.checks.map((chk, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 mt-0.5">✓</span>
                          <span>{chk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: TOOL EXPLORER / CATALOG */}
        {activeTab === 'catalog' && (
          <div className="space-y-6">
            <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by tool name, description, keyword, or path..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <ListFilter className="w-4 h-4 text-slate-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="all">All Categories ({TOTAL_TOOLS})</option>
                    {CATEGORIES.map((c) => (
                      <option key={c.key} value={c.key}>
                        {c.name} ({c.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tools List & Detail Split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Left: Tool Cards List */}
                <div className="lg:col-span-2 space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                  {filteredTools.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-xs">
                      No tools match your current query or category filter.
                    </div>
                  ) : (
                    filteredTools.map((tool) => {
                      const isSelected = selectedTool?.id === tool.id;
                      return (
                        <div
                          key={tool.id}
                          onClick={() => setSelectedTool(tool)}
                          className={`p-3 rounded-lg border transition cursor-pointer flex items-start gap-3 ${
                            isSelected
                              ? 'bg-slate-800/80 border-cyan-500/70 shadow-md shadow-cyan-500/5'
                              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <span className="text-xl p-1 rounded bg-slate-900 border border-slate-800">{tool.icon || '🛠️'}</span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-xs font-bold text-white truncate">{tool.name}</h4>
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                                {tool.category}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{tool.desc}</p>
                            <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                              <span className="truncate max-w-[280px]">{tool.path}</span>
                              <span className="text-amber-400/80">score: {tool.popularity}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Right: Selected Tool Inspector */}
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 sticky top-24 self-start space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800">
                    <Code className="w-4 h-4 text-cyan-400" /> Tool Inspector
                  </div>

                  {selectedTool ? (
                    <div className="space-y-3.5">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800">{selectedTool.icon || '🛠️'}</span>
                        <div>
                          <h3 className="text-sm font-bold text-white">{selectedTool.name}</h3>
                          <span className="text-[11px] font-mono text-cyan-400">ID #{selectedTool.id}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Description</span>
                        <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                          {selectedTool.desc || 'No description provided.'}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Source Path</span>
                        <code className="text-xs text-cyan-300 font-mono block bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 break-all">
                          html-tools-master/{selectedTool.path}
                        </code>
                      </div>

                      <div>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Keywords</span>
                        <div className="flex flex-wrap gap-1">
                          {selectedTool.keywords.map((kw, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                        <div className="flex justify-between">
                          <span>Runtime Model:</span>
                          <span className="text-emerald-400 font-medium">Local Browser DOM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shared Chrome:</span>
                          <span className="text-slate-300 font-medium">tool-base.css + tool-chrome.js</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Standalone Export:</span>
                          <span className="text-cyan-400 font-medium">Supported</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-slate-500 text-xs text-center py-8">Select a tool to inspect metadata.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: ENGINEERING CONVENTIONS */}
        {activeTab === 'conventions' && (
          <div className="space-y-6">
            <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg font-bold text-white">Engineering Conventions &amp; Contributing Constitution</h2>
              </div>
              <p className="text-xs text-slate-400">
                Core guidelines extracted from <code className="text-slate-300 font-mono">CLAUDE.md</code> and <code className="text-slate-300 font-mono">CONTRIBUTING.md</code>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" /> Checklist for Adding a New Tool
                  </h3>
                  <ol className="list-decimal list-inside text-xs text-slate-300 space-y-2 leading-relaxed">
                    <li>Create self-contained HTML in <code className="font-mono text-cyan-200">tools/&lt;category&gt;/&lt;name&gt;.html</code>.</li>
                    <li>Register tool in <code className="font-mono text-cyan-200">tools.json.tools</code> using the next consecutive numeric key.</li>
                    <li>Ensure exactly one non-empty <code className="font-mono text-cyan-200">&lt;h1&gt;</code> and semantic <code className="font-mono text-cyan-200">&lt;main&gt;</code>.</li>
                    <li>Include visible focus rings, touch targets &gt;= 44px, and support <code className="font-mono text-cyan-200">prefers-reduced-motion</code>.</li>
                    <li>Execute <code className="font-mono text-cyan-200">npm run sync:tools</code> to update mirrors, sitemaps, and landing pages.</li>
                    <li>Verify with <code className="font-mono text-cyan-200">npm test &amp;&amp; npm run lint</code> before commit.</li>
                  </ol>
                </div>

                <div className="p-4 rounded-xl border border-amber-900/40 bg-amber-950/10 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Common Pitfalls to Avoid
                  </h3>
                  <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>Modifying tools.json without running sync:</strong> Generates out-of-sync sitemaps and index.html card discrepancies.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>Confusing &quot;static-first&quot; with &quot;no build&quot;:</strong> There is a strict build, validation, and sync pipeline.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>Over-claiming offline readiness:</strong> Tools requiring external APIs, fonts, or network requests must explicitly declare boundaries.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>Batch regex find-replace across 1000+ files:</strong> High risk of corrupting specialized inline scripts and event bindings.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Developer Command Reference Table */}
              <div className="mt-5 border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Repository Script Reference</span>
                  <span className="text-[10px] font-mono text-slate-500">package.json</span>
                </div>
                <div className="divide-y divide-slate-800/80 text-xs">
                  {[
                    { cmd: 'npm run sync', desc: 'Syncs tools.json to index.html, sitemap.xml, README.md, manifest.json, category landing pages' },
                    { cmd: 'npm test', desc: 'Executes the 9-part test harness (74 checks) validating data consistency, URLs and HTML structure' },
                    { cmd: 'npm run build', desc: 'Runs sync then compiles production artifacts into dist/ via copy-to-dist.mjs' },
                    { cmd: 'npm run lint', desc: 'Runs HTMLHint (HTML), Stylelint (CSS in HTML + shared CSS), and ESLint (JS)' },
                    { cmd: 'npm run export:standalone', desc: 'Compiles self-contained zero-dependency single-file HTMLs with inlined assets' },
                    { cmd: 'npm run check:version', desc: 'Validates semver consistency across package.json, changelog, and metadata' },
                  ].map((item, i) => (
                    <div key={i} className="px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-slate-950/40">
                      <code className="font-mono text-cyan-300 font-semibold">{item.cmd}</code>
                      <span className="text-slate-400 text-right">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-4 text-center text-xs text-slate-500">
        <p>WebUtils Project Architecture Analyzer • Fully extracted in <code className="font-mono text-slate-400">/html-tools-master</code> (1,088 tools, 35 categories, 74 passing tests)</p>
      </footer>
    </div>
  );
}
