import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Data Revive Labs | Professional Data Recovery Kenya",
    template: "%s | Data Revive Labs",
  },
  description:
    "Data Revive Labs offers professional data recovery services in Kenya — HDD, SSD, RAID/NAS, phone data, and digital forensics with strict confidentiality.",
  keywords: [
    "data recovery Kenya",
    "RAID recovery Nairobi",
    "HDD recovery",
    "SSD repair",
    "phone data recovery",
    "digital forensics Kenya",
    "Data Revive Labs",
  ],
  authors: [{ name: "Data Revive Labs" }],
  openGraph: {
    title: "Data Revive Labs — Expert Data Recovery in Kenya",
    description:
      "We recover lost data for individuals, SMEs, and NGOs across Kenya. HDDs, SSDs, RAID/NAS, phones, and forensics — handled with confidentiality and precision.",
    url: "https://datarevivelabs.co.ke",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Data Revive Labs Hero Image",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Revive Labs | Professional Data Recovery Kenya",
    description:
      "Lost data? We can help. Data Revive Labs recovers HDD, SSD, RAID/NAS, phone, and forensic data with confidentiality and care.",
    images: ["/hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://datarevivelabs.co.ke"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      {/* Google Analytics */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GQ00D24JYR');
    `,
  }}
/>

      </body>
    </html>
  );
}
