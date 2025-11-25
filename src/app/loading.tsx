export default function Loading() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="h-10 w-10 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
        <div className="space-y-1">
          <p className="text-sm font-medium">Loading Data Revive Labs…</p>
          <p className="text-xs text-muted-foreground">
            Please wait a moment while we prepare this page.
          </p>
        </div>
      </div>
    </main>
  );
}
