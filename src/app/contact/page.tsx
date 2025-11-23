import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Data Revive Labs | Book a Data Recovery Assessment",
  description:
    "Contact Data Revive Labs to book a data recovery assessment for HDDs, SSDs, RAID/NAS, phones and more. Serving individuals, businesses and institutions in Kenya.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/contact",
  },
  openGraph: {
    title: "Contact Data Revive Labs | Data Recovery in Kenya",
    description:
      "Talk to Data Revive Labs about a current data loss incident or future data protection planning.",
    url: "https://datarevivelabs.co.ke/contact",
    siteName: "Data Revive Labs",
    type: "article",
    locale: "en_KE",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            CONTACT DATA REVIVE LABS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Tell us what happened,{" "}
            <span className="text-emerald-500">we&apos;ll guide the next steps.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Share a few details about your device, what went wrong and what
            data is most important to you. We&apos;ll get back to you with
            suggested options, expected timelines and next steps.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-[2fr,1.2fr]">
          {/* FORM */}
          <div className="rounded-2xl border bg-card p-6 md:p-7 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Send us a message
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-6">
              The more detail you can provide, the easier it is for us to give a
              realistic initial assessment.
            </p>

            {/* NOTE: This is a front-end form only. To make it send emails,
                you’ll later connect it to an API route, Formspree, etc. */}
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs md:text-sm font-medium"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs md:text-sm font-medium"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="+2547..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="service"
                    className="block text-xs md:text-sm font-medium"
                  >
                    Type of case
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="hdd-ssd">HDD / SSD</option>
                    <option value="raid-nas">RAID / NAS / Server</option>
                    <option value="phone-data">Phone / tablet</option>
                    <option value="forensics">Digital forensics</option>
                    <option value="emergency">Emergency / after-hours</option>
                    <option value="other">Other / not sure</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="urgency"
                  className="block text-xs md:text-sm font-medium"
                >
                  How urgent is this?
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  defaultValue="normal"
                >
                  <option value="normal">Normal (within a few days)</option>
                  <option value="soon">Soon (within 24–48 hours)</option>
                  <option value="critical">Critical (immediate / deadline)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium"
                >
                  What happened &amp; what data is important?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Example: external HDD fell from desk, now makes clicking sounds. I need project files and accounting data from last 2 years..."
                />
              </div>

              <p className="text-[11px] md:text-xs text-muted-foreground">
                By submitting this form you agree that we may contact you about
                this case using the details provided. Your information is kept
                confidential and used only for assisting with your request.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Submit enquiry
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <aside className="space-y-6">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="text-sm md:text-base font-semibold mb-2">
                Other ways to reach us
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground mb-3">
                Prefer a direct call or message? Use the details below.
              </p>
              <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Phone:</span>{" "}
                  +254 7xx xxx xxx
                </p>
                <p>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  info@datarevivelabs.co.ke
                </p>
                <p>
                  <span className="font-medium text-foreground">Location:</span>{" "}
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="text-sm md:text-base font-semibold mb-2">
                If this is an emergency
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground mb-2">
                Mention that your case is urgent and describe any deadlines or
                impact you&apos;re facing. This helps us prioritize correctly.
              </p>
              <ul className="space-y-1 text-[11px] md:text-xs text-muted-foreground">
                <li>• Stop using the affected device immediately</li>
                <li>• Note any error messages or unusual sounds</li>
                <li>• Avoid running &quot;repair&quot; tools or fresh installs</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HDD & SSD Data Recovery Services | Data Revive Labs Kenya",
  description:
    "Professional HDD and SSD data recovery services in Kenya. We recover data from failed, corrupted, formatted and physically damaged hard drives and solid-state drives.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/hdd-ssd",
  },
  openGraph: {
    title: "HDD & SSD Data Recovery Services | Data Revive Labs Kenya",
    description:
      "Lost data from your hard drive or SSD? Data Revive Labs provides secure, professional HDD and SSD data recovery services in Kenya.",
    url: "https://datarevivelabs.co.ke/services/hdd-ssd",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/services/hdd-ssd.png",
        width: 1024,
        height: 1536,
        alt: "HDD and SSD data recovery services at Data Revive Labs",
      },
    ],
    type: "article",
    locale: "en_KE",
  },
};

export default function HddSsdRecoveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full grid gap-8 md:grid-cols-2 md:items-center">
        {/* TEXT SIDE */}
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            HDD &amp; SSD DATA RECOVERY
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Dead drives.{" "}
            <span className="text-emerald-500">Recovered data.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            We recover lost data from desktop, laptop and external hard drives
            and SSDs affected by mechanical failure, corruption, formatting or
            accidental deletion.
          </p>
          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
            <li>• Mechanical HDD failures and bad sectors</li>
            <li>• SSD firmware, controller and wear-leveling issues</li>
            <li>• Formatted, deleted or RAW partitions</li>
            <li>• Water, fire or power-related damage</li>
          </ul>
          <div className="pt-3 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Book a free assessment
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground">
              No data, no fee* on most logical recovery cases.
            </p>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex items-center justify-center">
          <div className="relative w-[260px] h-[390px] md:w-[320px] md:h-[480px] rounded-3xl border bg-card shadow-lg overflow-hidden">
            <Image
              src="/services/hdd-ssd.png"
              alt="HDD and SSD data recovery illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
