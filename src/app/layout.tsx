import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Analytics } from "./ga";
import { ScrollTopButton } from "./components/scroll-top";

export const metadata: Metadata = {
  title: {
    default: "Data Revive Labs | Professional Data Recovery in Nairobi",
    template: "%s | Data Revive Labs",
  },
  description:
    "Professional data recovery in Nairobi, Kenya. HDD/SSD, RAID/NAS, phones and digital forensics handled with strict confidentiality.",
  metadataBase: new URL("https://datarevivelabs.co.ke"),
  alternates: {
    canonical: "https://datarevivelabs.co.ke",
  },
  manifest: "/manifest.json",
  themeColor: "#047857",
  openGraph: {
    title: "Data Revive Labs | Professional Data Recovery in Nairobi",
    description:
      "We recover critical data from failed HDDs, SSDs, RAID/NAS systems and phones for individuals, SMEs and NGOs across Kenya.",
    url: "https://datarevivelabs.co.ke",
    siteName: "Data Revive Labs",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Revive Labs | Professional Data Recovery in Nairobi",
    description:
      "Fast, confidential data recovery for drives, phones and servers in Nairobi, Kenya.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Manifest + theme color for PWA/Chrome */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#047857" />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Scroll-to-top button on all pages */}
        <ScrollTopButton />
        {/* Google Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
