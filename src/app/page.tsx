import Link from "next/link";

const services = [
  {
    href: "/services/hdd-ssd",
    title: "HDD & SSD Recovery",
    desc: "Dead drives, firmware faults, deletion/formatting.",
    img: "hdd-ssd.png",
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
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        {/* Soft overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/95 -z-10" />

        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-500 mb-3">
              Nairobi • Kenya-wide service
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance text-center md:text-left">
              We bring your lost data back to life.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-center md:text-left">
              Professional data recovery for individuals, SMEs, and NGOs across
              Kenya. HDD/SSD, RAID/NAS, phones, and digital forensics — handled
              with strict confidentiality.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base sm:text-lg font-medium text-white shadow-md hover:bg-emerald-700 hover:shadow-lg transition"
              >
                Book Free Evaluation
              </Link>

              <a
                href="https://wa.me/2547XXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-8 py-3 text-base sm:text-lg font-medium text-emerald-700 bg-white/80 backdrop-blur hover:bg-emerald-50 transition"
              >
                WhatsApp Now
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              Average diagnostic time:{" "}
              <span className="font-semibold text-foreground">3-6 hours</span>.
              Emergency 24/7 available.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Featured services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
                Fast, confidential recovery for the most common data-loss
                scenarios.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block rounded-2xl border bg-card shadow-sm hover:shadow-lg transition overflow-hidden h-full"
              >
                {/* Service image */}
                <div
                  className="aspect-[4/3] bg-center bg-cover group-hover:scale-[1.03] transition-transform duration-300"
                  style={{
                    backgroundImage: `url('/services/${s.img}')`,
                    backgroundColor: "hsl(210 20% 96%)",
                  }}
                />

                <div className="p-5 sm:p-6 flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-1 text-xs font-medium text-emerald-600 group-hover:translate-x-1 transition">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-background">
        <div className="container mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center sm:text-left">
            How it works
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "Free Evaluation",
                desc: "You drop off or we collect the device. We diagnose and share a fixed quote. No data — no fee.",
              },
              {
                n: 2,
                title: "In-Lab Recovery",
                desc: "Engineers perform recovery in a controlled lab. Priority handling for business-critical cases.",
              },
              {
                n: 3,
                title: "Secure Delivery",
                desc: "You review sample files, then we transfer to a new drive. Optional encryption for sensitive data.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border bg-card p-5 sm:p-6 shadow-sm"
              >
                <div className="h-8 w-8 rounded-full bg-emerald-600 text-white grid place-items-center text-sm font-semibold">
                  {step.n}
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Ready to start a recovery?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                Free evaluation. You only pay if we recover the data you approve.
                Same-day pickup available within Nairobi.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/book"
                className="flex-1 sm:flex-none inline-flex justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm sm:text-base font-medium text-white shadow hover:bg-emerald-700"
              >
                Book Free Evaluation
              </Link>
              <a
                href="https://wa.me/2547XXXXXXX"
                className="flex-1 sm:flex-none inline-flex justify-center rounded-lg border border-emerald-600 px-5 py-3 text-sm sm:text-base font-medium text-emerald-700 bg-white/80 backdrop-blur hover:bg-emerald-50"
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
