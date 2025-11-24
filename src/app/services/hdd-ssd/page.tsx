import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HDD & SSD Data Recovery Services | Data Revive Labs Kenya",
  description:
    "Professional HDD and SSD data recovery services in Kenya. We recover data from failed, corrupted, formatted and physically damaged hard drives and solid-state drives.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/hdd-ssd",
  },
  openGraph: {
    title: "HDD & SSD Data Recovery Services | Data Revive Labs Kenya",
    description:
      "Lost data from your hard drive or SSD? Data Revive Labs provides secure, professional HDD and SSD data recovery services in Kenya.",
    url: "https://datarevivelabs.co.ke/services/hdd-ssd",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/services/hdd-ssd.png",
        width: 1024,
        height: 1536,
        alt: "HDD and SSD data recovery services at Data Revive Labs",
      },
    ],
    type: "article",
    locale: "en_KE",
  },
};

export default function HddSsdRecoveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full grid gap-8 md:grid-cols-2 md:items-center">
        {/* TEXT SIDE */}
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            HDD &amp; SSD DATA RECOVERY
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Dead drives.{" "}
            <span className="text-emerald-500">Recovered data.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            We recover lost data from desktop, laptop and external hard drives
            and SSDs affected by mechanical failure, corruption, formatting or
            accidental deletion.
          </p>
          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
            <li>• Mechanical HDD failures and bad sectors</li>
            <li>• SSD firmware, controller and wear-leveling issues</li>
            <li>• Formatted, deleted or RAW partitions</li>
            <li>• Water, fire or power-related damage</li>
          </ul>
          <div className="pt-3 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Book a free assessment
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground">
              No data, no fee* on most logical recovery cases.
            </p>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex items-center justify-center">
          <div className="relative w-[260px] h-[390px] md:w-[320px] md:h-[480px] rounded-3xl border bg-card shadow-lg overflow-hidden">
            <Image
              src="/services/hdd-ssd.png"
              alt="HDD and SSD data recovery illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
