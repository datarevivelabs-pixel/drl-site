export default function AboutPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-3">About Us</h1>
          <p className="text-lg max-w-xl mx-auto">
            Get to know the story, mission, and people behind Data Revive Labs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-12">
          Data Revive Labs is a professional data recovery company dedicated to
          restoring lost data from damaged or corrupted storage devices. With
          years of experience and advanced recovery tools, we help individuals
          and businesses retrieve their most important files quickly and
          securely.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              Our mission is to deliver fast, reliable, and affordable data
              recovery solutions without compromising security or privacy. We
              understand how valuable data is — and our goal is to give you
              peace of mind when it matters most.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Promise</h3>
            <p className="text-gray-700">
              Every recovery case is handled with transparency and care. We
              offer free diagnostics, clear pricing, and confidentiality for
              every client. Whether it’s a personal device or enterprise server,
              your data stays safe with us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
