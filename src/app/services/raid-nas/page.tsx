// src/app/services/raid-nas/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAID & NAS Data Recovery | Data Revive Labs Kenya",
  description:
    "RAID and NAS data recovery services for businesses and organisations in Kenya. RAID 0/1/5/6/10, NAS units and virtualised servers (VMware/Hyper-V).",
  alternates: {
    canonical: "/services/raid-nas",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        RAID / NAS / Server Recovery
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        When storage arrays fail, downtime can be costly. We recover data from
        RAID arrays, NAS appliances and servers used by SMEs, NGOs and
        enterprises across Kenya.
      </p>
      <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-muted-foreground max-w-2xl">
        <li>RAID 0, 1, 5, 6, 10 and custom configurations</li>
        <li>NAS devices from Synology, QNAP, Dell, HP and more</li>
        <li>VMware and Hyper-V virtual machines</li>
        <li>Logical and physical failures, accidental rebuilds and more</li>
      </ul>
      <p className="mt-6 text-sm">
        For urgent cases, please call{" "}
        <a href="tel:+254768177714" className="underline">
          +254 768 177 714
        </a>{" "}
        for immediate assistance.
      </p>
    </section>
  );
}
