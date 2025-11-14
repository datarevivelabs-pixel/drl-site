"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      {/* DESKTOP HEADER */}
      <div className="container mx-auto max-w-6xl px-4 py-3 hidden md:flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="DRL Logo"
            width={110}
            height={110}
            className="rounded-lg"
            priority
          />

          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-gray-900">
              Data Revive Labs
            </span>
            <span className="text-sm text-gray-500 -mt-1">
              Data Recovery • Nairobi
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="flex gap-6 text-base font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
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
          className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
        >
          WhatsApp
        </a>
      </div>

      {/* MOBILE HEADER */}
      <div className="container mx-auto max-w-6xl px-4 py-3 flex md:hidden items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="DRL Logo"
            width={80}
            height={80}
            className="rounded-lg"
            priority
          />
        </Link>

        <a
          href="https://wa.me/254768177714"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-emerald-700 transition"
        >
          WhatsApp
        </a>
      </div>

      {/* MOBILE NAV BAR */}
      <nav className="container mx-auto max-w-6xl px-4 pb-2 flex md:hidden gap-6 overflow-x-auto text-sm">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                active
                  ? "text-emerald-600 font-bold whitespace-nowrap"
                  : "text-gray-600 hover:text-gray-900 whitespace-nowrap"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
