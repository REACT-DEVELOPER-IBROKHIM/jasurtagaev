module.exports = {
  siteUrl: "https://jasurtagaev.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://jasurtagaev.com/sitemap-en.xml",
      "https://jasurtagaev.com/sitemap-uz.xml",
      "https://jasurtagaev.com/sitemap-ru.xml",
      "https://jasurtagaev.com/sitemap-kr.xml",
    ],
  },
  i18n: {
    locales: ["en", "uz", "ru", "kr"],
    defaultLocale: "uz",
  },
};
