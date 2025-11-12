"use client";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Data Revive Labs" width={300} height={70} priority />
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link
            href="/book"
            className="rounded-lg bg-primary text-primary-foreground px-3 py-2 shadow-sm"
          >
            Book Free Evaluation
          </Link>
        </nav>
      </div>
    </header>
  );
}
