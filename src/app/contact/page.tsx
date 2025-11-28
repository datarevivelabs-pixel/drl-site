// src/app/contact/page.tsx
export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="container py-12 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Contact</h1>

        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Talk directly to a data recovery technician. We&apos;ll help you decide
          the safest next step for your drive, phone or server.
        </p>

        <div className="space-y-2 text-sm md:text-base text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Phone:</span>{" "}
            <a
              href="tel:+254768177714"
              className="underline decoration-emerald-600 decoration-2 underline-offset-4 hover:text-emerald-700"
            >
              +254 768 177 714
            </a>
          </p>

          <p>
            <span className="font-medium text-foreground">Email:</span>{" "}
            <a
              href="mailto:info@datarevivelabs.co.ke"
              className="underline hover:text-emerald-700"
            >
              info@datarevivelabs.co.ke
            </a>
          </p>

          <p>
            <span className="font-medium text-foreground">WhatsApp:</span>{" "}
            <a
              className="underline text-emerald-700 hover:text-emerald-800"
              href="https://wa.me/254768177714"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat now on WhatsApp
            </a>
          </p>

          <p>
            <span className="font-medium text-foreground">Location:</span>{" "}
            Private data recovery lab in Nairobi (no walk-ins). We coordinate
            scheduled drop-off or Kenya-wide courier.
          </p>
        </div>

        <p className="mt-8 text-xs md:text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Important:</span> Do not
          keep powering on a failing drive or phone. Switch it off and contact
          us first – this often increases the chance of a successful recovery.
        </p>
      </section>
    </main>
  );
}
