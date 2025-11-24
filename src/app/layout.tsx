import "./globals.css";
import type { Metadata } from "next";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Analytics } from "./ga";

export const metadata: Metadata = {
  title: {
    default: "Data Revive Labs | Professional Data Recovery in Kenya",
    template: "%s | Data Revive Labs",
  },
  description:
    "Professional data recovery services in Kenya. HDD / SSD, RAID, NAS, phones, and digital forensics. Fast diagnostics, confidentiality guaranteed.",
  metadataBase: new URL("https://datarevivelabs.co.ke"),
  alternates: {
    canonical: "https://datarevivelabs.co.ke",
  },
  openGraph: {
    title: "Data Revive Labs | Professional Data Recovery in Kenya",
    description:
      "Recover your important data from HDD, SSD, RAID, NAS, phones or servers. Nairobi-based data recovery experts serving Kenya.",
    url: "https://datarevivelabs.co.ke",
    siteName: "Data Revive Labs",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Global header with logo + nav */}
          <Header />

          {/* Page content */}
          <main className="flex-1">{children}</main>

          {/* Global footer */}
          <Footer />
        </div>

        {/* Google Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
