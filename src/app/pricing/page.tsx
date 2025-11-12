const tiers = [
  {
    name: "Standard",
    price: "KSh 12,000 – 25,000",
    desc: "Most desktop/laptop recoveries in 2–5 days.",
    points: ["Free evaluation", "No data — no fee", "Encrypted delivery options"],
    cta: { label: "Book Free Evaluation", href: "/book" },
  },
  {
    name: "Express",
    badge: "Popular",
    price: "KSh 25,000 – 50,000",
    desc: "Priority bench time, faster turnaround (24–48h).",
    points: ["Senior engineer priority", "Progress updates", "Optional cleanroom work"],
    cta: { label: "Chat on WhatsApp", href: "https://wa.me/2547XXXXXXX" },
    accent: true,
  },
  {
    name: "Emergency 24/7",
    price: "KSh 50,000+",
    desc: "After-hours response & same-day pickup (Nairobi).",
    points: ["Immediate triage", "On-site pickup available", "Signed NDA on request"],
    cta: { label: "Call Now", href: "tel:+2547XXXXXXX" },
  },
];

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Pricing</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">
        Free evaluation. Final quote depends on device type, fault, parts, and urgency.
        You only pay if we recover the data you approve.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name}
               className={`rounded-2xl border bg-card p-6 shadow-card ${t.accent ? "ring-1 ring-accent" : ""}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{t.name}</h2>
              {t.badge && <span className="rounded-full bg-accent/15 px-2 py-1 text-xs font-medium">{t.badge}</span>}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <p className="mt-4 text-lg font-bold">{t.price}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {t.points.map((p) => (
                <li key={p} className="flex gap-2"><span>•</span><span>{p}</span></li>
              ))}
            </ul>
            <a className={`mt-6 inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium ${
                t.accent ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
              }`} href={t.cta.href}>
              {t.cta.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
