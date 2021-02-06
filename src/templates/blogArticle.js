import React from "react";

import articles from "./articles.json";

const BlogArticle = ({ pageContext }) => {
  const article = articles.find((article) => article.slug === pageContext.slug);

  return (
    <div>
      <h1>{pageContext.slug}</h1>
      <p>{article.content[pageContext.locale]}</p>
    </div>
  );
};

module.exports = BlogArticle;
