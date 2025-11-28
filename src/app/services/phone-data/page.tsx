import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "../../components/ui/cta";

export const metadata: Metadata = {
  title: "Phone & Tablet Data Recovery | Data Revive Labs Kenya",
  description:
    "Professional phone and tablet data recovery in Kenya. Dead phones, broken screens, liquid damage and failed updates handled in a private data recovery lab.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/phone-data",
  },
};

export default function PhoneDataRecovery() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background to-emerald-50/40">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-2">
              PHONES • TABLETS
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Phone &amp; Tablet Data Recovery
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Your phone will not turn on, the screen is completely dead, or an
              update has left your data inaccessible. We help recover photos,
              WhatsApp chats, contacts and other important data from many common
              Android and iOS failures.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              All cases are handled in a private, technician-only lab. We focus
              on safe extraction of your data, not general phone repair or quick
              screen swaps.
            </p>

            <div className="flex flex-wrap gap-3">
              <CTA href="/contact" size="lg">
                Start a phone recovery case
              </CTA>
              <CTA
                href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20need%20help%20with%20phone%20data%20recovery."
                variant="outline"
                size="md"
              >
                WhatsApp a technician
              </CTA>
            </div>

            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              When you contact us, mention the phone model, what happened and
              what data matters most (e.g. photos, WhatsApp, contacts).
            </p>
          </div>

          <div className="relative h-56 md:h-72 lg:h-80 w-full">
            <Image
              src="/services/phone-data.png"
              alt="Phone and tablet data recovery in Kenya"
              fill
              className="rounded-2xl object-cover shadow-md"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* COMMON CASES */}
      <section className="container px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Common Phone &amp; Tablet Problems We See
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Every model and failure type is different, but these are some of the
            most common situations we help with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base text-muted-foreground">
          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Display &amp; physical damage
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Screen completely dead, no touch</li>
              <li>Phone powers on but stays black</li>
              <li>Broken or unresponsive touch panel</li>
              <li>Housing bent or heavily damaged</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Liquid &amp; power problems
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Water or liquid spill on the phone</li>
              <li>Phone keeps restarting or boot-looping</li>
              <li>Won’t charge or stays stuck on logo screen</li>
              <li>Phone only shows recovery / error mode</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Software &amp; update failures
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Failed system updates or factory resets</li>
              <li>Corrupted OS after flashing or rooting</li>
              <li>Locked-out devices where account access is available</li>
              <li>Stuck at loading / spinning screen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE CAN RECOVER */}
      <section className="bg-muted/40 border-y">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              What Kind of Data Can Often Be Recovered?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>Photos and videos from internal storage</li>
              <li>WhatsApp messages, attachments and call logs</li>
              <li>Contacts, call history and SMS (where still stored on device)</li>
              <li>Documents, recordings and downloads</li>
              <li>In some cases, app data and notes (depends on model)</li>
            </ul>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Recovery possibilities depend heavily on the specific phone model,
              encryption status and what has happened since the failure.
              Sharing accurate details helps us estimate your chances more
              clearly.
            </p>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              Important Things to Avoid
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Do not keep trying to turn on a phone that{" "}
                <span className="font-medium text-foreground">has liquid damage</span>.
              </li>
              <li>
                Avoid repeated factory resets or &quot;wipe data&quot; attempts &mdash;{" "}
                these often permanently erase recoverable content.
              </li>
              <li>
                Do not give the phone to random flashing / unlocking shops if
                your main goal is data, not repair.
              </li>
              <li>
                If the device is linked to cloud backups (Google, iCloud, etc.),
                do not delete or reset those accounts until we assess the case.
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
              How Phone Data Recovery Works
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Case review:</span>{" "}
                we discuss the model, what happened, and what you need back.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Lab assessment:
                </span>{" "}
                we inspect the device and determine the safest extraction
                method.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Data access attempt:
                </span>{" "}
                depending on the failure, we may temporarily repair only what is
                necessary to access the storage.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Extraction &amp; verification:
                </span>{" "}
                we extract target data (photos, chats, etc.) and verify it with
                you.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Delivery &amp; backup:
                </span>{" "}
                your data is copied to a new device, drive or secure backup
                target.
              </li>
            </ol>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              Phone Data Recovery – Typical Pricing
            </h2>
            <p className="mb-3">
              Pricing depends on model, damage and how much work is required to
              access storage. As a general guide:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Logical / minor software issues: from{" "}
                <span className="font-medium text-foreground">KSh 8,500</span>
              </li>
              <li>
                Screen-dead but powering devices: from{" "}
                <span className="font-medium text-foreground">KSh 12,500</span>
              </li>
              <li>
                Heavy damage / liquid / board-level work: from{" "}
                <span className="font-medium text-foreground">KSh 20,000+</span>
              </li>
            </ul>
            <p className="mt-3">
              For pure logical cases, we often follow a{" "}
              <span className="font-medium text-foreground">
                &quot;no recovery, no payment&quot;
              </span>{" "}
              approach. For hardware and board-level work, a lab attempt fee may
              apply and is agreed upfront.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <CTA href="/pricing" size="md">
                View full pricing ranges
              </CTA>
              <CTA href="/process" variant="outline" size="sm">
                See our recovery process
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container px-6 pb-12 md:pb-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Lost access to photos, WhatsApp or contacts on your phone?
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Power the phone off and speak to a data recovery technician. We&apos;ll
          help you understand your options before you take any risky steps.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <CTA href="/contact" size="lg">
            Start a phone recovery enquiry
          </CTA>
          <CTA
            href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20need%20help%20with%20phone%20data%20recovery."
            variant="outline"
            size="md"
          >
            WhatsApp about phone data
          </CTA>
        </div>
      </section>
    </main>
  );
}
