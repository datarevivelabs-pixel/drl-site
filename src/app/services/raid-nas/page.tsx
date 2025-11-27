import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAID, NAS & Server Data Recovery | Data Revive Labs Nairobi",
  description:
    "Professional RAID, NAS and server data recovery in Nairobi, Kenya. RAID rebuild failures, NAS outages, multi-disk crashes and virtual machine recovery.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/raid-nas",
  },
};

export default function RaidNasRecoveryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO / INTRO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* TEXT SIDE */}
          <div className="space-y-4">
            <p className="text-[11px] md:text-xs tracking-[0.25em] text-emerald-500 uppercase">
              SERVICES • RAID / NAS / SERVER
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              RAID, NAS &amp; server data recovery for{" "}
              <span className="text-emerald-500">business-critical systems</span>.
            </h1>

            <p className="text-sm md:text-base text-muted-foreground">
              We recover data from failed RAID arrays, NAS appliances and
              servers used by SMEs, NGOs and teams across Kenya. Whether it’s a
              failed rebuild, multiple disk failures or a corrupted volume, our
              goal is to get you back online with minimal downtime.
            </p>

            <ul className="grid gap-2 text-xs md:text-sm text-muted-foreground">
              <li>• Failed RAID rebuilds and degraded arrays</li>
              <li>• Multiple disk failures in RAID 0/1/5/6/10 and more</li>
              <li>• Corrupted NAS volumes and accidental reinitialisation</li>
              <li>• Virtual machine and hypervisor datastore issues</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Speak to a recovery engineer
              </Link>
              <Link
                href="/services/emergency"
                className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
              >
                After-hours emergency support →
              </Link>
            </div>

            <p className="text-[11px] md:text-xs text-muted-foreground">
              For live outages, avoid repeated rebuild attempts or filesystem
              checks. These can make a bad situation worse—contact us first.
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-3xl border bg-card overflow-hidden shadow-lg">
              <Image
                src="/services/raid-nas.png"
                alt="RAID and NAS data recovery for servers and multi-disk arrays"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 220px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Common RAID &amp; NAS failure scenarios
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>
                • A second disk fails while the array is rebuilding from a
                previous failure.
              </li>
              <li>
                • Someone accidentally pulls the wrong drive during maintenance
                or hot-swap.
              </li>
              <li>
                • NAS firmware updates cause the volume to disappear or show as
                &quot;uninitialized&quot;.
              </li>
              <li>
                • Power problems or surges corrupt a RAID controller or
                filesystem.
              </li>
              <li>
                • A virtualisation host (VMware, Hyper-V, Proxmox, etc.) loses
                access to its datastore.
              </li>
            </ul>

            <p className="text-xs md:text-sm text-muted-foreground">
              In these situations, every rebuild attempt, disk swap or filesystem
              repair can further damage the data. Power the system down safely
              and contact us before making changes.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              How our RAID &amp; NAS recovery works
            </h2>
            <ol className="space-y-2 text-xs md:text-sm text-muted-foreground list-decimal list-inside">
              <li>
                We gather details of your setup: RAID level, number of disks,
                make/model of NAS or controller, and symptoms.
              </li>
              <li>
                All member disks are cloned sector-by-sector using write-blocked
                hardware to preserve their original state.
              </li>
              <li>
                We analyse the array metadata and reconstruct the virtual volume
                layout in a controlled environment.
              </li>
              <li>
                Once the volume is mounted safely, we extract your critical data
                to new storage.
              </li>
              <li>
                You validate the recovered files, then we hand over the data and
                provide advice on safer future configurations.
              </li>
            </ol>

            <p className="text-xs md:text-sm text-muted-foreground">
              We work with arrays from common NAS brands (Synology, QNAP, Dell,
              HP and more) as well as custom-built servers and DAS units.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t bg-muted/40 py-8 md:py-10">
        <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold">
              Facing a RAID, NAS or server outage?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Tell us what happened and we&apos;ll advise the safest path to
              get your data and systems back.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Request RAID/NAS help
            </Link>
            <Link
              href="https://wa.me/254768177714"
              target="_blank"
              className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
              WhatsApp an engineer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
