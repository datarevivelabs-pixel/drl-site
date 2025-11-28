export function EmergencyBanner() {
  return (
    <div className="w-full bg-emerald-700 text-white">
      <div className="container px-6 py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm">
        <div>
          <p className="font-semibold uppercase tracking-wide text-xs md:text-sm">
            Emergency Data Recovery
          </p>
          <p className="text-xs md:text-sm opacity-90">
            For urgent cases (business servers, critical documents, same-day
            needs) we offer priority 24/7 handling.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:items-center">
          <a
            href="https://wa.me/254768177714?text=Hi%20Data%20Revive%20Labs%2C%20I%20need%20emergency%20data%20recovery."
            className="inline-flex items-center justify-center rounded-md border border-white/70 px-4 py-1.5 text-xs font-medium hover:bg-white hover:text-emerald-700"
          >
            WhatsApp 24/7
          </a>
          <a
            href="tel:+254768177714"
            className="inline-flex items-center justify-center rounded-md bg-white text-emerald-700 px-4 py-1.5 text-xs font-semibold hover:bg-emerald-50"
          >
            Call 0768 177 714
          </a>
        </div>
      </div>
    </div>
  );
}
