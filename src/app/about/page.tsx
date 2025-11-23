import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Data Revive Labs | Professional Data Recovery in Kenya",
  description:
    "Learn about Data Revive Labs, a professional data recovery company in Kenya helping individuals, businesses and institutions recover critical data securely and confidentially.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/about",
  },
  openGraph: {
    title: "About Data Revive Labs | Data Recovery Experts in Kenya",
    description:
      "Data Revive Labs provides professional, secure and confidential data recovery services for HDDs, SSDs, RAID/NAS, phones and more.",
    url: "https://datarevivelabs.co.ke/about",
    siteName: "Data Revive Labs",
    type: "article",
    locale: "en_KE",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            ABOUT DATA REVIVE LABS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            A dedicated{" "}
            <span className="text-emerald-500">data recovery lab</span> for
            people, businesses and institutions in Kenya.
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Data Revive Labs exists to solve one of the most stressful problems
            in modern life: losing important data. From personal memories to
            business-critical systems, we help you recover what matters using
            professional tools, structured processes and a focus on security.
          </p>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="border-b py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Who we work with
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                Individuals &amp; families
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Photos, videos, school work and personal files lost on laptops,
                external drives or phones — often with no backup in place.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                Businesses &amp; SMEs
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Accounting data, customer records, project files and servers
                that keep day-to-day operations running smoothly.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                Institutions &amp; teams
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Schools, NGOs, creative teams and professional firms that rely
                on digital storage for records, media and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              How we approach every recovery
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Behind every failed hard drive or phone is a story — a business
              depending on files, or a person worried about losing irreplaceable
              memories. We treat each case with the urgency and care it
              deserves.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>• Non-destructive diagnostics before any recovery attempt</li>
              <li>• Clear communication on chances, risks and expectations</li>
              <li>• Secure handling and storage of all media and recovered data</li>
              <li>• Wiping of working copies after successful handover</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="text-sm md:text-base font-semibold">
              Our typical process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>
                Initial conversation to understand what happened and what data
                is important.
              </li>
              <li>
                Physical or remote intake of the device for diagnostics where
                appropriate.
              </li>
              <li>
                Detailed assessment and quotation before any recovery is
                started.
              </li>
              <li>
                Recovery attempts using appropriate tools for the failure type.
              </li>
              <li>
                Verification of recovered data and handover on new media or
                agreed channel.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What you can expect from us
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                Honest communication
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                We don&apos;t promise what the technology cannot deliver. You get
                realistic assessments and transparent updates at each stage.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                Confidential handling
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Your data may be sensitive, personal or regulated. We treat it
                accordingly, with controlled access and secure workflows.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                Continuous improvement
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Storage technology changes fast. We actively refine our methods,
                tools and internal playbooks to keep up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Talk to us about a current loss — or how to prevent the next one.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Whether you&apos;re in the middle of a data loss incident or planning
            better backup and resilience, we&apos;re happy to share options and
            next steps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
          >
            Contact Data Revive Labs
          </Link>
        </div>
      </section>
    </main>
  );
}
