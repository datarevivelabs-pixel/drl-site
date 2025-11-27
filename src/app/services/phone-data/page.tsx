import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phone & Tablet Data Recovery | Data Revive Labs Nairobi",
  description:
    "Professional phone and tablet data recovery in Nairobi, Kenya. Dead phones, liquid damage, failed updates, corrupted storage and deleted files.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/phone-data",
  },
};

export default function PhoneDataRecoveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO / INTRO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* TEXT SIDE */}
          <div className="space-y-4">
            <p className="text-[11px] md:text-xs tracking-[0.25em] text-emerald-500 uppercase">
              SERVICES • PHONE &amp; TABLET DATA
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Phone &amp; tablet data recovery for{" "}
              <span className="text-emerald-500">photos, chats &amp; files</span>.
            </h1>

            <p className="text-sm md:text-base text-muted-foreground">
              We recover data from Android phones, iPhones and tablets that are
              dead, water-damaged, stuck on the logo, or not recognised by a
              computer. From family photos to business WhatsApp chats, we help
              you get back what matters most.
            </p>

            <ul className="grid gap-2 text-xs md:text-sm text-muted-foreground">
              <li>• Dead or boot-looping Android and iOS devices</li>
              <li>• Liquid damage and broken screens that no longer respond</li>
              <li>• Failed OS updates and stuck-on-logo issues</li>
              <li>• Corrupted internal storage or SD cards</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Book a phone assessment
              </Link>
              <Link
                href="https://wa.me/254768177714"
                target="_blank"
                className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
              >
                Send device details on WhatsApp →
              </Link>
            </div>

            <p className="text-[11px] md:text-xs text-muted-foreground">
              The sooner you switch off a damaged phone, the better the chance
              of a successful recovery. Avoid repeated charge and power attempts.
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-3xl border bg-card overflow-hidden shadow-lg">
              <Image
                src="/services/phone-data.png"
                alt="Phone and tablet data recovery services in Nairobi, Kenya"
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
              Common phone &amp; tablet issues we see
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Phone will not power on after a fall, short or water spill.</li>
              <li>• Device stuck on logo, recovery mode or constant reboot loop.</li>
              <li>• Screen is completely dead but you need data inside.</li>
              <li>• Device says &quot;storage corrupted&quot; or cannot access files.</li>
              <li>• SD card shows as empty or needs to be formatted.</li>
            </ul>

            <p className="text-xs md:text-sm text-muted-foreground">
              Many of these cases are still recoverable if the right steps are
              taken early. Continuing to power a liquid-damaged device can cause
              corrosion that makes recovery more difficult.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              How our phone data recovery works
            </h2>
            <ol className="space-y-2 text-xs md:text-sm text-muted-foreground list-decimal list-inside">
              <li>
                We inspect the phone or tablet and identify whether the failure
                is physical, logical or both.
              </li>
              <li>
                Where needed, we repair the board only enough to access the data,
                using microsoldering and specialist tools.
              </li>
              <li>
                We create a full image of the storage in read-only mode to
                protect the original data.
              </li>
              <li>
                Data such as photos, videos, documents and app data (where
                possible) is extracted from the image.
              </li>
              <li>
                You review the recovered data set, then we transfer it to a new
                device or external drive.
              </li>
            </ol>

            <p className="text-xs md:text-sm text-muted-foreground">
              In some cases, especially where accounts and encryption are
              involved, we will need your PIN/password or iCloud/Google login to
              decrypt and access the data lawfully.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t bg-muted/40 py-8 md:py-10">
        <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold">
              Need data from a dead or damaged phone?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Tell us the phone model and what happened, and we&apos;ll advise on
              realistic recovery options.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Talk to a technician
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
