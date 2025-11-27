import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Data Recovery Nairobi | HDD, SSD & Phone Data Recovery – Data Revive Labs",
  description:
    "Professional data recovery in Nairobi for HDD, SSD, external drives, RAID and phones. Private data recovery lab, no walk-ins – device drop-off by appointment or courier.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/nairobi-data-recovery",
  },
};

const nairobiJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Recovery Nairobi",
  description:
    "Professional hard drive, SSD, RAID and phone data recovery service for clients in Nairobi and across Kenya.",
  provider: {
    "@type": "LocalBusiness",
    name: "Data Revive Labs",
    url: "https://datarevivelabs.co.ke",
    areaServed: {
      "@type": "City",
      name: "Nairobi",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KE",
      },
    },
  },
  areaServed: {
    "@type": "City",
    name: "Nairobi",
  },
  serviceType: [
    "HDD data recovery",
    "SSD data recovery",
    "External drive data recovery",
    "Phone and tablet data recovery",
    "RAID and NAS data recovery",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you have a data recovery shop in Nairobi CBD?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Data Revive Labs operates as a private data recovery laboratory serving Nairobi and the rest of Kenya. We are not a general computer repair shop in the CBD. All device drop-offs are scheduled by appointment or shipped via courier.",
      },
    },
    {
      "@type": "Question",
      name: "How do I send my device from Nairobi to your lab?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Start by contacting us via WhatsApp, call or the enquiry form. We pre-assess your case, then arrange a scheduled drop-off or pickup in Nairobi, or guide you on how to package and ship your device safely.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recover data from a dead or clicking hard drive?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, many clicking or non-detecting hard drives can be recovered using specialist tools and safe imaging procedures. The most important step is to power the drive off and avoid repeated attempts, then contact us as soon as possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer emergency data recovery for Nairobi businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. For urgent business cases in Nairobi, we offer priority handling, extended hours and faster evaluation. Contact us by phone or WhatsApp and mention that it is an emergency business case.",
      },
    },
  ],
};

