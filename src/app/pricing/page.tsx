import type { Metadata } from "next";
import { EmergencyBanner } from "./emergency-banner";


export const metadata: Metadata = {
  title: "Pricing | Data Recovery Services | Data Revive Labs",
  description:
    "Transparent, professional data recovery pricing in Nairobi. Free evaluation — pay only if we recover your data.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/pricing",
  },
};

export default function Pricing() {
  return (
    <main className="min-h-screen">
      {/* Emergency Banner */}
      <EmergencyBanner />

      <div className="container px-6 py-16">
        {/* Header */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Transparent Data Recovery Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Free evaluation. You only pay when we successfully recover your data.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Basic */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Basic Recovery</h3>
            <p className="text-emerald-600 font-bold text-lg mb-4">
              KSh 8,500 – 20,000
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Deleted files</li>
              <li>• Formatted drives</li>
              <li>• Lost partitions</li>
              <li>• Basic phone/USB issues</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Turnaround: 24–72 hours. Pay only if we recover.
            </p>
          </div>

          {/* Advanced */}
          <div className="border rounded-xl p-6 shadow-sm bg-emerald-50">
            <h3 className="text-xl font-semibold mb-2">Advanced Recovery</h3>
            <p className="text-emerald-600 font-bold text-lg mb-4">
              KSh 20,000 – 55,000
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Firmware faults</li>
              <li>• Slow / unstable HDD or SSD</li>
              <li>• ST DM issues</li>
              <li>• NVMe TRIM protection</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Includes full diagnostics, safe drive cloning and data extraction.
            </p>
          </div>

          {/* Critical */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Critical / Emergency</h3>
            <p className="text-emerald-600 font-bold text-lg mb-4">
              From KSh 55,000+
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Clicking or non-detecting drives</li>
              <li>• Dead SSD controller</li>
              <li>• RAID / NAS failures</li>
              <li>• Business and server emergencies</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Clean environment and specialized hardware for critical cases.
            </p>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            No Recovery — No Payment
          </h2>
          <p className="text-muted-foreground">
            If we cannot provide usable files, you pay nothing.
            All costs are confirmed after our free evaluation.
          </p>
        </section>

        {/* What affects price */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-4">What Affects Pricing?</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>Device type: HDD, SSD, external drive, phone, RAID or NAS.</li>
            <li>Failure cause: deleted, formatted, physical or firmware issues.</li>
            <li>Previous work: if the device has been opened or tampered with.</li>
            <li>Tools used: software, hardware-assisted or cleanroom.</li>
            <li>Urgency: standard vs emergency same-day service.</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Recent Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-xl p-5 shadow-sm">
              <p className="font-semibold mb-2">Dead External Drive</p>
              <p className="text-muted-foreground mb-3">
                2TB drive not detecting. We cloned the drive and recovered 1.4TB
                of family photos and videos.
              </p>
              <p className="text-xs text-emerald-700">
                “Thought everything was gone. You saved our memories.”
              </p>
            </div>

            <div className="border rounded-xl p-5 shadow-sm">
              <p className="font-semibold mb-2">Office Laptop Crash</p>
              <p className="text-muted-foreground mb-3">
                SSD extremely slow, Windows refusing to boot. We imaged the SSD
                and restored accounts and documents.
              </p>
              <p className="text-xs text-emerald-700">
                “Saved months of work. Worth every shilling.”
              </p>
            </div>

            <div className="border rounded-xl p-5 shadow-sm">
              <p className="font-semibold mb-2">Phone with Broken Screen</p>
              <p className="text-muted-foreground mb-3">
                Screen dead. We extracted photos, WhatsApp chats and contacts.
              </p>
              <p className="text-xs text-emerald-700">
                “You even recovered chats I needed for legal evidence.”
              </p>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-4 text-center">Pricing FAQ</h2>

          <div className="space-y-4 text-sm md:text-base">
            <div>
              <p className="font-medium">
                Do I still pay if recovery fails?
              </p>
              <p className="text-muted-foreground">
                No. No recovery — no payment. If we cannot recover usable files,
                you owe nothing.
              </p>
            </div>

            <div>
              <p className="font-medium">
                Can the final price change later?
              </p>
              <p className="text-muted-foreground">
                We only begin work after a diagnostic and confirmed quotation.
                You approve the cost before any recovery begins.
              </p>
            </div>

            <div>
              <p className="font-medium">
                How long does recovery usually take?
              </p>
              <p className="text-muted-foreground">
                Standard cases take 24–72 hrs. Complex or damaged drives may take
                longer. Emergency same-day service is available.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-8">
          <a
            href="/contact"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-medium"
          >
            Request Free Evaluation
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Or call / WhatsApp us for urgent cases — we&apos;re ready to help.
          </p>
        </section>
      </div>
    </main>
  );
}
