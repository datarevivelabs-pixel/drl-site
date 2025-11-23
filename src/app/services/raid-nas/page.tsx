import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAID & NAS Data Recovery | Multi-disk Server Recovery Kenya",
  description:
    "Professional RAID, NAS and server data recovery in Kenya. Failed RAID rebuilds, NAS outages, corrupted arrays, enterprise storage and VMware.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/raid-nas",
  },
  openGraph: {
    title: "RAID, NAS & Server Data Recovery | Data Revive Labs Kenya",
    description:
      "We recover mission-critical data from failed RAID/NAS systems and multi-disk servers. Secure, enterprise-grade procedures.",
    url: "https://datarevivelabs.co.ke/services/raid-nas",
    siteName: "Data Revive Labs",
    images: [
      {
        url: "/services/raid-nas.png",
        width: 1200,
        height: 630,
        alt: "RAID NAS Server Recovery",
      },
    ],
    locale: "en_KE",
    type: "article",
  },
};

export default function RaidNasRecoveryPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
              RAID / NAS / SERVER RECOVERY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Enterprise-grade{" "}
              <span className="text-emerald-500">multi-disk recovery</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              We recover mission-critical data from damaged NAS systems, failed
              RAID rebuilds and server arrays. From RAID0 to RAID60, our methods
              protect your original disks while reconstructing the array safely.
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• RAID 0/1/5/6/10</li>
              <li>• Synology/QNAP</li>
              <li>• VMware/Hyper-V</li>
              <li>• Logical rebuilds</li>
              <li>• Hardware failures</li>
              <li>• Failed migrations</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Consult an engineer
            </Link>
          </div>

          <div className="relative mx-auto max-w-sm border bg-card shadow-lg rounded-2xl overflow-hidden">
            <Image
              src="/services/raid-nas.png"
              alt="RAID NAS Data Recovery"
              width={800}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-b py-12 md:py-16">
        <div className="container mx-auto px-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why enterprise clients choose Data Revive Labs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2">Non-destructive imaging</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                We clone each member disk block-by-block before attempting
                reconstruction—no risky live rebuilds on damaged media.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2">
                Virtual RAID reconstruction
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                We rebuild arrays digitally using metadata, parity maps and
                disk order analysis. Zero damage to originals.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="font-semibold mb-2">Encrypted data handling</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                All data is processed confidentially. Drives are wiped after
                delivery of recovered data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WARNINGS */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Stop immediately if:
            </h2>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>• A rebuild fails or hangs</li>
              <li>• 2+ disks drop out of the array</li>
              <li>• NAS OS becomes inaccessible</li>
              <li>• Migration completes with “empty volume”</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-sm space-y-2">
            <h3 className="font-semibold md:text-base text-sm">
              Never do this
            </h3>
            <ul className="text-xs md:text-sm text-muted-foreground space-y-2">
              <li>✗ Don&apos;t reinitialize the array</li>
              <li>✗ Don&apos;t reinstall NAS OS on same disks</li>
              <li>✗ Don&apos;t shuffle disk order</li>
              <li>✗ Don&apos;t format &quot;NEW VOLUME&quot;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container px-6 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your RAID is down — we’ll bring it back safely.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
          >
            Start RAID recovery
          </Link>
        </div>
      </section>
    </main>
  );
}
