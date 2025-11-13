"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-3">
        {/* Logo + company name (always visible, even on phones) */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-emerald-600 text-white font-bold text-lg">
            DRL
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm sm:text-base">
              Data Revive Labs{" "}
            </span>
            <span className="text-[11px] text-muted-foreground hidden sm:block">
              Data Recovery • Nairobi
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex items-center gap-4 text-sm">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-emerald-600 font-medium"
                    : "text-muted-foreground hover:text-foreground transition"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp button (visible on all screens) */}
        <a
          href="https://wa.me/254768177714"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1.5 text-xs sm:text-sm font-medium text-white shadow hover:bg-emerald-700 transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
