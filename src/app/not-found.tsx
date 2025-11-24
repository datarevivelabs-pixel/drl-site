import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        <p className="text-xs font-semibold tracking-[0.25em] text-emerald-500 uppercase">
          404 • PAGE NOT FOUND
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold">
          Looks like this page is missing.
        </h1>

        <p className="text-sm md:text-base text-muted-foreground">
          The link you followed may be broken, or the page may have been moved.
          If you were looking for data recovery help, you can go back home or
          contact us directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
          >
            Back to home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-600 px-6 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
          >
            Contact Data Revive Labs
          </Link>
        </div>

        <p className="text-[11px] md:text-xs text-muted-foreground">
          If you think this is an error, you can let us know which link you
          clicked when this appeared.
        </p>
      </div>
    </main>
  );
}
