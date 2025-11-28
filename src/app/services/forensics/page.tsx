import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "../../components/ui/cta";

export const metadata: Metadata = {
  title: "Digital Forensics & Evidence Recovery | Data Revive Labs Kenya",
  description:
    "Digital forensics support in Kenya: data extraction, evidence preservation and timeline reconstruction for phones, drives and servers. Technician-only lab, chain-of-custody focused.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/services/forensics",
  },
};

export default function ForensicsRecovery() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background to-emerald-50/40">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-600 mb-2">
              DIGITAL FORENSICS
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Digital Forensics &amp; Evidence Recovery
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              We help legal teams, organisations and individuals extract, secure
              and analyse digital evidence from phones, computers, drives and
              storage systems in a controlled lab environment.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Our focus is on careful preservation, structured extraction and
              clear reporting &mdash; not general I.T. support or informal
              &quot;hacking&quot; services.
            </p>

            <div className="flex flex-wrap gap-3">
              <CTA href="/contact" size="lg">
                Enquire about a forensics case
              </CTA>
              <CTA
                href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20have%20a%20digital%20forensics%20or%20evidence%20case."
                variant="outline"
                size="md"
              >
                WhatsApp a technician
              </CTA>
            </div>

            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              When you contact us, avoid sharing sensitive details over chat.
              We&apos;ll guide you on the safest way to proceed.
            </p>
          </div>

          <div className="relative h-56 md:h-72 lg:h-80 w-full">
            <Image
              src="/services/forensics.png"
              alt="Digital forensics and evidence analysis in Kenya"
              fill
              className="rounded-2xl object-cover shadow-md"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="container px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Types of Digital Forensics Work We Support
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Every matter is different, but these are common areas where digital
            forensics can assist.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base text-muted-foreground">
          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Mobile device evidence
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>WhatsApp and SMS communication history</li>
              <li>Call logs and contact lists</li>
              <li>Location traces and device usage timelines</li>
              <li>Photos, videos and file metadata</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Computer &amp; storage analysis
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Activity timelines on laptops and desktops</li>
              <li>Removable media and external drive usage</li>
              <li>Selected file recovery and verification</li>
              <li>System event and log review</li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm">
            <p className="font-semibold text-foreground mb-2">
              Incident &amp; dispute support
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Internal policy or HR investigations</li>
              <li>Business disputes where data is key</li>
              <li>Selected support for legal and regulatory matters</li>
              <li>Preservation of data for potential court use</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LAB APPROACH & CHAIN OF CUSTODY */}
      <section className="bg-muted/40 border-y">
        <div className="container px-6 py-12 md:py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Lab-Based, Evidence-Focused Approach
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Our work is carried out in a technician-only lab where we control
              who handles evidence and how it is accessed. The primary goals are
              to preserve integrity and document what was done.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                Prefer imaging over working on original media wherever possible.
              </li>
              <li>
                Use structured methods instead of ad-hoc &quot;testing&quot; or random
                tools.
              </li>
              <li>
                Focus on extracting what is necessary to answer specific
                questions.
              </li>
              <li>
                Maintain internal notes on procedures used and observations
                made.
              </li>
            </ul>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              Chain of Custody &amp; Handling
            </h2>
            <p className="mb-3">
              Good digital forensics depends on clear handling and documentation.
              While we are not a law firm, we aim to support your chain-of-custody
              needs by:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Recording when devices or media are received and returned.</li>
              <li>Keeping devices in a controlled lab environment.</li>
              <li>
                Using write-blocking or imaging where appropriate to reduce
                changes to original media.
              </li>
              <li>
                Providing summaries of what was requested and what processes
                were followed.
              </li>
            </ul>
            <p className="mt-3">
              Your legal team or advisor should guide how our work and reports
              are incorporated into a broader case strategy.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS & SCOPE LIMITS */}
      <section className="container px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Typical Digital Forensics Workflow
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Scoping:</span>{" "}
                we discuss the matter with you or your representative and agree
                on what needs to be examined.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Intake &amp; preservation:
                </span>{" "}
                devices are received, labelled and stored; imaging starts where
                relevant.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Targeted extraction:
                </span>{" "}
                we focus on specific apps, time ranges, conversations or file
                types.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Analysis &amp; timeline building:
                </span>{" "}
                data is organised into timelines or structured findings where
                appropriate.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Reporting &amp; handover:
                </span>{" "}
                results are summarised and provided along with any agreed media
                copies.
              </li>
            </ol>
          </div>

          <div className="border rounded-xl p-5 bg-background shadow-sm text-sm md:text-base text-muted-foreground">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              Scope, Limitations &amp; Pricing
            </h2>
            <p className="mb-3">
              Every case is unique. Some key points to understand:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We do <span className="font-medium text-foreground">not</span>{" "}
                provide legal advice or act as your legal representative.
              </li>
              <li>
                We focus on technical extraction and analysis, working with your
                lawyer or advisor where applicable.
              </li>
              <li>
                Certain encrypted or locked devices may have limited recovery
                options, even with full consent.
              </li>
              <li>
                Pricing depends on device types, volume of data and analysis
                depth needed.
              </li>
            </ul>
            <p className="mt-3">
              For many straightforward extraction-only tasks, pricing is similar
              to advanced recovery cases. Complex, long-running analysis work is
              quoted individually.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <CTA href="/pricing" size="md">
                View general pricing ranges
              </CTA>
              <CTA href="/contact" variant="outline" size="sm">
                Discuss a specific forensics matter
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container px-6 pb-12 md:pb-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Need help preserving or examining digital evidence?
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Reach out to a data recovery technician and we&apos;ll help you
          understand what may be possible from the devices or media you have.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <CTA href="/contact" size="lg">
            Enquire about digital forensics
          </CTA>
          <CTA
            href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20have%20a%20digital%20forensics%20case."
            variant="outline"
            size="md"
          >
            WhatsApp about a forensics case
          </CTA>
        </div>
      </section>
    </main>
  );
}
