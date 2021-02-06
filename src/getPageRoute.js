const enBlog = "blog";
const nlBlog = "blog";

const routes = {
  en: {
    blog: {
      index: enBlog,
      article: `${enBlog}/{params.slug}`,
    },
  },
  nl: {
    blog: {
      index: nlBlog,
      article: `${nlBlog}/{params.slug}`,
    },
  },
};

const getPageRoute = (routePath, locale, params) => {
  const localisedRoutes = routes[locale];

  // for production code, this may be much more complicated, and would need appropriate logic
  const paths = routePath.split(".");

  let route = localisedRoutes[paths[0]][paths[1]];

  if (params.slug) {
    route = route.replace("{params.slug}", params.slug);
  }

  return `/${locale}/${route}`;
};

module.exports = getPageRoute;
