import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "../../components/ui/cta";

export const metadata: Metadata = {
  title: "Emergency 24/7 Data Recovery | Data Revive Labs Kenya",
  description:
    "Priority emergency data recovery in Kenya for failed servers, RAID, laptops and critical business systems. Technician-only lab, arranged by call, WhatsApp or courier.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/emergency",
  },
};

export default function EmergencyRecovery() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background to-emerald-50/40">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          {/* Text side */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-2">
              EMERGENCY • 24/7
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency &amp; After-Hours Data Recovery
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              A server has gone down, a RAID will not mount, or a laptop with
              critical work has failed hours before a deadline. We provide
              priority handling for urgent data loss cases across Kenya.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              All emergency cases are handled in a dedicated, technician-only
              lab. We stabilise your media first, then focus on recovering the
              most important data as quickly and safely as possible.
            </p>

            <div className="flex flex-wrap gap-3">
              <CTA href="tel:+254768177714" size="lg">
                Call 0768 177 714 (urgent)
              </CTA>
              <CTA
                href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20have%20an%20urgent%20data%20loss%20case."
                variant="outline"
                size="md"
              >
                WhatsApp a technician
              </CTA>
            </div>

            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              Available for urgent cases{" "}
              <span className="font-medium">evenings, weekends and holidays</span>{" "}
              by prior arrangement.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-56 md:h-72 lg:h-80 w-full">
            <Image
              src="/services/emergency.png"
              alt="Emergency 24/7 data recovery services in Kenya"
              fill
              className="rounded-2xl object-cover shadow-md"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* WHEN IT'S AN EMERGENCY */}
      <section className="container px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            When to Treat a Case as Emergency
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Not every failure needs emergency handling. We recommend treating
            your case as urgent if one or more of the following apply:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base text-muted-foreground">
          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Business &amp; operations
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Production server or NAS is offline</li>
              <li>Accounting, ERP or POS data is inaccessible</li>
              <li>Failure is blocking staff or customers</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Deadlines &amp; obligations
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Upcoming court or audit deadlines</li>
              <li>Project submissions or client deliveries</li>
              <li>Loss of files would cause penalties or fines</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              High-value or irreplaceable data
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Critical research, production or design data</li>
              <li>Key financial or legal evidence</li>
              <li>Backups have also failed or are incomplete</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW EMERGENCY HANDLING WORKS */}
      <section className="bg-muted/40 border-y">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              How We Handle Emergency Cases
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Call or WhatsApp:
                </span>{" "}
                we quickly review what has failed, what data is needed and what
                has already been tried.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Safe shutdown &amp; stabilisation:
                </span>{" "}
                we guide you on powering down systems safely to avoid further
                damage.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Priority intake:
                </span>{" "}
                we arrange an appointment or courier so your device reaches the
                lab as soon as possible.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Focused recovery plan:
                </span>{" "}
                we prioritise the most important volumes, folders or databases
                first.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Progress updates:
                </span>{" "}
                you receive clear updates as imaging, reconstruction and data
                extraction progress.
              </li>
            </ol>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              Emergency Pricing &amp; Turnaround
            </h2>
            <p className="mb-3">
              Emergency handling focuses on{" "}
              <span className="font-medium text-foreground">
                speed without sacrificing safety
              </span>
              . Typical emergency cases include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Server / NAS outages and RAID failures</li>
              <li>Business laptops and workstations with deadlines</li>
              <li>Cases tied to legal, court or regulatory dates</li>
            </ul>
            <p className="mt-3">
              Emergency pricing is higher than standard service and may include
              an{" "}
              <span className="font-medium text-foreground">
                agreed emergency fee
              </span>{" "}
              for out-of-hours work. Exact costs depend on device type, failure
              mode and urgency.
            </p>
            <p className="mt-3">
              Where possible, logical-only emergency cases still follow our{" "}
              <span className="font-medium text-foreground">
                &quot;no recovery, no payment&quot;
              </span>{" "}
              policy for the main recovery fee.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <CTA href="/pricing" size="md">
                View standard pricing ranges
              </CTA>
              <CTA href="/process" variant="outline" size="sm">
                See our recovery process
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FAQ */}
      <section className="container px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Emergency Data Recovery – Quick FAQ
          </h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">
                Do you come on-site for emergencies?
              </p>
              <p>
                In most cases we work from our lab so we can use the right
                tools and a controlled environment. For certain server cases,
                limited on-site work or supervised removal of drives may be
                possible by arrangement.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">
                How fast can you start working on my case?
              </p>
              <p>
                Once the device is in our lab and emergency handling is agreed,
                we usually begin evaluation the same day or within a few hours,
                depending on when it arrives.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">
                Will you try risky methods just because it&apos;s urgent?
              </p>
              <p>
                No. Urgency never justifies unsafe procedures. We follow the
                same safe imaging and recovery methods as standard cases, but we
                prioritise your case and work extended hours where necessary.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground">
                What should I do right now while I wait?
              </p>
              <p>
                Keep the affected device powered off, avoid repeated restarts or
                rebuild attempts, and avoid running repair tools. The less the
                system is stressed, the better your chances of a full recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container px-6 pb-12 md:pb-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Need urgent help with a failed drive, RAID or server?
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Talk directly to a data recovery technician before taking any risky
          steps. We&apos;ll help you decide the safest and fastest way forward.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <CTA href="tel:+254768177714" size="lg">
            Call 0768 177 714 now
          </CTA>
          <CTA
            href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20have%20an%20urgent%20data%20recovery%20case."
            variant="outline"
            size="md"
          >
            WhatsApp about an emergency
          </CTA>
        </div>
      </section>
    </main>
  );
}
