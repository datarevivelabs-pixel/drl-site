// src/app/services/hdd-ssd/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HDD & SSD Data Recovery in Nairobi, Kenya | Data Revive Labs",
  description:
    "Professional HDD and SSD data recovery in Nairobi and across Kenya. We handle dead drives, clicking disks, firmware faults, deletion and formatting problems.",
  alternates: {
    canonical: "/services/hdd-ssd",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        HDD &amp; SSD Data Recovery
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        We recover data from failed hard drives and solid-state drives used in
        laptops, desktops, external drives and servers. Typical issues include
        mechanical failure, electronic damage, bad sectors, firmware problems,
        accidental deletion and formatting.
      </p>
      <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-muted-foreground max-w-2xl">
        <li>Support for SATA, NVMe, USB and external drives</li>
        <li>No data — no fee policy on eligible cases</li>
        <li>Encrypted drive support where keys are available</li>
        <li>Clean-bench handling for sensitive mechanical work</li>
      </ul>
      <p className="mt-6 text-sm">
        To book a free evaluation, call{" "}
        <a href="tel:+254768177714" className="underline">
          +254 768 177 714
        </a>{" "}
        or{" "}
        <a
          href="https://wa.me/254768177714"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          message us on WhatsApp
        </a>
        .
      </p>
    </section>
  );
}
