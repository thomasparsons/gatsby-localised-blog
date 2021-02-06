const path = require("path");
const getPageRoute = require("./src/getPageRoute");

import articles from "./articles.json";

exports.createPages = async ({ actions }) => {
  articles.forEach((article) => {
    const path = getPageRoute("blog.article", article.locale, {
      slug: article.slug,
    });

    actions.createPage({
      path,
      component: path.resolve(`./src/templates/blogArticle.js`),
      context: {
        locale: article.locale,
        slug: article.slug,
      },
    });
  });
};
