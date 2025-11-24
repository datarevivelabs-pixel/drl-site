import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-6 py-6 md:flex-row md:items-start md:justify-between">
        {/* Left side – text */}
        <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Data Revive Labs — Nairobi, Kenya.</p>
          <p>
            Call:{" "}
            <span className="font-medium text-foreground">+254 768 177 714</span>{" "}
            · Email:{" "}
            <a
              href="mailto:info@datarevivelabs.co.ke"
              className="underline-offset-2 hover:underline"
            >
              info@datarevivelabs.co.ke
            </a>
          </p>
          <p className="text-[11px] md:text-xs">
            We help individuals, businesses and institutions recover critical
            data from HDDs, SSDs, RAID/NAS, phones and more.
          </p>
        </div>

        {/* Right side – links + socials */}
        <div className="flex flex-col items-start gap-3 md:items-end">
          {/* Quick links */}
          <div className="flex flex-wrap gap-3 text-[11px] md:text-xs text-muted-foreground">
            <Link
              href="/faq"
              className="underline-offset-2 hover:underline text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/process"
              className="underline-offset-2 hover:underline text-foreground"
            >
              Our process
            </Link>
            <Link
              href="/contact"
              className="underline-offset-2 hover:underline text-foreground"
            >
              Contact
            </Link>
          </div>

          {/* Socials */}
          <div className="space-y-1 text-xs md:text-sm text-muted-foreground">
            <p>Find us online:</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://facebook.com/yourpage"
                className="underline-offset-2 hover:underline text-emerald-600"
                target="_blank"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com/yourpage"
                className="underline-offset-2 hover:underline text-emerald-600"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                href="https://wa.me/254768177714"
                className="underline-offset-2 hover:underline text-emerald-600"
                target="_blank"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
