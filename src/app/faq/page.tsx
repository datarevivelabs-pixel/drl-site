import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Data Revive Labs",
  description:
    "Frequently asked questions about data recovery services at Data Revive Labs in Nairobi: pricing, timelines, success rates and how the process works.",
};

export default function FaqPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Questions about{" "}
            <span className="text-emerald-500">data recovery?</span> Start here.
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Here are answers to the most common questions people ask us before
            and during a data recovery case. If you don&apos;t see your
            question, you can always contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          <div className="space-y-4 text-xs md:text-sm">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                How much does data recovery cost?
              </h2>
              <p className="text-muted-foreground">
                Pricing depends on the type of device, the failure type, the
                capacity and the urgency. After diagnostics we provide a clear,
                no-obligation quote before you decide whether to proceed.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                Do you charge if you can&apos;t recover any data?
              </h2>
              <p className="text-muted-foreground">
                For many logical failure cases we follow a &quot;no data, no
                fee&quot; approach on the recovery work itself. Complex physical
                or emergency cases may have diagnostic or lab fees; this is
                always explained upfront.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                How long does the recovery process take?
              </h2>
              <p className="text-muted-foreground">
                Standard cases can take from 2–5 working days after diagnostics.
                More complex cases may take longer. For critical situations we
                offer emergency handling where possible.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                Is my data kept private and confidential?
              </h2>
              <p className="text-muted-foreground">
                Yes. We treat all data as confidential. Only the engineers
                working on your case access the media, and working copies are
                securely wiped after the recovery is completed and handed over.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                Should I keep trying to turn the device on?
              </h2>
              <p className="text-muted-foreground">
                Generally, no. If the device is making unusual noises, fails to
                mount, or keeps crashing, repeated attempts can make things
                worse. It&apos;s usually safer to power it off and contact a
                recovery lab for advice.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center space-y-3">
            <p className="text-xs md:text-sm text-muted-foreground">
              Still have questions? We&apos;re happy to talk through your specific
              situation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Contact Data Revive Labs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
