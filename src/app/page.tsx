import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center text-center min-h-[80vh] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/hero.png')" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/90 -z-10" />

        <div className="container px-6 text-foreground">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
            We bring your lost data back to life.
          </h1>

          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional data recovery for individuals, SMEs, and NGOs across Kenya.
            HDD/SSD, RAID/NAS, phones, and digital forensics — handled with strict confidentiality.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/book"
              className="rounded-full bg-primary text-primary-foreground px-8 py-3 text-lg font-medium shadow hover:scale-105 transition"
            >
              Book Free Evaluation
            </a>

            <a
              href="https://wa.me/2547XXXXXXX"
              target="_blank"
              className="rounded-full bg-accent text-accent-foreground px-8 py-3 text-lg font-medium shadow hover:scale-105 transition"
            >
              WhatsApp Now
            </a>
          </div>

          {/* ⭐ IMPROVED SCROLL HINT */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="text-base md:text-lg font-semibold text-emerald-500 drop-shadow">
              Scroll for services
            </span>
            <span className="animate-bounce text-4xl text-emerald-500 drop-shadow">
              ▾
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section>
        <div className="container py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Featured services</h2>
          <p className="text-muted-foreground mt-2">
            Fast, confidential help for the most common cases.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block rounded-2xl border bg-card shadow-card hover:shadow-lg transition overflow-hidden"
              >
                <div
                  className="h-44 bg-center bg-cover group-hover:scale-[1.03] transition-transform"
                  style={{ backgroundImage: `url('/services/${s.img}')` }}
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
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
                <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground grid place-items-center font-semibold">
                  {step.n}
                </div>

                <h3 className="mt-3 font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
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
                href="/book"
                className="rounded-lg bg-primary text-primary-foreground px-5 py-3 shadow-sm"
              >
                Book Free Evaluation
              </Link>

              <a
                href="https://wa.me/254768177714"
                className="rounded-lg bg-accent text-accent-foreground px-5 py-3 shadow-sm"
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
