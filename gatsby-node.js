const path = require("path");
const getPageRoute = require("./src/getPageRoute");

// import articles from "./articles.json";

const articles = [
  {
    locale: "en",
    content: {
      en: "hello world",
      nl: null,
    },
    slug: "my-english-slug",
  },
  {
    locale: "nl",
    content: {
      en: null,
      nl: "hello world",
    },
    slug: "my-dutch-slug",
  },
];

exports.createPages = async ({ actions }) => {
  articles.forEach((article) => {
    const pagePath = getPageRoute("blog.article", article.locale, {
      slug: article.slug,
    });

    actions.createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/blogArticle.js`),
      context: {
        locale: article.locale,
        slug: article.slug,
      },
    });
  });
};
