import Link from "next/link";

export default function Page() {
  const items = [
    { href: "/services/hdd-ssd", title: "HDD & SSD Recovery", desc: "Mechanical, firmware, deleted/formatted." },
    { href: "/services/raid-nas", title: "RAID / NAS / Server", desc: "RAID 0/1/5/6/10, NAS, VMware/Hyper-V." },
    { href: "/services/phone-data", title: "Phone Data Recovery", desc: "Android/iPhone, photos, WhatsApp." },
    { href: "/services/forensics", title: "Digital Forensics", desc: "Chain of custody, reports, evidence." },
    { href: "/services/emergency", title: "Emergency 24/7", desc: "Same-day pickup, after-hours help." },
  ];

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
      <p className="mt-2 text-muted-foreground">Certified, confidential recovery across Kenya.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="block rounded-2xl border bg-card p-6 shadow-card hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{it.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
