// src/app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Data Revive Labs | Nairobi Data Recovery",
  description:
    "Contact Data Revive Labs for data recovery and digital forensics in Kenya. Phone +254 768 177 714 or email info@datarevivelabs.co.ke.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        Contact Data Revive Labs
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        Reach out for a free evaluation or to discuss a potential recovery or
        forensics case. We serve clients across Kenya from our base in Nairobi.
      </p>

      <div className="mt-6 space-y-2 text-sm">
        <p>
          Phone:&nbsp;
          <a href="tel:+254768177714" className="underline">
            +254 768 177 714
          </a>
        </p>
        <p>
          WhatsApp:&nbsp;
          <a
            href="https://wa.me/254768177714"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Chat on WhatsApp
          </a>
        </p>
        <p>
          Email:&nbsp;
          <a href="mailto:info@datarevivelabs.co.ke" className="underline">
            info@datarevivelabs.co.ke
          </a>
        </p>
      </div>
    </section>
  );
}
