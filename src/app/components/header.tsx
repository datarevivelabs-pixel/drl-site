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
        {/* Logo + company name */}
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-emerald-600 text-white font-bold text-lg">
            DRL
          </div>
          <div className="flex flex-col leading-tight overflow-hidden">
            <span className="font-semibold text-sm sm:text-base truncate">
              Data Revive Labs{" "}
            </span>
            <span className="text-[11px] text-muted-foreground truncate">
              Data Recovery • Nairobi
            </span>
          </div>
        </Link>

        {/* Navigation – now visible on ALL screen sizes */}
        <nav className="flex items-center gap-3 text-xs sm:text-sm overflow-x-auto max-w-[50%] sm:max-w-none">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-emerald-600 font-semibold"
                    : "text-muted-foreground hover:text-foreground transition"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/2547XXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-emerald-600 px-3 py-1.5 text-xs sm:text-sm font-medium text-white shadow hover:bg-emerald-700 transition whitespace-nowrap"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
