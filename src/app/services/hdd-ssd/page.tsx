import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HDD & SSD Data Recovery | Data Revive Labs Nairobi",
  description:
    "Professional hard drive and SSD data recovery in Nairobi, Kenya. Dead drives, firmware faults, accidental formatting and deleted partitions.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/hdd-ssd",
  },
};

export default function HddSsdRecoveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO / INTRO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* TEXT SIDE */}
          <div className="space-y-4">
            <p className="text-[11px] md:text-xs tracking-[0.25em] text-emerald-500 uppercase">
              SERVICES • HDD &amp; SSD RECOVERY
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              HDD &amp; SSD data recovery for{" "}
              <span className="text-emerald-500">critical files</span>.
            </h1>

            <p className="text-sm md:text-base text-muted-foreground">
              We recover data from failed hard drives and SSDs used in desktops,
              laptops, external enclosures and servers across Kenya. Whether the
              drive is clicking, not detected or accidentally formatted, we give
              you the best possible chance of getting your data back.
            </p>

            <ul className="grid gap-2 text-xs md:text-sm text-muted-foreground">
              <li>• Dead / undetected SATA, NVMe and USB external drives</li>
              <li>• Mechanical faults, head crashes and bad sectors</li>
              <li>• Firmware corruption, SMART errors and slow responding drives</li>
              <li>• Deleted partitions, accidental formatting and OS crashes</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Book a diagnostic
              </Link>
              <Link
                href="/services/emergency"
                className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
              >
                24/7 emergency options →
              </Link>
            </div>

            <p className="text-[11px] md:text-xs text-muted-foreground">
              Typical diagnostic time: <span className="font-medium">3–6 hours</span>.
              You only proceed with recovery if you&apos;re happy with the quote.
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-3xl border bg-card overflow-hidden shadow-lg">
              <Image
                src="/services/hdd-ssd.png"
                alt="HDD and SSD data recovery services in Nairobi, Kenya"
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
              Common failure signs
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Drive is not detected in BIOS or Disk Management.</li>
              <li>• Clicking, beeping or grinding noises coming from the drive.</li>
              <li>• Windows keeps asking to &quot;format&quot; the drive.</li>
              <li>• Very slow access, freezes or frequent read errors.</li>
              <li>• Laptop falls or receives a knock, then fails to boot.</li>
            </ul>

            <p className="text-xs md:text-sm text-muted-foreground">
              If you notice any of these signs, stop using the device and turn
              it off. Continued attempts can make the damage worse and reduce
              the chances of a successful recovery.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              How our HDD &amp; SSD recovery works
            </h2>
            <ol className="space-y-2 text-xs md:text-sm text-muted-foreground list-decimal list-inside">
              <li>You bring or send the drive to Data Revive Labs in Nairobi.</li>
              <li>
                We run a detailed diagnostic and share a report plus a fixed price
                quote.
              </li>
              <li>
                If you approve, we perform the recovery using specialist tools and
                clean handling procedures.
              </li>
              <li>
                We show you a file listing or sample so you can confirm the most
                important data is present.
              </li>
              <li>
                Recovered data is copied to a new drive supplied by you or
                purchased from us.
              </li>
            </ol>

            <p className="text-xs md:text-sm text-muted-foreground">
              We handle drives from laptops, desktops, external USB enclosures,
              DVRs, NAS units and more. For business-critical cases, ask about
              priority and after-hours handling.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t bg-muted/40 py-8 md:py-10">
        <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold">
              Ready to check if your drive is recoverable?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Share the symptoms and we&apos;ll advise the safest next step for
              your HDD or SSD.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Talk to an engineer
            </Link>
            <Link
              href="https://wa.me/254768177714"
              target="_blank"
              className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
              WhatsApp a quick question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
