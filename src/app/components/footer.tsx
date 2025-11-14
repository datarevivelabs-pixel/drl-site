import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        {/* Left side – text */}
        <div className="text-xs md:text-sm text-muted-foreground">
          <p>© 2025 Data Revive Labs — Nairobi, Kenya.</p>
          <p>Call: +254 7xx xxx xxx · Email: info@datarevivelabs.co.ke</p>
        </div>

        {/* Right side – socials */}
        <div className="flex flex-col items-start gap-2 md:items-end">
          <p className="text-xs text-muted-foreground">Follow Data Revive Labs</p>
          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com/datarevivelabs"
              target="_blank"
              aria-label="Data Revive Labs on Facebook"
            >
              <img
                src="/social/facebook.png"
                alt="Facebook"
                className="h-7 w-7 hover:opacity-80 transition"
              />
            </Link>

            <Link
              href="https://x.com/datarevivelabs"
              target="_blank"
              aria-label="Data Revive Labs on X"
            >
              <img
                src="/social/x.png"
                alt="X"
                className="h-7 w-7 hover:opacity-80 transition"
              />
            </Link>

            <Link
              href="https://www.tiktok.com/@datarevivelabs"
              target="_blank"
              aria-label="Data Revive Labs on TikTok"
            >
              <img
                src="/social/tiktok.png"
                alt="TikTok"
                className="h-7 w-7 hover:opacity-80 transition"
              />
            </Link>

            <Link
              href="https://instagram.com/datarevivelabs"
              target="_blank"
              aria-label="Data Revive Labs on Instagram"
            >
              <img
                src="/social/instagram.png"
                alt="Instagram"
                className="h-7 w-7 rounded-lg hover:opacity-80 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
