import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  noindex?: boolean;
  nofollow?: boolean;
}

const defaultTitle = "Guia Marquinhos | Chapada Diamantina - Trilhas e Aventuras";
const defaultDescription =
  "Trilhas personalizadas na Chapada Diamantina com guia experiente há mais de 19 anos. Vale do Pati, cachoeiras, grutas e aventuras únicas. Solicite seu orçamento!";
const defaultImage = "/imgs/logo.svg";
const defaultUrl = "https://guiamarquinhos.com";

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  keywords = "Chapada Diamantina, guia turístico, trilhas, Vale do Pati, cachoeiras, grutas, Lençóis, Bahia, trekking, aventura, ecoturismo",
  image = defaultImage,
  url = defaultUrl,
  type = "website",
  noindex = false,
  nofollow = false,
}: SEOProps) {
  const fullTitle = title.includes("Guia Marquinhos") ? title : `${title} | Guia Marquinhos`;
  const fullImage = image.startsWith("http") ? image : `${defaultUrl}${image}`;
  const fullUrl = url.startsWith("http") ? url : `${defaultUrl}${url}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noindex || nofollow ? (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`}
        />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Guia Marquinhos" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Guia Marquinhos" />
      <meta name="geo.region" content="BR-BA" />
      <meta name="geo.placename" content="Lençóis, Bahia" />
    </Head>
  );
}
