import { Metadata } from "next";
import { SiteSettings } from "./settings";

const SEO_CONFIG: Metadata = {
  title: {
    template: `%s | ${SiteSettings.name}`,
    default: "SafeRent - Rent Anything Safely",
  },
  description:
    "SafeRent is your trusted platform for renting items safely and securely. From electronics to vehicles, find what you need with verified listings and secure payments.",
  keywords:
    "rent, rental, saferent, equipment rental, electronics rental, vehicle rental, secure payments, verified listings",
  icons: "/static/favicon.ico",
  openGraph: {
    type: "website",
    siteName: "SafeRent",
    locale: "en_US",
    url: "https://saferent.com",
    title: "SafeRent - Rent Anything Safely",
    description:
      "SafeRent is your trusted platform for renting items safely and securely. From electronics to vehicles, find what you need with verified listings and secure payments.",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "SafeRent - Rent Anything Safely",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SafeRent",
    title: "SafeRent - Rent Anything Safely",
    description:
      "SafeRent is your trusted platform for renting items safely and securely. From electronics to vehicles, find what you need with verified listings and secure payments.",
    images: ["/og-blog.jpg"],
  },
};

export default SEO_CONFIG;
