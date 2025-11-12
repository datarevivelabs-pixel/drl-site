export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg max-w-xl mx-auto">
            We’re here to help with all your data recovery needs.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have questions or need a free evaluation? Our team is available
              7 days a week to assist you.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>📍 Address:</strong> Kiambu, Kenya</li>
              <li><strong>📞 Phone:</strong> +254 768 177 714</li>
              <li><strong>✉️ Email:</strong> info@datarevivelabs.com</li>
              <li><strong>🕒 Hours:</strong> Mon–Sat, 8am–6pm</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
