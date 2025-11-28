import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "../../components/ui/cta";

export const metadata: Metadata = {
  title: "HDD & SSD Data Recovery | Data Revive Labs Kenya",
  description:
    "Professional hard drive and SSD data recovery in Kenya. Clicking drives, dead SSDs, deleted partitions and corrupted file systems handled in a technician-only lab.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/hdd-ssd",
  },
};

export default function HddSsdRecovery() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background to-emerald-50/40">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-2">
              HDD • SSD • EXTERNAL DRIVES
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hard Drive &amp; SSD Data Recovery
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Your drive has stopped responding, is clicking, or no longer
              appears on any computer. We specialise in safe data recovery for
              internal and external HDDs, SATA SSDs and NVMe drives.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              All work is done in a technician-only lab, not a walk-in shop,
              using controlled imaging procedures to protect what is left of
              your data.
            </p>

            <div className="flex flex-wrap gap-3">
              <CTA href="/contact" size="lg">
                Book a free assessment
              </CTA>
              <CTA href="tel:+254768177714" variant="outline" size="md">
                Call 0768 177 714
              </CTA>
            </div>

            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              Average evaluation time: <span className="font-medium">3–6 hours</span>.
              For urgent business cases, mention that it&apos;s an emergency.
            </p>
          </div>

          <div className="relative h-56 md:h-72 lg:h-80 w-full">
            <Image
              src="/services/hdd-ssd.png"
              alt="HDD and SSD data recovery in Kenya"
              fill
              className="rounded-2xl object-cover shadow-md"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* COMMON CASES */}
      <section className="container px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Common HDD &amp; SSD Problems We Handle
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Whether your drive is still detected or completely dead, we
              evaluate the most appropriate and safest recovery approach.
            </p>

            <div className="grid gap-4 text-sm md:text-base text-muted-foreground">
              <div className="border rounded-xl p-4 bg-background shadow-sm">
                <p className="font-semibold text-foreground mb-1">
                  Logical / Software-level issues
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Accidentally deleted files or folders</li>
                  <li>Formatted partitions or full drives</li>
                  <li>Corrupted file systems (RAW drives, blue screens)</li>
                  <li>Drives that still detect but refuse to open data</li>
                </ul>
              </div>

              <div className="border rounded-xl p-4 bg-background shadow-sm">
                <p className="font-semibold text-foreground mb-1">
                  Hardware &amp; firmware issues
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Clicking or grinding internal and external HDDs</li>
                  <li>Drives that spin but are not detected by the BIOS/OS</li>
                  <li>SSD firmware failures and controller faults</li>
                  <li>Very slow HDD/SSD that freezes the whole system</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-5 bg-muted/40 shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              What You Should Do Right Now
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium text-foreground">Stop using it:</span>{" "}
                avoid repeated restarts, scans or &quot;free&quot; recovery tools –
                they can make damage worse.
              </li>
              <li>
                <span className="font-medium text-foreground">Do not open the drive:</span>{" "}
                opening an HDD outside a controlled environment can permanently
                destroy the platters.
              </li>
              <li>
                <span className="font-medium text-foreground">Note any sounds:</span>{" "}
                clicking, beeping, or grinding noises are important clues –
                mention them when you contact us.
              </li>
              <li>
                <span className="font-medium text-foreground">Contact us early:</span>{" "}
                the earlier a professional sees the case, the better the chances
                (and the lower the cost).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS + PRICING LINK */}
      <section className="bg-muted/40 border-y">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              How We Recover Data from HDDs &amp; SSDs
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Initial assessment:</span>{" "}
                we review your case details, symptoms and previous attempts.
              </li>
              <li>
                <span className="font-medium text-foreground">Lab evaluation:</span>{" "}
                the drive is inspected and, where possible, imaged to a safe
                working copy.
              </li>
              <li>
                <span className="font-medium text-foreground">Controlled recovery:</span>{" "}
                we work only on the cloned copy to extract your folders and
                files.
              </li>
              <li>
                <span className="font-medium text-foreground">Verification:</span>{" "}
                recovered data is checked and a sample list is shared before
                final payment.
              </li>
              <li>
                <span className="font-medium text-foreground">Delivery:</span>{" "}
                your files are returned on new storage or via secure transfer.
              </li>
            </ol>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              Typical Pricing for HDD &amp; SSD Cases
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Basic logical recovery: from <span className="font-medium text-foreground">KSh 8,500</span></li>
              <li>
                Advanced logical / firmware issues: from{" "}
                <span className="font-medium text-foreground">KSh 20,000</span>
              </li>
              <li>
                Physical and critical failures: from{" "}
                <span className="font-medium text-foreground">KSh 55,000+</span>
              </li>
            </ul>
            <p className="mt-3">
              Exact cost depends on the failure type, drive capacity and any
              previous work done by other shops. You always receive a price
              range to approve before we begin recovery.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <CTA href="/pricing" size="md">
                View full pricing
              </CTA>
              <CTA href="/process" variant="outline" size="sm">
                How our process works
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container px-6 py-12 md:py-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Your hard drive or SSD is failing. Don&apos;t give it more chances to die.
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Power the device off and talk to a technician. A few minutes of advice
          can save years of photos, work or business data.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <CTA href="/contact" size="lg">
            Start a recovery case
          </CTA>
          <CTA href="https://wa.me/254768177714" variant="outline" size="md">
            WhatsApp a technician
          </CTA>
        </div>
      </section>
    </main>
  );
}
