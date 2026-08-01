export const languages = {
  en: "English",
  zh: "中文",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    brand: "AgentHQ",
    navProduct: "Product",
    navSelfHost: "Self-host",
    navDemo: "Demo",
    langSwitch: "中文",
    langSwitchHref: "/zh/",
    homeHeadline: "Analytics your agent can operate.",
    homeSupport:
      "Self-hosted Agent-Native analytics. Humans and agents share the same queries, charts, and dashboards — on your machine.",
    ctaPrimary: "Start self-hosting",
    ctaSecondary: "View product",
    heroCaption: "Local-first · SQL-backed · Action-defined",
    productTitle: "One action surface. Two operators.",
    productBody:
      "Define capabilities once. The UI and the agent call the same typed actions over the same SQL state — so chat never drifts from the product.",
    feature1Title: "Ask → chart → dashboard",
    feature1Body:
      "Connect a CSV or database, ask in plain language, pin the answer. Restart the container — your work is still there.",
    feature2Title: "Self-hosted by default",
    feature2Body:
      "Run with Docker or pnpm. No forced cloud account. Your warehouse credentials and SQLite file stay with you.",
    feature3Title: "MCP-ready later",
    feature3Body:
      "Expose read tools to Cursor or Claude when you want. Same permissions model as the in-app agent.",
    selfHostTitle: "Self-host AgentHQ",
    selfHostBody:
      "Clone the repo, start the stack, open the app. Point an AI key at your preferred provider.",
    selfHostStep1: "Clone & install",
    selfHostStep2: "Configure AI key",
    selfHostStep3: "Run the app",
    footerNote: "Built on Agent-Native. Product name: AgentHQ. Repo: AgentNative.",
  },
  zh: {
    brand: "AgentHQ",
    navProduct: "产品",
    navSelfHost: "自托管",
    navDemo: "演示",
    langSwitch: "EN",
    langSwitchHref: "/en/",
    homeHeadline: "人和 Agent 共用的分析工作台。",
    homeSupport:
      "本地自托管的 Agent-Native 分析应用。人与 Agent 共享同一套查询、图表与看板——数据留在你的机器上。",
    ctaPrimary: "开始自托管",
    ctaSecondary: "了解产品",
    heroCaption: "本地优先 · SQL 状态 · Action 定义",
    productTitle: "一套能力，两种操作方式。",
    productBody:
      "能力只定义一次。界面与 Agent 调用同一批类型化 Action、读写同一份 SQL——对话与产品不会各走各路。",
    feature1Title: "提问 → 出图 → 钉看板",
    feature1Body:
      "连接 CSV 或数据库，用自然语言提问，把结果钉到看板。重启容器后，工作还在。",
    feature2Title: "默认自托管",
    feature2Body:
      "Docker 或 pnpm 即可运行。无需强制云账号。仓库凭据与 SQLite 文件都在你这边。",
    feature3Title: "可接 MCP",
    feature3Body:
      "需要时把只读工具暴露给 Cursor 或 Claude。权限模型与应用内 Agent 一致。",
    selfHostTitle: "自托管 AgentHQ",
    selfHostBody:
      "克隆仓库、启动服务、打开应用。把 AI 密钥指向你选择的模型提供商。",
    selfHostStep1: "克隆并安装",
    selfHostStep2: "配置 AI 密钥",
    selfHostStep3: "启动应用",
    footerNote: "基于 Agent-Native 构建。产品名：AgentHQ。仓库：AgentNative。",
  },
} as const;

export function t(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "zh" : "en";
}
