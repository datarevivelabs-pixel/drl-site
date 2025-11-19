import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://datarevivelabs.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Data Revive Labs | Professional Data Recovery in Nairobi, Kenya",
    template: "%s | Data Revive Labs",
  },
  description:
    "Professional data recovery in Nairobi and Kenya-wide. HDD & SSD recovery, RAID/NAS, phone data recovery, digital forensics, and emergency 24/7 support.",
  keywords: [
    "data recovery Kenya",
    "data recovery Nairobi",
    "HDD recovery",
    "SSD recovery",
    "RAID recovery",
    "NAS recovery",
    "phone data recovery",
    "digital forensics",
    "emergency data recovery",
    "Data Revive Labs",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Data Revive Labs | Data Recovery in Nairobi & Kenya-wide",
    description:
      "We bring your lost data back to life. HDD/SSD, RAID/NAS, phones, and digital forensics with strict confidentiality.",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Data Revive Labs - Professional Data Recovery Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Revive Labs | Professional Data Recovery",
    description:
      "Kenya-wide data recovery: HDD & SSD, RAID/NAS, phones, and digital forensics. Free evaluation. No data, no fee.",
    images: ["/hero.png"],
  },
  icons: {
    icon: "/logo.svg",
  },
};

// ---- JSON-LD Structured Data (Local Business / Professional Service) ----
const schemaOrgBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Data Revive Labs",
  url: siteUrl,
  image: `${siteUrl}/hero.png`,
  telephone: "+254768177714",
  email: "info@datarevivelabs.co.ke",
  description:
    "Professional data recovery services based in Nairobi and serving clients across Kenya. HDD & SSD recovery, RAID/NAS, phone data recovery, digital forensics, and emergency 24/7 support.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  sameAs: [
    "https://www.facebook.com/DataReviveLabs/",
    "https://x.com/DataReviveLabs",
    "https://www.instagram.com/datarevivelabs",
    "https://www.tiktok.com/@datarevivelabs",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254768177714",
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />

        {/* JSON-LD for rich results */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgBusiness),
          }}
        />
      </body>
    </html>
  );
}
