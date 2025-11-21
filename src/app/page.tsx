"use client";

import Link from "next/link";
import Script from "next/script";

// =======================
// SEO JSON-LD: Business
// =======================
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Data Revive Labs",
  url: "https://www.datarevivelabs.co.ke",
  telephone: "+254768177714",
  sameAs: [
    "https://facebook.com/DataReviveLabs",
    "https://x.com/DataReviveLabs",
    "https://www.tiktok.com/@datarevivelabs",
    "https://instagram.com/datarevivelabs",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nairobi CBD",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi",
    postalCode: "00100",
    addressCountry: "KE",
  },
  description:
    "Data Revive Labs offers professional HDD, SSD, phone, laptop, RAID/NAS, forensics, and emergency data recovery services in Nairobi, Kenya.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

// =======================
// SEO JSON-LD: FAQ
// =======================
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does data recovery cost in Kenya?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Pricing depends on the device, the cause of failure, and how urgent your case is. Data Revive Labs performs a free diagnosis first, then provides a clear quote before starting any recovery work.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the data recovery process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Simple logical cases can often be recovered within 24 to 48 hours, while physically damaged drives and complex RAID or NAS systems may take several days.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data kept private and confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. All cases are handled under strict confidentiality. Only authorised engineers can access your data.",
      },
    },
    {
      "@type": "Question",
      name: "Should I keep using my device after data loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Continued use can overwrite lost data and reduce recovery success. Power it off and bring it in immediately.",
      },
    },
  ],
};

export default function Home() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* JSON-LD SCRIPTS */}
      <Script
        id="business-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center min-h-[80vh] overflow-hidden">
        <div className="container px-6 text-foreground">
          <p className="tracking-[0.25em] text-xs md:text-sm text-emerald-600 mb-4">
            NAIROBI • KENYA-WIDE SERVICE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
            We bring your lost data back to life.
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional data recovery for individuals, SMEs, and NGOs across
            Kenya. HDD/SSD, RAID/NAS, phones, and digital forensics — handled
            with strict confidentiality.
          </p>

          {/* ONLY CONTACT BUTTON */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-600 text-white px-8 py-3 text-lg font-medium shadow hover:scale-105 transition"
            >
              Book Free Evaluation
            </Link>
          </div>

          {/* SCROLL FOR SERVICES – green, smaller, not too bold */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={scrollToServices}
              className="text-base md:text-lg font-medium text-emerald-600 hover:text-emerald-700 transition"
            >
              Scroll for services
            </button>

            <span className="text-emerald-600 text-2xl font-bold animate-bounce">
              ▼
            </span>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Average diagnostic time:{" "}
            <span className="font-semibold">3–6 hours</span>. Emergency{" "}
            <span className="font-semibold">24/7</span> available.
          </p>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section id="services">
        <div className="container py-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Featured services
          </h2>
          <p className="text-muted-foreground mt-2">
            Fast, confidential help for the most common cases.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/services/hdd-ssd",
                title: "HDD & SSD Recovery",
                desc: "Dead drives, firmware faults, deletion/formatting.",
                img: "hdd-sdd.png",
              },
              {
                href: "/services/raid-nas",
                title: "RAID / NAS / Server",
                desc: "RAID 0/1/5/6/10, NAS units, VMware/Hyper-V.",
                img: "raid-nas.png",
              },
              {
                href: "/services/phone-data",
                title: "Phone Data Recovery",
                desc: "Android/iPhone — photos, WhatsApp, contacts.",
                img: "phone-data.png",
              },
              {
                href: "/services/forensics",
                title: "Digital Forensics",
                desc: "Chain of custody, reports, evidence handling.",
                img: "forensics.png",
              },
              {
                href: "/services/emergency",
                title: "Emergency 24/7",
                desc: "After-hours triage, same-day Nairobi pickup.",
                img: "emergency.png",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block rounded-2xl border bg-card shadow-card hover:shadow-lg transition overflow-hidden"
              >
                <div
                  className="h-44 bg-center bg-cover bg-[length:110%] group-hover:bg-[length:115%] transition"
                  style={{
                    backgroundImage: `url('/services/${s.img}')`,
                    backgroundColor: "hsl(210 20% 96%)",
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="container pb-16">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "Free Evaluation",
                desc: "We diagnose the issue and share a fixed quote. No data — no fee.",
              },
              {
                n: 2,
                title: "Recovery",
                desc: "Engineers perform recovery in-lab. Progress updates if urgent.",
              },
              {
                n: 3,
                title: "Delivery",
                desc: "Verify sample files; pay only if satisfied. Encrypted handover available.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border bg-card p-6 shadow-card"
              >
                <div className="h-8 w-8 rounded-full bg-emerald-600 text-white grid place-items-center font-semibold">
                  {step.n}
                </div>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t bg-white">
        <div className="container px-6 py-10 space-y-6">
          <div>
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-[0.15em]">
              FAQ
            </p>
            <h2 className="mt-1 text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl">
              Answers to common questions clients ask when they experience data
              loss in Nairobi and across Kenya.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">
                1. How much does data recovery cost in Kenya?
              </h3>
              <p className="mt-1.5 text-gray-600 text-sm">
                Pricing depends on the device and cause of failure. We start
                with a free evaluation, then give a clear quote.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">
                2. How long will the data recovery process take?
              </h3>
              <p className="mt-1.5 text-gray-600 text-sm">
                Simple cases 24–48 hours, complex RAID/NAS several days.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">
                3. Is my data private?
              </h3>
              <p className="mt-1.5 text-gray-600 text-sm">
                Yes. All cases handled confidentially by authorised engineers.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">
                4. Should I keep using my device?
              </h3>
              <p className="mt-1.5 text-gray-600 text-sm">
                No. Using it can overwrite lost data. Turn it off and bring it
                in ASAP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="container pb-20">
          <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-card flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Ready to start?</h3>
              <p className="text-sm text-muted-foreground">
                Free evaluation. You only pay if we recover approved data.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-emerald-600 text-white px-5 py-3 shadow-sm"
              >
                Book Free Evaluation
              </Link>

              <a
                href="https://wa.me/254768177714"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-amber-500 text-white px-5 py-3 shadow-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
