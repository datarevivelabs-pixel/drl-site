// src/app/pricing/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Recovery Pricing | Data Revive Labs Kenya",
  description:
    "Transparent data recovery pricing for HDD & SSD, RAID/NAS, phone data recovery and emergency services in Kenya. Free evaluation — you only pay if we recover approved data.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Data Recovery Pricing
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        Every case is different, so we always start with a free evaluation. Once
        we understand the failure, we give you a fixed quote before any paid
        work begins.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-card p-6 shadow-card">
          <h2 className="font-semibold text-lg mb-2">HDD &amp; SSD</h2>
          <p className="text-sm text-muted-foreground">
            Typical recoveries from personal and business drives.
          </p>
          <p className="mt-4 font-semibold">From KES xx,xxx</p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-card">
          <h2 className="font-semibold text-lg mb-2">RAID / NAS / Server</h2>
          <p className="text-sm text-muted-foreground">
            Complex multi-disk and business-critical environments.
          </p>
          <p className="mt-4 font-semibold">Custom quote</p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-card">
          <h2 className="font-semibold text-lg mb-2">Phone &amp; Mobile</h2>
          <p className="text-sm text-muted-foreground">
            Smartphone and tablet data recovery for photos and messages.
          </p>
          <p className="mt-4 font-semibold">From KES xx,xxx</p>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
        Prices depend on the severity of damage, capacity, urgency and parts
        required. You&apos;ll always receive a clear quote before you decide to
        proceed, and you only pay if we recover the data you approve.
      </p>
    </section>
  );
}
