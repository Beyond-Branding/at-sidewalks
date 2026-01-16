import type { GetServerSideProps } from "next";

const SITE_URL = "https://atsidewalks.com";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = [
    "/",
    "/about",
    "/blogs",
    "/category/124",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${SITE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
