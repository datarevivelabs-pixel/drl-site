// src/app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Data Revive Labs | Data Recovery Specialists in Nairobi",
  description:
    "Learn about Data Revive Labs, a Nairobi-based data recovery lab helping individuals, SMEs and NGOs across Kenya with professional data recovery and digital forensics.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        About Data Revive Labs
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        Data Revive Labs is a Nairobi-based data recovery and digital forensics
        lab serving clients across Kenya. We combine specialised tools with
        careful processes to give your data the best possible chance of being
        recovered.
      </p>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Our clients include individuals, SMEs, NGOs and professional services
        firms who rely on us to handle sensitive information discreetly. We
        follow a &quot;no data, no fee&quot; approach on eligible recoveries so
        that you only pay when we succeed.
      </p>
    </section>
  );
}
