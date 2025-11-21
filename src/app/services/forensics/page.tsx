// src/app/services/forensics/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Forensics & Evidence Handling | Data Revive Labs Kenya",
  description:
    "Digital forensics services for legal, HR and investigative matters. Proper chain of custody, structured reports and evidence handling in Kenya.",
  alternates: {
    canonical: "/services/forensics",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Digital Forensics
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        We provide discreet digital forensics support to law firms, HR teams,
        NGOs and investigators. Our focus is on defensible processes and clear,
        practical reporting.
      </p>
      <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-muted-foreground max-w-2xl">
        <li>Disk, mobile and cloud evidence acquisition</li>
        <li>Chain of custody and documentation</li>
        <li>Timeline reconstruction and activity analysis</li>
        <li>Written reports suitable for legal use</li>
      </ul>
      <p className="mt-6 text-sm">
        For sensitive matters, contact us directly via{" "}
        <a href="mailto:info@datarevivelabs.co.ke" className="underline">
          info@datarevivelabs.co.ke
        </a>{" "}
        or call{" "}
        <a href="tel:+254768177714" className="underline">
          +254 768 177 714
        </a>
        .
      </p>
    </section>
  );
}
