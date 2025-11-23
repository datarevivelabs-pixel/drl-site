import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency & After-Hours Data Recovery | Data Revive Labs Kenya",
  description:
    "Emergency and after-hours data recovery in Kenya for critical outages, server failures and time-sensitive cases. Fast diagnostics and priority handling.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/emergency",
  },
  openGraph: {
    title: "Emergency & After-Hours Data Recovery | Data Revive Labs Kenya",
    description:
      "Critical data loss? We provide priority, after-hours and weekend data recovery services for businesses and individuals in Kenya.",
    url: "https://datarevivelabs.co.ke/services/emergency",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/services/emergency.png",
        width: 1200,
        height: 630,
        alt: "Emergency data recovery services",
      },
    ],
    type: "article",
    locale: "en_KE",
  },
};

export default function EmergencyRecoveryPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
              EMERGENCY &amp; AFTER-HOURS DATA RECOVERY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              When{" "}
              <span className="text-emerald-500">downtime is not an option</span>,{" "}
              we prioritize your recovery.
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              Critical server crash? Deadline-sensitive project? Lost data hours
              before an important submission? Our emergency service is designed
              for situations where time is just as important as the data itself.
            </p>

            <ul className="grid grid-cols-2 gap-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Server &amp; RAID failures</li>
              <li>• NAS and shared storage outages</li>
              <li>• Crashed workstations before deadlines</li>
              <li>• Business-critical databases</li>
              <li>• After-hours &amp; weekend support</li>
              <li>• Priority diagnostics &amp; handling</li>
            </ul>

            <div className="pt-3 flex flex-wrap gap-3 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Request emergency help
              </Link>
              <p className="text-xs md:text-sm text-muted-foreground">
                Let us know it&apos;s an emergency and share your timelines.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto max-w-sm border bg-card shadow-lg rounded-2xl overflow-hidden">
            <Image
              src="/services/emergency.png"
              alt="Emergency data recovery"
              width={800}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* HOW EMERGENCY HANDLING WORKS */}
      <section className="border-b py-12 md:py-16">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            How our emergency recovery process works
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                1. Immediate contact &amp; triage
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                We collect key information about the failure, urgency and impact
                so we can advise the safest next steps and prepare for intake.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                2. Priority diagnostics
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Your case is placed ahead of standard queue. We run focused
                diagnostics to understand the failure type and best recovery
                strategy.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                3. Accelerated recovery window
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Where feasible, we assign extended hours and additional
                resources to your case to reduce turnaround time as much as
                safely possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO TREAT IT AS EMERGENCY */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              When should you treat a case as an emergency?
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Production server or shared storage has failed</li>
              <li>• Critical accounting, ERP or database is inaccessible</li>
              <li>• You face severe business, legal or financial impact</li>
              <li>• You have an imminent deadline or filing requirement</li>
              <li>• A one-time event (wedding, shoot, production) is at risk</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="text-sm md:text-base font-semibold">
              What to do immediately
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>✓ Stop all write activity to the affected disks</li>
              <li>✓ Do not keep rebooting or rebuilding failed arrays</li>
              <li>✓ Note any errors, beeps or changes you observed</li>
              <li>✓ Contact us with a clear description of what happened</li>
              <li>✗ Don&apos;t run random &quot;repair&quot; tools on production data</li>
              <li>✗ Don&apos;t reinitialize volumes or format drives</li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-5 py-2 text-xs md:text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Tell us about your emergency case
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Frequently asked questions
          </h2>

          <div className="space-y-4 text-xs md:text-sm">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-1">
                Is emergency recovery more expensive?
              </h3>
              <p className="text-muted-foreground">
                Emergency cases typically attract a higher service rate due to
                priority handling and extended-hours work. We always share
                expected costs after diagnostics and before proceeding.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-1">
                How fast can you complete an emergency case?
              </h3>
              <p className="text-muted-foreground">
                Timelines depend on the failure type and capacity, but emergency
                handling is designed to significantly reduce waiting time
                compared to standard queue. We give a realistic estimate after
                initial diagnostics.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-1">
                Do you still follow the same safety procedures?
              </h3>
              <p className="text-muted-foreground">
                Yes. Even under time pressure, we do not skip essential steps
                such as imaging, protection of original media and safe
                workflows. Speed never replaces safety.
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Request emergency data recovery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
