export function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Data Revive Labs — Nairobi, Kenya.</p>
        <p className="mt-2">
          Call: +254 768 177 714 · Email: info@datarevivelabs.co.ke
        </p>
      </div>
    </footer>
  );
}
