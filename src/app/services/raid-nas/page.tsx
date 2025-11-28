import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "../../components/ui/cta";

export const metadata: Metadata = {
  title: "RAID & NAS Server Data Recovery | Data Revive Labs Kenya",
  description:
    "Professional RAID, NAS and server data recovery in Kenya. Failed arrays, rebuild errors, multi-disk failures and virtualised storage handled in a technician-only lab.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/raid-nas",
  },
};

export default function RaidNasRecovery() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background to-emerald-50/40">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-2">
              RAID • NAS • SERVERS
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              RAID &amp; NAS Server Data Recovery
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Your array will not mount, a rebuild has failed, or multiple disks
              have dropped out. We help businesses and teams recover data from
              RAID, NAS and server storage without guesswork.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Every case is handled in a technician-only lab, using controlled
              imaging and careful reconstruction of the array layout before any
              file repair or extraction work is done.
            </p>

            <div className="flex flex-wrap gap-3">
              <CTA href="/contact" size="lg">
                Start a RAID recovery case
              </CTA>
              <CTA href="tel:+254768177714" variant="outline" size="md">
                Call 0768 177 714 (urgent)
              </CTA>
            </div>

            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              For outages that affect production systems, mention that it is{" "}
              <span className="font-medium">business-critical</span> so we can
              prioritise your evaluation.
            </p>
          </div>

          <div className="relative h-56 md:h-72 lg:h-80 w-full">
            <Image
              src="/services/raid-nas.png"
              alt="RAID and NAS server data recovery in Kenya"
              fill
              className="rounded-2xl object-cover shadow-md"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* COMMON SCENARIOS */}
      <section className="container px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common RAID &amp; NAS Failure Scenarios
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            We support most common configurations used by small businesses,
            offices and teams, including RAID 0/1/5/6/10, NAS appliances and
            virtualised storage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base text-muted-foreground">
          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">Logical / OS-level</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Deleted or formatted volumes on RAID/NAS</li>
              <li>Corrupted file systems after power loss</li>
              <li>Accidental removal of virtual disks or LUNs</li>
              <li>Failed updates that leave shares inaccessible</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Array &amp; parity problems
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rebuild failures or stalled rebuilds</li>
              <li>Wrong disk order after swapping drives</li>
              <li>Multiple drive failures in RAID 5/6</li>
              <li>Degraded arrays that no longer mount</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Hardware &amp; disk-level issues
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Clicking or non-detecting member disks</li>
              <li>Bad sectors across multiple drives</li>
              <li>Controller or backplane failures</li>
              <li>Damaged NAS units after power events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT TO DO / WHAT TO AVOID */}
      <section className="bg-muted/40 border-y">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              What You Should Do Now
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium text-foreground">Stop all rebuilds:</span>{" "}
                if the array is degraded or throwing errors, stop rebuild
                attempts immediately.
              </li>
              <li>
                <span className="font-medium text-foreground">Label everything:</span>{" "}
                note slot positions, drive order and any changes made so far.
              </li>
              <li>
                <span className="font-medium text-foreground">Record messages:</span>{" "}
                take photos of error screens and NAS logs where possible.
              </li>
              <li>
                <span className="font-medium text-foreground">Contact us early:</span>{" "}
                the fewer &quot;experiments&quot; that have been tried, the better the
                chance of a clean recovery.
              </li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              Please Avoid Doing This
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Do not remove or swap disks without recording their{" "}
                <span className="font-medium text-foreground">exact order</span>.
              </li>
              <li>
                Do not initialise or create a new array on the same disks &mdash;
                this can overwrite critical metadata.
              </li>
              <li>
                Avoid running generic &quot;repair&quot; tools that treat the array
                like a single basic disk.
              </li>
              <li>
                Do not keep forcing a rebuild that keeps failing; this can
                destroy remaining parity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS & PRICING */}
      <section className="container px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              How We Approach RAID &amp; NAS Recovery
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Case review and stabilisation:
                </span>{" "}
                we review logs, symptoms and any actions already taken, then
                stabilise the environment.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Disk-by-disk imaging:
                </span>{" "}
                each member disk is imaged where possible so that we work from
                safe copies instead of the originals.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Array reconstruction:
                </span>{" "}
                we analyse parity, stripe size and disk order to rebuild the
                virtual layout of the array.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  File system repair &amp; extraction:
                </span>{" "}
                once the array is virtually rebuilt, we repair file systems and
                extract critical data.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Verification &amp; delivery:
                </span>{" "}
                recovered data is verified and delivered on new media or secure
                transfer.
              </li>
            </ol>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              RAID &amp; NAS Pricing – Typical Ranges
            </h2>
            <p className="mb-3">
              RAID and NAS cases vary widely in complexity. As a guideline:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Logical issues on healthy disks: from{" "}
                <span className="font-medium text-foreground">KSh 35,000</span>
              </li>
              <li>
                Degraded arrays with one failing disk: from{" "}
                <span className="font-medium text-foreground">KSh 55,000</span>
              </li>
              <li>
                Multiple failed disks or complex virtualised setups: from{" "}
                <span className="font-medium text-foreground">KSh 85,000+</span>
              </li>
            </ul>
            <p className="mt-3">
              For many logical-only cases, we still follow a{" "}
              <span className="font-medium text-foreground">
                &quot;no recovery, no payment&quot;
              </span>{" "}
              policy. For heavy hardware and multi-disk failures, a lab attempt
              fee is agreed upfront and deducted from the final cost if
              recovery succeeds.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <CTA href="/pricing" size="md">
                View full pricing
              </CTA>
              <CTA href="/process" variant="outline" size="sm">
                See full recovery process
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container px-6 pb-12 md:pb-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Server or NAS down? Talk to a recovery technician first.
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Before rebuilding, re-initialising or swapping more disks, get a
          professional opinion. The right first move can decide whether your
          data survives.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <CTA href="/contact" size="lg">
            Submit a RAID recovery enquiry
          </CTA>
          <CTA href="https://wa.me/254768177714" variant="outline" size="md">
            WhatsApp about a RAID failure
          </CTA>
        </div>
      </section>
    </main>
  );
}
