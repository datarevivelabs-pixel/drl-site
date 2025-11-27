import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Data Revive Labs – Professional Data Recovery in Kenya",
  description:
    "Contact Data Revive Labs for professional HDD, SSD, RAID and phone data recovery in Kenya. Private lab, no walk-ins – device drop-off by appointment or courier.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Data Revive Labs",
  description:
    "Contact page for Data Revive Labs – professional data recovery lab serving Nairobi and Kenya.",
  url: "https://datarevivelabs.co.ke/contact",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://datarevivelabs.co.ke/contact",
  },
  about: {
    "@type": "LocalBusiness",
    name: "Data Revive Labs",
    areaServed: [
      {
        "@type": "City",
        name: "Nairobi",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KE",
        },
      },
      {
        "@type": "Country",
        name: "Kenya",
      },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+254768177714",
    availableLanguage: ["en", "sw"],
  },
};

const contactFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you accept walk-in clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. We operate a private data recovery lab that is not open to the public. All device drop-offs are by appointment or via courier so we can protect your media in a controlled, low-dust environment.",
      },
    },
    {
      "@type": "Question",
      name: "How do I send my device to you?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Start by contacting us via WhatsApp, call or the enquiry form. We will guide you on safe packaging and either book an appointment, arrange a local pickup in Nairobi, or accept a courier shipment from anywhere in Kenya.",
      },
    },
    {
      "@type": "Question",
      name: "Do I pay before you recover my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. We first perform a free evaluation and share the expected cost. You only pay once we have successfully recovered usable data, according to our 'no recovery, no payment' policy.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Basic cases normally take 24–72 hours after we receive your device. Complex or physically damaged drives may take longer depending on the severity and capacity. Emergency priority is available for urgent business cases.",
      },
    },
  ],
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Emergency strip */}
      <div className="w-full bg-emerald-700 text-white">
        <div className="container px-6 py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm">
          <p className="font-medium">
            Urgent data loss? Get priority data recovery support.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20have%20a%20data%20loss%20issue%20and%20need%20help."
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-3 py-1 text-xs md:text-sm font-medium hover:bg-white hover:text-emerald-700 transition"
            >
              WhatsApp a Technician
            </a>
            <a
              href="tel:+254768177714"
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-3 py-1 text-xs md:text-sm font-medium hover:bg-white hover:text-emerald-700 transition"
            >
              Call {`0768 177 714`}
            </a>
          </div>
        </div>
      </div>

      <div className="container px-6 py-16">
        {/* Header */}
        <section className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact Data Revive Labs
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Talk directly to a data recovery technician. We&apos;ll review your
            case, explain the risks and expected costs, then guide you on how to
            safely send in your device.
          </p>
          <p className="text-sm text-muted-foreground">
            We operate a{" "}
            <span className="font-semibold">private data recovery lab</span>{" "}
            that is not open to walk-in traffic. All device drop-offs are{" "}
            <span className="font-semibold">by appointment</span> or via{" "}
            <span className="font-semibold">courier/pickup</span> to protect
            your media from dust and unnecessary handling.
          </p>
        </section>

        {/* Main grid: contact methods + form */}
        <section className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 mb-16">
          {/* Left: contact methods */}
          <div className="space-y-8">
            {/* Fast contact options */}
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Fastest Ways to Reach Us
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use WhatsApp for quick screenshots, photos of the device label
                or error messages. For urgent business downtime, call directly.
              </p>

              <div className="flex flex-col gap-3">
                <div className="border rounded-lg p-4">
                  <p className="font-medium mb-1">WhatsApp (Recommended)</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Send a short description of the problem plus a photo of your
                    device or error screen.
                  </p>
                  <a
                    href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20have%20a%20data%20loss%20issue%20and%20need%20help."
                    className="inline-flex items-center justify-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-medium"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>

                <div className="border rounded-lg p-4">
                  <p className="font-medium mb-1">Call a Technician</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Explain what happened and we&apos;ll advise you on the
                    safest next step before you power on the device again.
                  </p>
                  <a
                    href="tel:+254768177714"
                    className="inline-flex items-center justify-center rounded-md border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-4 py-2 text-sm font-medium"
                  >
                    Call {`0768 177 714`}
                  </a>
                </div>

                <div className="border rounded-lg p-4">
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    For detailed cases or attachments, email us with as much
                    information as possible.
                  </p>
                  <a
                    href="mailto:info@datarevivelabs.co.ke"
                    className="text-sm font-medium text-emerald-700 hover:underline"
                  >
                    info@datarevivelabs.co.ke
                  </a>
                </div>
              </div>
            </div>

            {/* Service area / logistics */}
            <div>
              <h2 className="text-xl font-semibold mb-3">
                How Device Drop-Off & Delivery Works
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    Nairobi & surrounding:
                  </span>{" "}
                  we coordinate a scheduled drop-off or a local pickup after
                  your case is pre-assessed remotely.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Rest of Kenya:
                  </span>{" "}
                  ship via your preferred courier. We&apos;ll send packaging
                  instructions to minimize risk of further damage.
                </li>
                <li>
                  Our lab is{" "}
                  <span className="font-medium">
                    technician-only and not open to walk-ins
                  </span>{" "}
                  to keep the workspace controlled and low-dust.
                </li>
              </ul>
            </div>

            {/* Short reassurance block */}
            <div className="border rounded-lg p-4 bg-muted/40">
              <p className="font-medium mb-1">No Recovery, No Payment</p>
              <p className="text-sm text-muted-foreground">
                Once we receive your device, we perform a free evaluation. We
                only begin recovery work after you approve the quoted range. If
                we cannot recover usable data, you owe nothing.
              </p>
            </div>
          </div>

          {/* Right: enquiry form (static for now) */}
          <div className="border rounded-xl p-6 shadow-sm bg-background">
            <h2 className="text-lg font-semibold mb-4">
              Tell Us About Your Case
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Share a few details so we can estimate the difficulty, risk and
              likely price range. A technician will respond with next steps.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact (Phone or Email)
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="WhatsApp number or email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Device Type
                </label>
                <select className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select device</option>
                  <option>Internal HDD</option>
                  <option>External HDD</option>
                  <option>SSD / NVMe</option>
                  <option>Desktop / Laptop</option>
                  <option>Phone / Tablet</option>
                  <option>RAID / NAS / Server</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  What happened?
                </label>
                <textarea
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
                  placeholder="Example: drive started clicking, dropped external disk, phone not powering on, Windows stopped booting, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  City / Town (for logistics)
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Nairobi, Nakuru, Eldoret, Mombasa, etc."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-sm font-medium"
              >
                Submit Enquiry
              </button>

              <p className="text-[11px] text-muted-foreground mt-2">
                This form does not start any automatic work or charges. We first
                review your case and then confirm the next steps with you.
              </p>
            </form>
          </div>
        </section>

        {/* Micro FAQ */}
        <section className="max-w-4xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact & Logistics FAQ</h2>
          <div className="space-y-4 text-sm md:text-base">
            <div>
              <p className="font-medium">Why don&apos;t you allow walk-ins?</p>
              <p className="text-muted-foreground">
                Data recovery labs work best in quiet, controlled environments
                with minimal dust and interruption. Our lab is technician-only,
                so all cases are pre-arranged via call, WhatsApp or email to
                protect your device and your privacy.
              </p>
            </div>

            <div>
              <p className="font-medium">Do you have a shop in Nairobi CBD?</p>
              <p className="text-muted-foreground">
                No, we are not a general computer repair shop. We operate as a
                specialized data recovery lab serving Nairobi and the rest of
                Kenya through scheduled drop-offs and courier shipments.
              </p>
            </div>

            <div>
              <p className="font-medium">
                How should I package my drive or device?
              </p>
              <p className="text-muted-foreground">
                Power it off, do not open the casing, and avoid shaking it. Wrap
                the device in anti-static or clean plastic, then cushion it with
                soft material (foam, bubble wrap, or cloth) inside a firm box.
                We&apos;ll send you detailed packaging instructions once we
                review your case.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />
    </main>
  );
}
