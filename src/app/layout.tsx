import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

// If you’re using a custom Header/Footer components, keep these imports.
// If not, you can remove them.
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Data Revive Labs | Professional Data Recovery in Kenya",
  description:
    "Top-rated data recovery services in Kenya. HDD, SSD, RAID, phone data, forensic recovery & emergency services. Trusted, secure & affordable.",
  keywords: [
    "data recovery Kenya",
    "data recovery Nairobi",
    "HDD recovery",
    "SSD recovery",
    "RAID recovery Kenya",
    "NAS recovery",
    "phone data recovery",
    "mobile data recovery",
    "forensic data recovery",
    "emergency data recovery",
  ],
  openGraph: {
    title: "Data Revive Labs — Professional Data Recovery in Kenya",
    description:
      "We restore lost data from HDDs, SSDs, RAID/NAS, phones and more. Secure, confidential and professional data recovery services in Kenya.",
    url: "https://datarevivelabs.co.ke",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/og-image.png", // add this image in public/ if it doesn’t exist
        width: 1200,
        height: 630,
        alt: "Data Revive Labs - Professional Data Recovery in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  metadataBase: new URL("https://datarevivelabs.co.ke"),
  alternates: {
    canonical: "https://datarevivelabs.co.ke",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Data Revive Labs",
    image: "https://datarevivelabs.co.ke/og-image.png",
    url: "https://datarevivelabs.co.ke",
    telephone: "+2547XXXXXXXX", // put your real phone number
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    priceRange: "$$",
    description:
      "Professional data recovery services in Kenya for HDDs, SSDs, RAID/NAS, phones and more.",
    sameAs: [
      "https://facebook.com/yourpage",   // replace with real links
      "https://instagram.com/yourpage",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for Google */}
        <SchemaMarkup />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Site header / navigation */}
        <Header />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Site footer */}
        <Footer />
      </body>
    </html>
  );
}
