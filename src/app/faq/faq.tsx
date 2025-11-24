import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Data Revive Labs",
  description:
    "Frequently asked questions about data recovery services at Data Revive Labs: pricing, timelines, success rates and how the process works.",
  alternates: {
    canonical: "https://datarevivelabs.co.ke/faq",
  },
  openGraph: {
    title: "FAQ | Data Revive Labs",
    description:
      "Answers to common questions about our data recovery process, pricing, timelines and what to do after data loss.",
    url: "https://datarevivelabs.co.ke/faq",
    siteName: "Data Revive Labs",
    type: "article",
    locale: "en_KE",
  },
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
            and during a data recovery case. If you don&apos;t see your question,
            you can always contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-8">
          <div className="space-y-4 text-xs md:text-sm">
            {/* Q1 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                How much does data recovery cost?
              </h2>
              <p className="text-muted-foreground">
                Pricing depends on several factors: the type of device (HDD,
                SSD, RAID, phone), the failure type (logical vs physical), the
                capacity and the urgency. After diagnostics we provide a clear,
                no-obligation quote before you decide whether to proceed.
              </p>
            </div>

            {/* Q2 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                Do you charge if you can&apos;t recover any data?
              </h2>
              <p className="text-muted-foreground">
                For many logical failure cases (for example, deleted files or
                corrupted file systems), we follow a &quot;no data, no fee&quot; approach
                on the recovery work itself. Complex physical or emergency cases
                may have diagnostic or lab fees; this is always explained
                upfront.
              </p>
            </div>

            {/* Q3 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                How long does the recovery process take?
              </h2>
              <p className="text-muted-foreground">
                Standard cases can take from 2–5 working days after diagnostics.
                More complex cases (for example, severe mechanical damage or
                multi-disk RAID failures) may take longer. For critical
                situations we offer emergency handling where possible.
              </p>
            </div>

            {/* Q4 */}
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

            {/* Q5 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                Should I keep trying to turn the device on?
              </h2>
              <p className="text-muted-foreground">
                Generally, no. If the device is making unusual noises, fails to
                mount, or keeps crashing, repeated attempts can make things
                worse. It&apos;s usually safer to power it off and contact a
                recovery lab for advice before doing anything else.
              </p>
            </div>

            {/* Q6 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                Can you recover data from phones that don&apos;t power on?
              </h2>
              <p className="text-muted-foreground">
                In many cases, yes. Depending on the specific damage and the
                device model, we may be able to access the memory chip or
                storage subsystem even when the phone itself won&apos;t boot
                normally. Each case needs diagnostics to confirm feasibility.
              </p>
            </div>

            {/* Q7 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                What should I bring when I bring in my device?
              </h2>
              <p className="text-muted-foreground">
                For external drives, bring the drive and its original USB cable
                or power adapter. For desktops or servers, you can often bring
                only the drives, not the whole machine. For laptops and phones,
                bring the full device and any unlock codes if needed.
              </p>
            </div>

            {/* Q8 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                Do you clone my drive or work on the original?
              </h2>
              <p className="text-muted-foreground">
                Wherever possible we create a sector-by-sector clone (image) of
                your media first and perform recovery attempts on the clone. The
                original is preserved as much as the condition allows. This
                reduces the risk of further damage during the process.
              </p>
            </div>

            {/* Q9 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                How do you return recovered data?
              </h2>
              <p className="text-muted-foreground">
                Typically we copy the recovered files to a new external drive
                or other media you provide or purchase through us. For smaller
                recoveries, secure online transfer options may also be
                available.
              </p>
            </div>

            {/* Q10 */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold mb-1 md:text-base text-sm">
                I&apos;m not sure what failed—can I still contact you?
              </h2>
              <p className="text-muted-foreground">
                Absolutely. You don&apos;t need to have a technical diagnosis.
                Simply describe what you were doing when the problem started,
                what the device is doing now, and what data matters most. We&apos;ll
                guide you on the safest next steps.
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
