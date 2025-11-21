// src/app/services/phone-data/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Data Recovery (Android & iPhone) | Data Revive Labs Kenya",
  description:
    "Phone data recovery for Android and iPhone in Nairobi and across Kenya. We help recover photos, videos, WhatsApp, messages and contacts.",
  alternates: {
    canonical: "/services/phone-data",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Phone Data Recovery
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        We assist with recovering important memories and business data from
        smartphones and tablets — including damaged, dead or liquid-spilled
        devices where possible.
      </p>
      <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-muted-foreground max-w-2xl">
        <li>Android and iPhone devices</li>
        <li>Photos, videos, WhatsApp messages and attachments</li>
        <li>Contacts, SMS and documents where recoverable</li>
        <li>Secure handling and optional NDAs for sensitive data</li>
      </ul>
      <p className="mt-6 text-sm">
        Start a case via{" "}
        <a
          href="https://wa.me/254768177714"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          WhatsApp
        </a>{" "}
        or email{" "}
        <a href="mailto:info@datarevivelabs.co.ke" className="underline">
          info@datarevivelabs.co.ke
        </a>
        .
      </p>
    </section>
  );
}
