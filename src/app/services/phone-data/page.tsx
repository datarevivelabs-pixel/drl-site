import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phone & Mobile Data Recovery | Data Revive Labs Kenya",
  description:
    "Professional phone and tablet data recovery in Kenya. We recover photos, videos, chats and files from dead, damaged or corrupted Android and iOS devices.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/phone-data",
  },
  openGraph: {
    title: "Phone & Mobile Data Recovery | Data Revive Labs Kenya",
    description:
      "Lost photos, videos or WhatsApp chats from your phone? We recover data from dead, damaged or corrupted Android and iOS devices.",
    url: "https://datarevivelabs.co.ke/services/phone-data",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/services/phone-data.png",
        width: 1200,
        height: 630,
        alt: "Phone and mobile data recovery",
      },
    ],
    type: "article",
    locale: "en_KE",
  },
};

export default function PhoneDataRecoveryPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
              PHONE &amp; MOBILE DATA RECOVERY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Recover{" "}
              <span className="text-emerald-500">photos, videos &amp; chats</span>{" "}
              from dead or damaged phones.
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              We help recover important memories and business data from phones
              and tablets that no longer power on, are liquid-damaged, stuck on
              logo, or have corrupted storage.
            </p>

            <ul className="grid grid-cols-2 gap-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Dead or no-display phones</li>
              <li>• Liquid / drop damage</li>
              <li>• Stuck on logo / boot loop</li>
              <li>• Corrupted or encrypted storage</li>
              <li>• Accidental deletion / reset</li>
              <li>• Android &amp; iOS devices</li>
            </ul>

            <div className="pt-3 flex flex-wrap gap-3 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Start a phone recovery case
              </Link>
              <p className="text-xs md:text-sm text-muted-foreground">
                Initial diagnostics are obligation-free.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto max-w-sm border bg-card shadow-lg rounded-2xl overflow-hidden">
            <Image
              src="/services/phone-data.png"
              alt="Phone data recovery"
              width={800}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHAT WE CAN RECOVER */}
      <section className="border-b py-12 md:py-16">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What kind of phone data can be recovered?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                Personal memories
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Photos, videos and voice notes from internal memory and SD
                cards, even when the device no longer powers on.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                Messages &amp; chats
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Recovery of SMS, WhatsApp, Telegram and other app data in
                supported scenarios, especially where no backup exists.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                Business &amp; app data
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Contacts, documents, call logs, notes, and files needed for
                business continuity and records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO CALL US */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Common phone failure scenarios
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Phone dropped in water and no longer turns on</li>
              <li>• Screen broken and touch not working, but phone still powers</li>
              <li>• Device stuck on logo, looping restart or recovery screen</li>
              <li>• Factory reset performed accidentally with no backup</li>
              <li>• SD card asks to be formatted or appears as 0 MB</li>
              <li>• Phone is physically damaged after an accident or fall</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="text-sm md:text-base font-semibold">
              What you should do (and avoid)
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>✓ Turn off the device and avoid repeated powering on</li>
              <li>✓ If wet, do not charge; keep it off and dry externally only</li>
              <li>✓ Contact us before trying random recovery apps</li>
              <li>✗ Don&apos;t keep entering wrong PINs or passwords</li>
              <li>✗ Don&apos;t factory reset again hoping data will reappear</li>
              <li>✗ Don&apos;t attempt board-level repairs without proper tools</li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-5 py-2 text-xs md:text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Talk to a phone recovery specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Frequently asked questions
          </h2>

          <div className="space-y-4 text-xs md:text-sm">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-1">
                Can you recover data from phones that do not power on?
              </h3>
              <p className="text-muted-foreground">
                In many cases, yes. We focus on accessing the memory chip or
                storage subsystem rather than repairing the phone for normal
                use. Each case requires diagnostics to confirm feasibility.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-1">
                Is my data private during the process?
              </h3>
              <p className="text-muted-foreground">
                Yes. All phone recoveries are handled under strict
                confidentiality. Data is stored securely and wiped from our
                systems after successful handover.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-1">
                How long does phone data recovery take?
              </h3>
              <p className="text-muted-foreground">
                Simple cases can complete within 1–3 days, while complex
                hardware-level recoveries may take longer depending on damage
                and parts availability.
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Start a phone data recovery case
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
