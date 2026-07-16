export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smartact-service.vercel.app",
    "name": "Smart AC Service",
    "description": "Premium AC repair, installation, gas filling and maintenance in Nalasopara, Vasai, Virar, Naigaon, Bhayandar and Mumbai.",
    "url": "https://smartact-service.vercel.app",
    "telephone": "+91 81159 53195",
    "priceRange": "₹₹",
    "areaServed": ["Nalasopara", "Vasai", "Virar", "Naigaon", "Bhayandar", "Mumbai"],
    "address": { "@type": "PostalAddress", "addressLocality": "Nalasopara", "addressRegion": "Maharashtra", "postalCode": "401209", "addressCountry": "IN" },
    "geo": { "@type": "GeoCoordinates", "latitude": "19.4234", "longitude": "72.7989" },
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "07:00", "closes": "21:00" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1000" }
  };
}

export function getFAQSchema(faqs: { q: string, a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
