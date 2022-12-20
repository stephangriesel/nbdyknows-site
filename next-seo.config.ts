const description =
  "Your favorite NBDY KNOWS gear";
const title = "NBDY KNOWS";
const url = "https://www.nbdyknows.com";

const seo = {
  title,
  titleTemplate: "%s | nbdyknows.com",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@nbdyknowsonline",
    site: "@nbdyknowsonline",
  },
};

export { seo as defaultSEO, url as defaultUrl };
