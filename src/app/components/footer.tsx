"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background mt-12">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">

        {/* LEFT — COPYRIGHT & LOCATION */}
        <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          <p>© {new Date().getFullYear()} Data Revive Labs — Kenya.</p>
          <p>Private data recovery laboratory. No walk-ins.</p>
        </div>

        {/* RIGHT — NAVIGATION */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-sm">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <Link href="/pricing" className="hover:text-emerald-600">Pricing</Link>
          <Link href="/faq" className="hover:text-emerald-600">FAQ</Link>
          <Link href="/contact" className="hover:text-emerald-600">Contact</Link>

          {/* 🔥 NEW SEO POWER LINK */}
          <Link
            href="/nairobi-data-recovery"
            className="hover:text-emerald-600 font-medium"
          >
            Nairobi Data Recovery
          </Link>
        </nav>
      </div>
    </footer>
  );
}
