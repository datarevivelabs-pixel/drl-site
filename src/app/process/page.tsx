import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Data Recovery Process | Data Revive Labs",
  description:
    "See how Data Revive Labs handles your data recovery case from first contact to final handover. Clear steps, realistic expectations and transparent communication.",
};

const steps = [
  {
    step: "01",
    title: "Initial contact & case overview",
    description:
      "You tell us what happened, what device is affected and which data matters most. We use this to understand urgency and the likely type of failure.",
    details: [
      "Call, WhatsApp or contact form – whichever is easiest for you",
      "We ask a few focused questions to avoid further damage",
      "If needed, we schedule a time for you to bring or send the device",
    ],
  },
  {
    step: "02",
    title: "Diagnostics & feasibility",
    description:
      "We examine the device to understand whether the failure is logical, physical or a mix of both, and how realistic recovery is.",
    details: [
      "Non-invasive checks to avoid making things worse",
      "For drives, we look at SMART data, noises, power-up behaviour",
      "For phones, we check boot behaviour, storage health and model-specific factors",
    ],
  },
  {
    step: "03",
    title: "Quote & approval",
    description:
      "After diagnostics we give you a clear, written estimate: expected success range, cost bracket and timelines. You decide whether to proceed.",
    details: [
      "Transparent pricing based on device type and failure",
      "No surprise add-ons – any special parts or tools are explained upfront",
      "For many logical cases, no-recovery-no-fee on the recovery work",
    ],
  },
  {
    step: "04",
    title: "Recovery work in the lab",
    description:
      "We perform the actual recovery work using a mix of hardware and software tools, depending on the case.",
    details: [
      "Where possible, we clone the media first and work on the copy",
      "We stabilize failing drives before heavy access",
      "We rebuild file systems, partitions or arrays as needed",
    ],
  },
  {
    step: "05",
    title: "Verification of recovered data",
    description:
      "We don’t just recover ‘blocks’ – we check that critical folders and files open and make sense.",
    details: [
      "You can request screenshots or a file/folder listing",
      "We confirm key formats: documents, photos, archives, databases etc.",
      "If something essential is missing, we can attempt deeper passes where safe",
    ],
  },
  {
    step: "06",
    title: "Handover & secure cleanup",
    description:
      "We copy recovered data to a new drive or transfer method you choose, and securely wipe our working copies after handover.",
    details: [
      "Data is returned on a new external drive or your own media",
      "For smaller sets, secure online transfer may be possible",
      "Lab copies are wiped on a defined schedule after delivery",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
            HOW WE HANDLE YOUR CASE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            A clear{" "}
            <span className="text-emerald-500">data recovery process</span>{" "}
            from first call to final handover.
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Data loss is stressful. Our job is to make the process simple to
            understand: clear steps, realistic expectations and honest
            communication so you always know where things stand.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
            >
              Talk to us about a case
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground">
              No obligation to proceed after diagnostics.
            </p>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-5xl space-y-8">
          <div className="grid gap-6 md:gap-8">
            {steps.map((step) => (
              <article
                key={step.step}
                className="relative overflow-hidden rounded-2xl border bg-card p-5 md:p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white md:h-10 md:w-10">
                      {step.step}
                    </span>
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Step
                    </span>
                  </div>

                  <div className="space-y-2 md:space-y-3 flex-1">
                    <h2 className="text-sm md:text-lg font-semibold">
                      {step.title}
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {step.description}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-[11px] md:text-xs text-muted-foreground">
                      {step.details.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4 border-t pt-8 text-center space-y-3">
            <p className="text-xs md:text-sm text-muted-foreground">
              Not sure which step you&apos;re at? Just tell us what happened
              and we&apos;ll guide you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
              >
                Contact Data Revive Labs
              </Link>
              <Link
                href="/services/hdd-ssd"
                className="text-xs md:text-sm text-emerald-700 underline-offset-4 hover:underline"
              >
                See HDD &amp; SSD recovery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
