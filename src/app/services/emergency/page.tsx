// src/app/services/emergency/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency 24/7 Data Recovery | Data Revive Labs Nairobi",
  description:
    "Emergency 24/7 data recovery in Nairobi and surrounding areas. After-hours triage, urgent lab work and same-day pickup available.",
  alternates: {
    canonical: "/services/emergency",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Emergency 24/7 Data Recovery
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        Some incidents cannot wait until the next business day. Our emergency
        service provides priority triage and recovery work for time-critical
        cases.
      </p>
      <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-muted-foreground max-w-2xl">
        <li>After-hours incident response</li>
        <li>Same-day pickup within Nairobi (where available)</li>
        <li>Progress updates for urgent recoveries</li>
        <li>Support for servers, workstations and critical user devices</li>
      </ul>
      <p className="mt-6 text-sm">
        For emergencies, call or WhatsApp{" "}
        <a href="tel:+254768177714" className="underline">
          +254 768 177 714
        </a>{" "}
        immediately.
      </p>
    </section>
  );
}
