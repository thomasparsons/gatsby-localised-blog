import React from "react";

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

const BlogArticle = ({ pageContext }) => {
  const article = articles.find((article) => article.slug === pageContext.slug);

  return (
    <div>
      <h1>{pageContext.slug}</h1>
      <p>{article.content[pageContext.locale]}</p>
    </div>
  );
};

export default BlogArticle;
