// Site configuration for SEO and JSON-LD schemas
export const siteConfig = {
  name: "仓鼠驱动管家",
  description:
    "现代化的 Windows 驱动管理工具，采用 Rust 语言开发，提供直观的图形界面，帮助用户轻松管理和维护系统驱动程序。",
  url: "https://hamster-drivers.com",
  ogImage: "https://hamster-drivers.com/images/openGraph/facebook.png",
  twitterImage: "https://hamster-drivers.com/images/openGraph/twitter.png",
  author: {
    name: "仓鼠驱动管家团队",
    url: "https://hamster-drivers.com",
    twitter: "@hamster_drivers",
  },
  links: {
    twitter: "https://twitter.com/hamster_drivers",
    github: "https://github.com/Gautown/HamsterDrivers",
  },
  // Organization info for JSON-LD
  organization: {
    name: "仓鼠驱动管家",
    logo: "https://hamster-drivers.com/images/logos/symbol.svg",
    sameAs: [
      "https://twitter.com/hamster_drivers",
      "https://github.com/Gautown/HamsterDrivers",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
