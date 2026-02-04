import Script from "next/script";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
  email?: string;
  url?: string;
  image?: string;
  priceRange?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function LocalBusinessSchema({
  name = "Guia Marquinhos",
  description = "Guia turístico experiente na Chapada Diamantina há mais de 19 anos",
  address = {
    streetAddress: "Rua José Florêncio, 230",
    addressLocality: "Lençóis",
    addressRegion: "BA",
    postalCode: "46960-000",
    addressCountry: "BR",
  },
  telephone = "+5575998859612",
  email = "contato@guiamarquinhos.com",
  url = "https://guiamarquinhos.com",
  image = "https://guiamarquinhos.com/imgs/logo.svg",
  priceRange = "$$",
  aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 50,
  },
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://guiamarquinhos.com/#organization",
    name,
    description,
    image,
    url,
    telephone,
    email,
    priceRange,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ...aggregateRating,
    },
    areaServed: {
      "@type": "City",
      name: "Chapada Diamantina",
    },
    sameAs: [
      "https://instagram.com/chapadadiamantinaguiamarcos",
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface TouristAttractionSchemaProps {
  name: string;
  description: string;
  image?: string;
  url?: string;
  address?: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

export function TouristAttractionSchema({
  name,
  description,
  image,
  url,
  address = {
    addressLocality: "Lençóis",
    addressRegion: "BA",
    addressCountry: "BR",
  },
}: TouristAttractionSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    description,
    image,
    url,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    containedInPlace: {
      "@type": "Place",
      name: "Chapada Diamantina",
    },
  };

  return (
    <Script
      id={`tourist-attraction-schema-${name.replace(/\s+/g, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonSchemaProps {
  name?: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url?: string;
  email?: string;
  telephone?: string;
}

export function PersonSchema({
  name = "Marcos Paulo (Marquinhos)",
  jobTitle = "Guia Turístico",
  description = "Guia há mais de 19 anos, vice-presidente da Brigada de Incêndio de Lençóis e certificado em resgate em montanha e resgate aquático",
  image = "https://guiamarquinhos.com/imgs/logo.svg",
  url = "https://guiamarquinhos.com",
  email = "contato@guiamarquinhos.com",
  telephone = "+5575998859612",
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    image,
    url,
    email,
    telephone,
    worksFor: {
      "@type": "LocalBusiness",
      name: "Guia Marquinhos",
    },
    knowsAbout: [
      "Chapada Diamantina",
      "Trilhas",
      "Trekking",
      "Ecoturismo",
      "Resgate em Montanha",
      "Resgate Aquático",
    ],
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema Organization - Importante para o nome do site aparecer corretamente
interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

export function OrganizationSchema({
  name = "Guia Marquinhos",
  url = "https://guiamarquinhos.com",
  logo = "https://guiamarquinhos.com/imgs/logo.svg",
  description = "Guia turístico experiente na Chapada Diamantina há mais de 19 anos",
  sameAs = [
    "https://instagram.com/chapadadiamantinaguiamarcos",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs,
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema WebSite - Ajuda com sitelinks e busca
interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  potentialAction?: {
    "@type": string;
    target: {
      "@type": string;
      urlTemplate: string;
    };
    "query-input": string;
  };
}

export function WebSiteSchema({
  name = "Guia Marquinhos",
  url = "https://guiamarquinhos.com",
  description = "Trilhas personalizadas na Chapada Diamantina com guia experiente há mais de 19 anos",
  potentialAction = {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://guiamarquinhos.com/aventuras?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}: WebSiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction,
    // Sugere ao Google as páginas principais para possíveis sitelinks
    hasPart: [
      { "@type": "WebPage", name: "Aventuras", url: `${url}/aventuras` },
      { "@type": "WebPage", name: "Roteiro Personalizado", url: `${url}/roteiro-personalizado` },
      { "@type": "WebPage", name: "Vale do Pati 3 dias", url: `${url}/aventuras/vale-do-pati-3-dias` },
      { "@type": "WebPage", name: "Vale do Pati 5 dias", url: `${url}/aventuras/vale-do-pati-5-dias` },
      { "@type": "WebPage", name: "Grutas", url: `${url}/aventuras/grutas` },
    ],
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList - Ajuda o Google a entender a estrutura do site e gerar sitelinks
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbListSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbListSchema({ items }: BreadcrumbListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
