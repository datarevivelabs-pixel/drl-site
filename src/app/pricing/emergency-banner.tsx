// src/components/emergency-banner.tsx

export function EmergencyBanner() {
  return (
    <div className="w-full bg-emerald-700 text-white">
      <div className="container px-6 py-3 flex flex-col gap-2 items-start justify-between text-sm md:flex-row md:items-center">
        <div>
          <p className="font-semibold uppercase tracking-wide text-xs md:text-sm">
            Emergency Data Recovery
          </p>
          <p className="text-xs md:text-sm opacity-90">
            For urgent cases (business servers, critical documents, same-day needs) we offer
            priority 24/7 handling.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:items-center">
          {/* TODO: Replace the text below with your actual preferred contact method/number */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/60 px-4 py-2 text-xs md:text-sm font-medium hover:bg-white hover:text-emerald-700 transition"
          >
            Request Emergency Help
          </a>
        </div>
      </div>
    </div>
  );
}
