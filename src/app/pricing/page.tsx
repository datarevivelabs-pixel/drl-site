import type { Metadata } from "next";
import { EmergencyBanner } from "../components/ui/emergency-banner";
import { CTA } from "../components/ui/cta";

export const metadata: Metadata = {
  title: "Pricing | Data Recovery Services | Data Revive Labs",
  description:
    "Transparent, professional data recovery pricing in Kenya. Free evaluation for logical cases — lab fees apply only to complex hardware and critical recoveries.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/pricing",
  },
};

export default function Pricing() {
  return (
    <main className="min-h-screen">
      {/* Emergency banner at the very top */}
      <EmergencyBanner />

      <div className="container px-6 py-16">
        {/* Header */}
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Data Recovery Pricing &amp; Evaluation
          </h1>
          <p className="text-lg text-muted-foreground">
            Every case is different. We start with a technician review, then
            give you a clear price range before any recovery work begins.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Basic Logical */}
          <div className="border rounded-xl p-6 shadow-sm bg-background">
            <h3 className="text-xl font-semibold mb-2">
              Basic Logical Recovery
            </h3>
            <p className="text-emerald-600 font-bold text-lg mb-2">
              KSh 8,500 – 20,000
            </p>
            <p className="text-xs mb-4 text-emerald-700 font-medium">
              No recovery — no payment (logical cases)
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Deleted files and folders</li>
              <li>• Formatted drives or partitions</li>
              <li>• Corrupted file systems</li>
              <li>• Basic phone/USB data extraction</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Device is usually still detecting and has no obvious physical
              damage. You only pay once we recover usable data.
            </p>
          </div>

          {/* Advanced Logical / Firmware */}
          <div className="border rounded-xl p-6 shadow-sm bg-emerald-50">
            <h3 className="text-xl font-semibold mb-2">
              Advanced Logical &amp; Firmware
            </h3>
            <p className="text-emerald-600 font-bold text-lg mb-2">
              KSh 20,000 – 55,000
            </p>
            <p className="text-xs mb-4 text-emerald-700 font-medium">
              Technician-led recovery, evaluation included
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Unstable or very slow HDD / SSD</li>
              <li>• Firmware or translator issues</li>
              <li>• NVMe / SSD logical failures</li>
              <li>• Complex operating system crashes</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              We perform a detailed evaluation, then confirm the cost range
              before starting work. In many of these cases, you still only pay
              if we succeed.
            </p>
          </div>

          {/* Physical / Critical */}
          <div className="border rounded-xl p-6 shadow-sm bg-background">
            <h3 className="text-xl font-semibold mb-2">
              Physical &amp; Critical Recovery
            </h3>
            <p className="text-emerald-600 font-bold text-lg mb-2">
              From KSh 55,000+
            </p>
            <p className="text-xs mb-4 text-red-700 font-medium">
              Lab attempt fee may apply (non-refundable)
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clicking or non-detecting hard drives</li>
              <li>• Head or platter level issues</li>
              <li>• Dead SSD controllers / NAND work</li>
              <li>• RAID / NAS / critical business outages</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              These cases may require donor parts, specialized tools and
              extended lab time. A non-refundable attempt fee is charged before
              work, and deducted from the total if recovery is successful.
            </p>
          </div>
        </section>

        {/* Policy – No Recovery / Lab Model */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Recovery &amp; Payment Policy
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
            <div className="border rounded-xl p-5 bg-background shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                No Recovery — No Payment (Logical Cases)
              </h3>
              <p className="text-muted-foreground mb-2">
                For logical cases (where the device has no obvious physical
                damage), our policy is simple:
              </p>
              <p className="font-medium">
                If we cannot recover usable files, you do not pay the recovery
                fee.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-muted-foreground text-sm">
                <li>Deleted / formatted volumes</li>
                <li>Corrupted file systems and OS failures</li>
                <li>Basic phone, tablet and USB recoveries</li>
              </ul>
            </div>

            <div className="border rounded-xl p-5 bg-background shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Hardware, Physical &amp; Complex Cases
              </h3>
              <p className="text-muted-foreground mb-2">
                Some recoveries require donor parts, specialized equipment and
                many hours of lab work. In these situations:
              </p>
              <p className="font-medium">
                A non-refundable lab attempt fee applies.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This fee covers technician time, clean lab usage and donor
                components. If we succeed, it is deducted from your final
                recovery cost.
              </p>
            </div>
          </div>
        </section>

        {/* How we handle your device */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-3">
            How We Handle Your Device
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-3">
            We treat every case as if it contains irreplaceable data. We do not
            run experiments or software tools directly on your original device.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
            <li>
              We{" "}
              <span className="font-medium text-foreground">
                first clone your drive or storage
              </span>{" "}
              to a safe working copy where possible.
            </li>
            <li>
              All work happens in a{" "}
              <span className="font-medium text-foreground">
                controlled, technician-only lab
              </span>{" "}
              — not a walk-in shop or cyber.
            </li>
            <li>
              You receive a clear explanation of what happened and what we were
              able to recover.
            </li>
          </ul>
        </section>

        {/* What affects price */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-4">What Affects Pricing?</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Device type:</span>{" "}
              HDD, SSD, external drive, phone, RAID / NAS or server.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Failure type:
              </span>{" "}
              logical (deleted, formatted, corrupted) vs physical / hardware
              damage.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Previous attempts:
              </span>{" "}
              whether the device has been opened, dropped or worked on by other
              shops can significantly affect difficulty and cost.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Tools &amp; parts:
              </span>{" "}
              whether your case requires donor drives, firmware work or special
              equipment.
            </li>
            <li>
              <span className="font-medium text-foreground">Urgency:</span>{" "}
              standard turnaround vs urgent business / emergency handling.
            </li>
          </ul>
        </section>

        {/* Success Stories */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Recent Recovery Examples
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-xl p-5 shadow-sm bg-background">
              <p className="font-semibold mb-2">Clicking External Drive</p>
              <p className="text-muted-foreground mb-3">
                2TB external HDD from a Nairobi family started clicking and no
                longer appeared on any computer. After controlled imaging and
                parts replacement, we recovered over 1.4TB of photos and videos.
              </p>
              <p className="text-xs text-emerald-700">
                “We thought everything was gone. You brought back 10+ years of
                memories.”
              </p>
            </div>

            <div className="border rounded-xl p-5 shadow-sm bg-background">
              <p className="font-semibold mb-2">Business Laptop Crash</p>
              <p className="text-muted-foreground mb-3">
                SSD in an office laptop became extremely slow and Windows would
                not boot. We imaged the SSD, rebuilt the file system and
                restored critical business documents and accounting files.
              </p>
              <p className="text-xs text-emerald-700">
                “Saved us from redoing months of work. Worth every shilling.”
              </p>
            </div>

            <div className="border rounded-xl p-5 shadow-sm bg-background">
              <p className="font-semibold mb-2">Phone with Dead Screen</p>
              <p className="text-muted-foreground mb-3">
                Smartphone with completely dead display. We performed a safe
                extraction of photos, WhatsApp chats and contacts to a new
                device and secure backup.
              </p>
              <p className="text-xs text-emerald-700">
                “You even recovered chats I needed for legal evidence.”
              </p>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Pricing &amp; Policy FAQ
          </h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">
                Do I still pay if recovery fails?
              </p>
              <p>
                For pure logical cases, no — if we cannot recover usable data,
                you do not pay the recovery fee. For hardware and complex lab
                cases, the agreed lab attempt fee is not refunded because the
                work, time and donor parts have already been used.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">
                Why do some cases require a lab attempt fee?
              </p>
              <p>
                Physical and critical failures often need donor drives, special
                tools and hours of technician time. The lab fee ensures we can
                handle your case properly without cutting corners. It is
                deducted from the final price if recovery succeeds.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">
                Will you start work without telling me the price?
              </p>
              <p>
                No. You always receive an evaluation and a price range to
                approve first. We do not proceed with any recovery attempt until
                you confirm.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">
                How long does recovery usually take?
              </p>
              <p>
                Basic cases typically take 24–72 hours after we receive your
                device. Advanced or physically damaged devices may take longer.
                For urgent business and server outages, we offer priority
                handling where possible.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-8">
          <CTA href="/contact" size="lg">
            Request Free Evaluation
          </CTA>
          <p className="mt-3 text-sm text-muted-foreground">
            Prefer to talk first? Call or WhatsApp{" "}
            <a
              href="tel:+254768177714"
              className="font-medium text-emerald-700 hover:underline"
            >
              0768 177 714
            </a>{" "}
            and a technician will guide you on the safest next step.
          </p>
        </section>
      </div>
    </main>
  );
}
