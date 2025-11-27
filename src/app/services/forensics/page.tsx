import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Forensics & Evidence Recovery | Data Revive Labs Nairobi",
  description:
    "Digital forensics services in Nairobi, Kenya. Evidence preservation, timeline analysis, deleted file recovery and expert reports for legal, HR and internal investigations.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/forensics",
  },
};

export default function ForensicsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO / INTRO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* TEXT SIDE */}
          <div className="space-y-4">
            <p className="text-[11px] md:text-xs tracking-[0.25em] text-emerald-500 uppercase">
              SERVICES • DIGITAL FORENSICS
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Digital forensics for{" "}
              <span className="text-emerald-500">investigations &amp; disputes</span>.
            </h1>

            <p className="text-sm md:text-base text-muted-foreground">
              We provide digital forensics support for legal teams, HR
              departments, auditors and private clients across Kenya. Our focus
              is on preserving evidence correctly, analysing activity and
              presenting findings in a clear, defensible way.
            </p>

            <ul className="grid gap-2 text-xs md:text-sm text-muted-foreground">
              <li>• Evidence collection from laptops, phones and servers</li>
              <li>• Timeline reconstruction and user activity analysis</li>
              <li>• Recovery of deleted files, logs and communications</li>
              <li>• Expert reports for court, HR and internal use</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Discuss a forensics case
              </Link>
              <Link
                href="https://wa.me/254768177714"
                target="_blank"
                className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
              >
                Confidential WhatsApp enquiry →
              </Link>
            </div>

            <p className="text-[11px] md:text-xs text-muted-foreground">
              We recommend contacting us before devices are powered on,
              reformatted or examined by non-specialists to avoid contaminating
              evidence.
            </p>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex items-center justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-3xl border bg-card overflow-hidden shadow-lg">
              <Image
                src="/services/forensics.png"
                alt="Digital forensics and evidence analysis services in Nairobi, Kenya"
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
              Typical digital forensics scenarios
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Suspected data theft by a departing employee</li>
              <li>• Internal fraud, misuse of company systems or policy breaches</li>
              <li>• Investigating harassment, blackmail or online threats</li>
              <li>• Verifying authenticity of documents, emails or messages</li>
              <li>• Assisting legal teams with electronic disclosure (e-discovery)</li>
            </ul>

            <p className="text-xs md:text-sm text-muted-foreground">
              Every case is different. We start by understanding your objectives
              and the questions that need answers, then plan a forensically-sound
              approach that preserves integrity while focusing on relevant data.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              How our digital forensics process works
            </h2>
            <ol className="space-y-2 text-xs md:text-sm text-muted-foreground list-decimal list-inside">
              <li>
                We consult with you to understand the incident, timeline and
                any legal or HR context.
              </li>
              <li>
                Devices and accounts are identified, secured and imaged using
                forensically-sound methods.
              </li>
              <li>
                We examine file systems, logs, communications and other artefacts
                to answer defined questions.
              </li>
              <li>
                Findings are documented with clear timelines, screenshots and
                where needed, chain-of-custody details.
              </li>
              <li>
                We provide a written report and, if required, can brief your
                legal or HR team on the technical aspects.
              </li>
            </ol>

            <p className="text-xs md:text-sm text-muted-foreground">
              We work discreetly and can coordinate with your existing legal
              counsel or investigators. Our role is to provide accurate,
              technically-sound evidence and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t bg-muted/40 py-8 md:py-10">
        <div className="container mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm md:text-base font-semibold">
              Need discreet digital forensics support?
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Reach out with a brief description of the situation and we&apos;ll
              advise on safe next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Start a confidential enquiry
            </Link>
            <Link
              href="https://wa.me/254768177714"
              target="_blank"
              className="inline-flex items-center rounded-full border border-emerald-600 px-4 py-2 text-xs md:text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
              WhatsApp a quick question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
