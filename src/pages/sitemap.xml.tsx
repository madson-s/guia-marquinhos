import { GetServerSideProps } from "next";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://guiamarquinhos.com";
  const currentDate = new Date().toISOString();

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/aventuras", priority: "0.9", changefreq: "weekly" },
    { url: "/roteiro-personalizado", priority: "0.9", changefreq: "monthly" },
  ];

  const destinationPages = [
    { url: "/aventuras/vale-do-pati-3-dias", priority: "0.9", changefreq: "monthly" },
    { url: "/aventuras/vale-do-pati-5-dias", priority: "0.9", changefreq: "monthly" },
    { url: "/aventuras/grutas", priority: "0.8", changefreq: "monthly" },
    { url: "/aventuras/poco-azul-encantado", priority: "0.8", changefreq: "monthly" },
    { url: "/aventuras/cachoeira-fumaca-riachinho", priority: "0.8", changefreq: "monthly" },
    { url: "/aventuras/cachoeira-mosquito-poco", priority: "0.8", changefreq: "monthly" },
    { url: "/aventuras/cachoeira-sossego-ribeirao", priority: "0.8", changefreq: "monthly" },
    { url: "/aventuras/pantanal-roncador", priority: "0.8", changefreq: "monthly" },
  ];

  const allPages = [...staticPages, ...destinationPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
