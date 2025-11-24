"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PHONE_DISPLAY = "+254 768 177 714";
const PHONE_TEL = "+254768177714";
const WHATSAPP_TEL = "254768177714";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container flex h-24 items-center justify-between gap-8">
        {/* BIG LOGO + BRAND */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Data Revive Labs logo"
            width={220}
            height={80}
            priority
            className="h-20 w-auto rounded-xl shadow-sm"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Data Revive Labs
            </span>
            <span className="text-sm md:text-base text-muted-foreground">
              Data Recovery • Nairobi
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/"
            className={
              isActive("/")
                ? "font-semibold text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="text-muted-foreground hover:text-foreground"
          >
            Services
          </Link>

          <Link
            href="/pricing"
            className={
              isActive("/pricing")
                ? "font-semibold text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className={
              isActive("/about")
                ? "font-semibold text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            About
          </Link>

          <Link
            href="/contact"
            className={
              isActive("/contact")
                ? "font-semibold text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            Contact
          </Link>
        </nav>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-5 py-2.5 text-xs md:text-sm font-medium text-emerald-700 hover:bg-emerald-50"
          >
            Call: {PHONE_DISPLAY}
          </Link>
          <Link
            href={`https://wa.me/${WHATSAPP_TEL}`}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-xs md:text-sm font-medium text-white shadow-md shadow-emerald-600/40 hover:bg-emerald-700"
          >
            WhatsApp
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-xs font-medium md:hidden"
        >
          Menu
        </button>
      </div>

      {/* MOBILE NAV + BUTTONS */}
      {open && (
        <nav className="border-t bg-background md:hidden">
          <div className="container flex flex-col gap-2 py-3 text-sm">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={
                isActive("/")
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className={
                isActive("/pricing")
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={
                isActive("/about")
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={
                isActive("/contact")
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Contact
            </Link>

            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href={`tel:${PHONE_TEL}`}
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-emerald-600 px-4 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Call: {PHONE_DISPLAY}
              </Link>
              <Link
                href={`https://wa.me/${WHATSAPP_TEL}`}
                target="_blank"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-medium text-white shadow-md shadow-emerald-600/40 hover:bg-emerald-700"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
