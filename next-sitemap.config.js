module.exports = {
  // add environment variable in .env file and add your website URL
  siteUrl: process.env.SITE_URL || "https://valit-portfolio.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/api/",
      },
    ],
    additionalSitemaps: [
      "https://valit-portfolio.vercel.app/sitemap.xml",
    ],
  },
  exclude: ["/api/*", "/404", "/thanks"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for important pages
    const customPriority = {
      "/": 1.0,
      "/about": 0.9,
      "/projects": 0.9,
      "/articles": 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
