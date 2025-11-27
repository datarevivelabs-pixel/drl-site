"use client";

export default function SeoSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Data Revive Labs",
    "description":
      "Professional data recovery lab in Nairobi, Kenya. Specialists in HDD/SSD, RAID/NAS, phone data recovery and digital forensics.",
    "url": "https://drl-site.vercel.app",
    "telephone": "+254768177714",
    "priceRange": "KSh 6,000 - 200,000",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressRegion": "Nairobi",
      "streetAddress": "Nairobi, Kenya"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-1.286389",
        "longitude": "36.817223"
      },
      "geoRadius": "300000"
    },
    "sameAs": [
      "https://facebook.com/datarevivelabs",
      "https://instagram.com/datarevivelabs",
      "https://tiktok.com/@datarevivelabs",
      "https://x.com/datarevivelabs"
    ],
    "offers": {
      "@type": "Offer",
      "name": "Diagnostic Assessment",
      "price": "0.00",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
