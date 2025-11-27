"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">

      {/* =======================
          HERO
      ======================== */}
      <section className="relative flex items-center justify-center text-center min-h-[80vh] overflow-hidden">
        <div className="container px-6 text-foreground">
          <p className="tracking-[0.25em] text-xs md:text-sm text-emerald-600 mb-4 uppercase">
            DATA RECOVERY • KENYA
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl mx-auto mb-4">
            Fast, confidential{" "}
            <span className="text-emerald-500">data recovery</span> for drives,
            phones &amp; servers.
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground mb-8">
            We help individuals, businesses and institutions recover critical
            data from failed HDDs, SSDs, RAID/NAS systems, phones and more —
            professionally and securely.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Book a free assessment
            </Link>

            <button
              type="button"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-5 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
              <span className="mr-1">▼</span> Scroll to services
            </button>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground">
            Average diagnostic time:{" "}
            <span className="font-medium">3–6 hours</span>. Emergency{" "}
            <span className="font-medium">24/7</span> available.
          </p>
        </div>
      </section>

      {/* =======================
          FEATURED SERVICES
      ======================== */}
      <section
        id="services"
        className="relative border-t bg-muted/40 py-12 md:py-16"
      >
        <div className="container px-6 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Featured services
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Fast, confidential help for the most common data loss cases.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* HDD & SSD */}
            <Link
              href="/services/hdd-ssd"
              className="group relative flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/services/hdd-ssd.png"
                  alt="HDD & SSD data recovery services in Nairobi, Kenya"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm md:text-base font-semibold">
                  HDD &amp; SSD Recovery
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Dead drives, firmware faults, accidental formatting and
                  deleted partitions.
                </p>
                <p className="text-xs font-medium text-emerald-600 group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>

            {/* RAID */}
            <Link
              href="/services/raid-nas"
              className="group relative flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/services/raid-nas.png"
                  alt="RAID and NAS server data recovery in Kenya"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm md:text-base font-semibold">
                  RAID / NAS / Server
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  RAID rebuild failures, NAS outages and multi-disk server
                  crashes.
                </p>
                <p className="text-xs font-medium text-emerald-600 group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>

            {/* Phone */}
            <Link
              href="/services/phone-data"
              className="group relative flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/services/phone-data.png"
                  alt="Phone and tablet data recovery in Nairobi, Kenya"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm md:text-base font-semibold">
                  Phone &amp; tablet data
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Dead phones, liquid damage, failed updates and corrupted
                  storage.
                </p>
                <p className="text-xs font-medium text-emerald-600 group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>

            {/* Forensics */}
            <Link
              href="/services/forensics"
              className="group relative flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/services/forensics.png"
                  alt="Digital forensics and evidence analysis in Kenya"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm md:text-base font-semibold">
                  Digital forensics
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Investigation support, evidence preservation and expert
                  reports.
                </p>
                <p className="text-xs font-medium text-emerald-600 group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>

            {/* Emergency */}
            <Link
              href="/services/emergency"
              className="group relative flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/services/emergency.png"
                  alt="Emergency 24/7 data recovery in Kenya"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-sm md:text-base font-semibold">
                  Emergency &amp; after-hours
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Critical outages and time-sensitive data loss with 24/7
                  response options.
                </p>
                <p className="text-xs font-medium text-emerald-600 group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =======================
          INTERNAL LINKS
          *** SEO POWER SECTION ***
      ======================== */}
      <section className="border-t bg-muted/40 py-10">
        <div className="container px-6 grid gap-4 text-center md:grid-cols-5">
          <Link
            href="/pricing"
            className="text-sm text-emerald-600 hover:underline"
          >
            Pricing &amp; turnaround
          </Link>
          <Link
            href="/faq"
            className="text-sm text-emerald-600 hover:underline"
          >
            Common FAQs
          </Link>
          <Link
            href="/process"
            className="text-sm text-emerald-600 hover:underline"
          >
            Our recovery process
          </Link>
          <Link
            href="/contact"
            className="text-sm text-emerald-600 hover:underline"
          >
            Book a recovery
          </Link>

          {/* 🔥 NEW FOR SEO — THE NAIROBI PAGE LINK */}
          <Link
            href="/nairobi-data-recovery"
            className="text-sm text-emerald-600 hover:underline"
          >
            Nairobi Data Recovery
          </Link>
        </div>
      </section>
    </main>
  );
}
