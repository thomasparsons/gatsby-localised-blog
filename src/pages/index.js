import * as React from "react";
// import articles from "../articles.json";
import getPageRoute from "../getPageRoute";

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

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>My Localised Blog</title>
      <h1 style={headingStyles}>
        My Localised blog
        <br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <ul style={listStyles}>
        {articles.map((article) => (
          <li style={{ ...listItemStyles }}>
            <span>
              <a
                style={linkStyle}
                href={getPageRoute("blog.article", article.locale, {
                  slug: article.slug,
                })}
              >
                {article.slug}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
