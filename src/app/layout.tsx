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

export const metadata: Metadata = {
  metadataBase: new URL("https://datarevivelabs.co.ke"),
  title: {
    default: "Data Revive Labs – Professional Data Recovery in Kenya",
    template: "%s | Data Revive Labs",
  },
  description:
    "Kenya’s leading data recovery specialists. HDD/SSD recovery, RAID/NAS repair, phone data recovery, digital forensics, and emergency 24/7 services. Based in Nairobi and serving all of Kenya.",
  keywords: [
    "data recovery kenya",
    "data recovery nairobi",
    "hdd recovery kenya",
    "ssd recovery kenya",
    "raid recovery kenya",
    "nas data recovery kenya",
    "phone data recovery kenya",
    "digital forensics kenya",
    "data revive labs",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Data Revive Labs" }],
  openGraph: {
    title: "Data Revive Labs – Professional Data Recovery in Kenya",
    description:
      "We recover lost, deleted, damaged, or corrupted data from HDD, SSD, RAID, NAS, phones, and servers. Confidential, professional service from Nairobi – serving all of Kenya.",
    url: "https://datarevivelabs.co.ke",
    siteName: "Data Revive Labs",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Revive Labs – Data Recovery Experts in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Revive Labs – Data Recovery Experts in Kenya",
    description:
      "Specialists in HDD/SSD recovery, RAID/NAS repair, phone data recovery, digital forensics, and emergency 24/7 services.",
    images: ["/og-image.png"],
    creator: "@datarevivelabs",
  },
  alternates: {
    canonical: "https://datarevivelabs.co.ke",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {/* LocalBusiness JSON-LD for Google (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Data Revive Labs",
              image: "https://datarevivelabs.co.ke/og-image.png",
              url: "https://datarevivelabs.co.ke",
              telephone: "+254768177714",
              email: "info@datarevivelabs.co.ke",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressRegion: "Nairobi County",
                addressCountry: "KE",
              },
              description:
                "Professional data recovery services in Kenya including HDD/SSD recovery, RAID/NAS repair, phone data recovery, digital forensics, and emergency 24/7 response.",
              priceRange: "KSh 3,000 - KSh 100,000",
              sameAs: [
                "https://www.facebook.com/DataReviveLabs/",
                "https://instagram.com/datarevivelabs",
                "https://www.tiktok.com/@datarevivelabs",
                "https://x.com/datarevivelabs",
              ],
            }),
          }}
        />

        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
