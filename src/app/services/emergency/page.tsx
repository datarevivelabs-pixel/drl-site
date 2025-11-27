import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency & After-Hours Data Recovery | Data Revive Labs Nairobi",
  description:
    "24/7 emergency data recovery in Nairobi, Kenya. Critical outages, RAID failures and time-sensitive data loss handled with priority response.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/emergency",
  },
};

export default function EmergencyRecoveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO / INTRO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* TEXT SIDE */}
          <div className="space-y-4">
            <p className="text-[11px] md:text-xs tracking-[0.25em] text-emerald-500 uppercase">
              SERVICES • EMERGENCY / AFTER-HOURS
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Emergency data recovery for{" "}
              <span className="text-emerald-500">time-critical cases</span>.
            </h1>

            <p className="text-sm md:text-base text-muted-foreground">
              When every hour matters, we provide immediate response for hard
              drives, RAID/NAS arrays, phones and servers. Our emergency service
              prioritises diagnostics, safe handling and rapid action to minimise
              downtime and data loss.
            </p>

            <ul className="grid gap-2 text-xs md:text-sm text-muted-foreground">
              <li>• Business outages and urgent RAID/NAS failures</li>
              <li>• Boot failures on critical workstations and laptops</li>
              <li>• Dead external drives containing project files</li>
              <li>• Last-minute deadlines with no backups</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Request priority diagnostic
              </Link>
              <Link
                href="https://wa.me/254768177714"
                target="_blank"
                className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
              >
                WhatsApp now →
              </Link>
            </div>

            <p className="text-[11px] md:text-xs text-muted-foreground">
              Priority cases are queue-skipped and processed continuously until
              recovery is complete wherever possible.
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-3xl border bg-card overflow-hidden shadow-lg">
              <Image
                src="/services/emergency.png"
                alt="Emergency data recovery and priority services in Kenya"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 220px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              When should you request emergency service?
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Loss of access stops your business from operating</li>
              <li>• A project deadline depends on specific files</li>
              <li>• Your server or NAS fails and the team is offline</li>
              <li>• A single damaged disk risks permanent data loss</li>
              <li>• You cannot recreate or re-download the data</li>
            </ul>

            <p className="text-xs md:text-sm text-muted-foreground">
              In these cases, speed matters. Each attempt to reboot, rebuild or
              format the device increases risk. Shut it down and contact us
              immediately.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              How our emergency recovery process works
            </h2>
            <ol className="space-y-2 text-xs md:text-sm text-muted-foreground list-decimal list-inside">
              <li>
                We gather symptoms, device type and any recent actions (power
                loss, rebuild, password, update, etc.)
              </li>
              <li>
                You drop off or courier the device to our Nairobi lab — or for
                on-site cases we dispatch a technician.
              </li>
              <li>
                We stabilise the hardware and clone storage using specialist
                tools that avoid further damage.
              </li>
              <li>
                Once a clean copy is created, we extract critical data as a
                priority and deliver it to you.
              </li>
              <li>
                If full recovery is possible, we complete the job and return
                structured results on new media.
              </li>
            </ol>

            <p className="text-xs md:text-sm text-muted-foreground">
              Forensic-grade preservation procedures are used when required for
              insurance or legal cases.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t bg-muted/40 py-8 md:py-10">
        <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold">
              Need urgent recovery right now?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Tell us the device type and what happened. We&apos;ll guide you
              through the safest next step.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Talk to a specialist
            </Link>
            <Link
              href="https://wa.me/254768177714"
              target="_blank"
              className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
              WhatsApp (24/7)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
