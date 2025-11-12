"use client";

export function FabWhatsApp() {
  const phone = "254768177714"; // ← replace with your full number (no +)

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 pointer-events-none">
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-4 py-3 shadow-lg
                   bg-[#25D366] text-white hover:brightness-95 focus:outline-none focus:ring-2
                   focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#25D366] transition"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        {/* WhatsApp icon (SVG) */}
        <svg
          width="22" height="22" viewBox="0 0 32 32" aria-hidden="true"
          className="drop-shadow"
        >
          <path fill="currentColor" d="M19.11 17.31c-.3-.15-1.76-.87-2.03-.97c-.27-.1-.47-.15-.67.15c-.2.3-.77.97-.95 1.17c-.17.2-.35.22-.65.07c-.3-.15-1.28-.47-2.44-1.5c-.9-.8-1.51-1.78-1.69-2.08c-.17-.3-.02-.46.13-.61c.13-.13.3-.35.45-.52c.15-.17.2-.3.3-.5c.1-.2.05-.37-.02-.52c-.07-.15-.67-1.62-.92-2.22c-.24-.58-.49-.5-.67-.5c-.17 0-.37 0-.57 0c-.2 0-.52.07-.8.37c-.27.3-1.05 1.03-1.05 2.5c0 1.47 1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55c.72.31 1.28.49 1.72.63c.72.23 1.38.2 1.9.12c.58-.09 1.76-.72 2.01-1.41c.25-.69.25-1.28.18-1.41c-.07-.13-.25-.2-.55-.35z"/>
          <path fill="currentColor" d="M27.5 4.5A13.93 13.93 0 0 0 16 0C7.16 0 0 7.16 0 16c0 2.81.73 5.43 2 7.72L0 32l8.48-2.22A15.86 15.86 0 0 0 16 32c8.84 0 16-7.16 16-16c0-3.57-1.16-6.87-4.5-11.5zM16 29.33c-2.58 0-4.96-.75-6.98-2.05l-.5-.32l-5 1.31l1.34-4.86l-.33-.5A13.28 13.28 0 1 1 16 29.33z"/>
        </svg>

        {/* text label (hidden on very small screens) */}
        <span className="hidden sm:inline font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
