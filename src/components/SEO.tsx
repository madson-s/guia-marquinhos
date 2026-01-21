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
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const defaultTitle = "Guia Marquinhos | Chapada Diamantina - Trilhas e Aventuras";
const defaultDescription =
  "Trilhas personalizadas na Chapada Diamantina com guia experiente há mais de 19 anos. Vale do Pati, cachoeiras, grutas e aventuras únicas. Solicite seu orçamento!";
const defaultImage = "/imgs/logo.svg";
const defaultUrl = "https://guiamarquinhos.com";
const defaultAuthor = "Guia Marquinhos";

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  keywords = "Chapada Diamantina, guia turístico, trilhas, Vale do Pati, cachoeiras, grutas, Lençóis, Bahia, trekking, aventura, ecoturismo, guia nativo, brigada, resgate",
  image = defaultImage,
  url = defaultUrl,
  type = "website",
  noindex = false,
  nofollow = false,
  author = defaultAuthor,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
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
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />

      {/* Robots */}
      {noindex || nofollow ? (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`}
        />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Guia Marquinhos" />
      {author && <meta property="article:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:creator" content="@chapadadiamantinaguiamarcos" />

      {/* Additional Meta Tags */}
      <meta name="author" content={author} />
      <meta name="geo.region" content="BR-BA" />
      <meta name="geo.placename" content="Lençóis, Bahia" />
      <meta name="geo.position" content="-12.5634;-41.3885" />
      <meta name="ICBM" content="-12.5634, -41.3885" />
      <meta name="theme-color" content="#36322B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Guia Marquinhos" />
      
      {/* Business Information */}
      <meta name="contact" content="contato@guiamarquinhos.com" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
    </Head>
  );
}
