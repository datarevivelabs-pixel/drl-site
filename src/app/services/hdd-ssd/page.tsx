import Link from "next/link";

export default function HddSsdPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO / INTRO */}
      <section className="border-b bg-muted/40">
        <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] items-center">
            {/* Text side */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-emerald-600 uppercase mb-3">
                Data Revive Labs • Nairobi
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                HDD &amp; SSD Data Recovery
              </h1>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                Failed hard drive? Clicking, not detected, or accidentally formatted? 
                We help individuals, SMEs, and NGOs across Kenya recover critical data 
                from damaged HDD and SSD drives — safely and confidentially.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  className="inline-flex justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm md:text-base font-medium text-white shadow hover:bg-emerald-700 transition"
                >
                  Book Free Evaluation
                </Link>
                <a
                  href="https://wa.me/254768177714"
                  className="inline-flex justify-center rounded-full border border-emerald-600 px-6 py-2.5 text-sm md:text-base font-medium text-emerald-700 bg-white hover:bg-emerald-50 transition"
                >
                  WhatsApp a Technician
                </a>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                No data, no fee • Typical diagnosis in 3–6 hours • Emergency 24/7 option available
              </p>
            </div>

            {/* Side info card */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm text-sm space-y-3">
              <h2 className="text-base font-semibold">Common drive symptoms we handle</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Drive not detected in BIOS / Windows</li>
                <li>Clicking, beeping, or grinding sounds</li>
                <li>Accidental deletion or formatting</li>
                <li>Water / fire / impact damage</li>
                <li>Slow or freezing when opening files</li>
              </ul>
              <div className="pt-2 border-t text-xs text-muted-foreground">
                <span className="font-semibold text-emerald-700">
                  Important:
                </span>{" "}
                If your drive is clicking loudly, <span className="font-semibold">switch it off</span> immediately to 
                avoid further damage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE CAN RECOVER */}
      <section>
        <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What we can recover
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
            From home laptops to multi-disk desktop drives, we work with most major brands and models used in Kenya.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3 text-sm">
            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <h3 className="font-semibold mb-2 text-emerald-700">HDD (Hard Drives)</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Laptop &amp; desktop drives</li>
                <li>External USB drives</li>
                <li>Bad sectors &amp; firmware issues</li>
                <li>Deleted / formatted partitions</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <h3 className="font-semibold mb-2 text-emerald-700">SSD &amp; NVMe</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Internal SATA / NVMe SSDs</li>
                <li>External portable SSDs</li>
                <li>Wear-leveling / controller issues</li>
                <li>Corrupted or lost volumes</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <h3 className="font-semibold mb-2 text-emerald-700">File types</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Business documents &amp; databases</li>
                <li>Photos, videos &amp; design files</li>
                <li>Accounting &amp; backup archives</li>
                <li>Email &amp; project data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted/40 border-y">
        <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Our HDD &amp; SSD recovery process
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3 text-sm">
            {[
              {
                step: "1. Intake & Evaluation",
                text: "You drop off the drive or we arrange courier / rider pickup (Nairobi). We log the device and perform a non-invasive diagnosis.",
              },
              {
                step: "2. Quote & Approval",
                text: "We share a fixed quote and estimated timeframe. If you don’t approve, you can pick up your device — no recovery fee.",
              },
              {
                step: "3. Recovery & Delivery",
                text: "We perform recovery in-lab, then share sample files for you to confirm. Payment is only due for successful recoveries.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border bg-card p-4 shadow-sm">
                <h3 className="font-semibold mb-2">{item.step}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>

          <div className="mt-6 space-y-5 text-sm md:text-base">
            <div className="border-b pb-4">
              <h3 className="font-semibold">
                How much does HDD or SSD recovery cost?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Pricing depends on the type of failure (logical vs physical), drive capacity, 
                and how urgently you need the data. We provide a clear quote after diagnosis — 
                and you only pay if we recover the data you approve.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold">
                Can you recover from a drive that has been opened before?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Drives that have been opened outside a clean environment are much riskier to work on, 
                but we assess each case individually. If another shop has already attempted a recovery, 
                let us know exactly what was done.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-semibold">
                How long does data recovery take?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Simple logical cases can be completed within 24–48 hours. Complex physical or firmware 
                cases may take several days. For business-critical cases, we offer an emergency 24/7 
                option with priority handling.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is my data kept confidential?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Yes. We treat all client data as strictly confidential, follow chain-of-custody practices, 
                and can sign NDAs for sensitive corporate or NGO work. Recovered data is securely wiped from 
                our systems after handover.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-10 rounded-2xl border bg-card p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Ready to have your drive evaluated?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Free evaluation. No recovery, no fee. Same-day intake available in Nairobi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="inline-flex justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-700 transition"
              >
                Book Free Evaluation
              </Link>
              <a
                href="tel+254768177714"
                className="inline-flex justify-center rounded-full border border-emerald-600 px-6 py-2.5 text-sm font-medium text-emerald-700 bg-white hover:bg-emerald-50 transition"
              >
                Call Our Lab
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