export default function NairobiDataRecovery() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-background to-emerald-50/40">
        <div className="container px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-2">
              Nairobi · Kenya
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Professional Data Recovery in Nairobi
            </h1>
            <p className="text-lg text-muted-foreground mb-5">
              Hard drive stopped working? SSD no longer detected? Phone won&apos;t
              power on? Data Revive Labs provides specialist data recovery for
              clients in Nairobi and across Kenya from a private, technician-only
              laboratory.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              No walk-ins. Device drop-offs are by appointment or via courier so
              we can protect your media in a controlled, low-dust environment.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20am%20in%20Nairobi%20and%20have%20a%20data%20loss%20issue."
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 text-sm font-medium"
              >
                WhatsApp a Technician
              </a>
              <a
                href="tel:+254768177714"
                className="inline-flex items-center justify-center rounded-md border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-2.5 text-sm font-medium"
              >
                Call 0768 177 714
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium underline-offset-4 hover:underline"
              >
                Go to Contact Page
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we recover */}
      <section className="container px-6 py-16">
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Data Recovery Services for Nairobi Clients
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            We help individuals, small businesses and organizations in Nairobi
            recover critical data from failing or damaged storage devices. Every
            case is evaluated by a technician and handled using safe imaging
            and extraction procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="border rounded-xl p-5 shadow-sm bg-background">
            <h3 className="font-semibold mb-2">Hard Drives (HDD)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Internal and external HDDs</li>
              <li>• Clicking or non-detecting drives</li>
              <li>• Deleted or formatted partitions</li>
              <li>• Drives that make unusual noises</li>
            </ul>
          </div>
          <div className="border rounded-xl p-5 shadow-sm bg-background">
            <h3 className="font-semibold mb-2">SSDs & NVMe</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• SATA SSD and NVMe M.2</li>
              <li>• Not detected or very slow</li>
              <li>• Firmware and controller issues</li>
              <li>• Failed OS upgrades or crashes</li>
            </ul>
          </div>
          <div className="border rounded-xl p-5 shadow-sm bg-background">
            <h3 className="font-semibold mb-2">Phones & RAID</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Phones with broken screens</li>
              <li>• Water or physical damage</li>
              <li>• RAID / NAS / server arrays</li>
              <li>• Small business storage systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why a private lab */}
      <section className="bg-muted/40 border-y">
        <div className="container px-6 py-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Private Data Recovery Lab, Not a Shop
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-3">
                Unlike general computer repair shops in Nairobi CBD, Data Revive
                Labs operates as a dedicated data recovery laboratory. Our
                workspace is technician-only and not open to walk-in traffic.
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                This allows us to keep a cleaner environment, control who
                handles your media, and focus fully on safe imaging and
                extraction instead of general repairs.
              </p>
            </div>
            <div className="border rounded-lg p-5 bg-background shadow-sm text-sm">
              <h3 className="font-semibold mb-2">
                What This Means for Nairobi Clients
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Cases are pre-arranged by{" "}
                  <span className="font-medium text-foreground">
                    WhatsApp, call or form
                  </span>
                </li>
                <li>
                  Device drop-off is by{" "}
                  <span className="font-medium text-foreground">
                    appointment or courier
                  </span>
                </li>
                <li>
                  No crowded shop environment or random handling
                </li>
                <li>
                  Your data is handled directly by a{" "}
                  <span className="font-medium text-foreground">
                    data recovery technician
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process & pricing */}
      <section className="container px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              How the Process Works
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">
                  Step 1 – Contact us:
                </span>{" "}
                WhatsApp, call or use the contact form to describe what
                happened, what type of device it is, and what data you need
                back.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Step 2 – Safe device transfer:
                </span>{" "}
                We guide you on packaging and arrange a scheduled drop-off or
                courier from Nairobi or anywhere in Kenya.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Step 3 – Free evaluation:
                </span>{" "}
                We examine the device and estimate the difficulty, risk and
                success chances.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Step 4 – Quote & approval:
                </span>{" "}
                You receive a cost range based on the case type. We only proceed
                with your approval.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Step 5 – Recovery & verification:
                </span>{" "}
                We attempt recovery, verify the result, and prepare your data
                for delivery on new media or via secure transfer.
              </li>
            </ol>
          </div>

          <div className="border rounded-xl p-6 shadow-sm bg-background text-sm md:text-base">
            <h2 className="text-xl font-semibold mb-3">
              Transparent Pricing for Nairobi Clients
            </h2>
            <p className="text-muted-foreground mb-3">
              Prices depend on device type, failure mode and urgency. As a
              guideline:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-3">
              <li>Basic logical cases: from KSh 8,500</li>
              <li>Advanced / failing devices: from KSh 20,000</li>
              <li>Critical / emergency or complex RAID: from KSh 55,000+</li>
            </ul>
            <p className="text-muted-foreground mb-3">
              We follow a{" "}
              <span className="font-medium text-foreground">
                &quot;no recovery, no payment&quot;
              </span>{" "}
              policy. If we cannot provide usable files, you don&apos;t pay the
              recovery fee.
            </p>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-medium"
            >
              View Detailed Pricing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 border-t">
        <div className="container px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Nairobi Data Recovery – FAQ
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">
                  Are you located inside Nairobi CBD?
                </p>
                <p>
                  No. We are not a CBD shop or cyber café. Data Revive Labs is a
                  dedicated data recovery lab that serves Nairobi and the rest
                  of Kenya via scheduled drop-offs and courier shipments, not
                  walk-in traffic.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  Can I still use your service if I&apos;m outside Nairobi?
                </p>
                <p>
                  Yes. Many of our cases are shipped from other towns in Kenya.
                  We guide you on how to package and send your device safely via
                  courier, then return your recovered data once the work is
                  complete.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  What should I do right now if my drive has just failed?
                </p>
                <p>
                  Power the device off, avoid repeated restarts or software
                  scans, and contact us as soon as possible. The less you try,
                  the better the chances of a successful recovery.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%27m%20in%20Nairobi%20and%20need%20data%20recovery%20help."
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 text-sm font-medium"
              >
                WhatsApp From Nairobi
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-input px-6 py-2.5 text-sm font-medium hover:bg-background"
              >
                Use Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nairobiJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
