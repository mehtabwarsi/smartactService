import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC Service Vasai | Best AC Repair & Gas Filling Near Me',
  description: 'Top-rated AC service in Vasai East & West. Smart AC Service provides same day split & window AC repair, installation, and gas filling by certified experts.',
  keywords: 'AC Service Vasai, AC Repair Vasai, AC Technician Vasai, Best AC Service Vasai, AC Service Near Me, Split AC Service Vasai, Window AC Service Vasai, AC Gas Filling Vasai, AC Installation Vasai, Emergency AC Service Vasai',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-service-vasai' },
  openGraph: {
    title: 'AC Service Vasai | Best AC Repair & Gas Filling Near Me',
    description: 'Top-rated AC service in Vasai East & West. Smart AC Service provides same day split & window AC repair, installation, and gas filling by certified experts.',
    url: 'https://smartact-service.vercel.app/ac-service-vasai',
    siteName: 'Smart AC Service',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function Page() {
  const customSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://smartact-service.vercel.app/ac-service-vasai#localbusiness",
        "name": "Smart AC Service - Vasai",
        "description": "Professional AC repair and service in Vasai East and West. Offering quick AC installation, gas filling, and deep cleaning.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/ac-service-vasai",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vasai",
          "addressRegion": "Maharashtra",
          "postalCode": "401202",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.3839",
          "longitude": "72.8336"
        },
        "priceRange": "₹₹",
        "areaServed": [
          "Vasai East", "Vasai West", "Evershine City", "Bhabola", "Ambadi Road", "Vasai Gaon", "Papdy", "Kaul Heritage", "Suncity", "Waliv", "Rajodi", "Sandor", "Agarwal Nagari"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "932"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AC Service",
        "provider": {
          "@id": "https://smartact-service.vercel.app/ac-service-vasai#localbusiness"
        },
        "areaServed": "Vasai"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://smartact-service.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AC Service Vasai",
            "item": "https://smartact-service.vercel.app/ac-service-vasai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cost of AC service in Vasai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our basic AC service in Vasai starts from ₹599. We provide transparent upfront pricing based on the exact issue, whether it's gas filling, deep cleaning, or PCB repair."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide emergency AC service in Vasai East and West?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer emergency AC service and repairs across Vasai East, Vasai West, Evershine City, and Bhabola with a response time of under 45 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Is same day AC repair available in Vasai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We pride ourselves on providing same day AC repair and service for almost all types of residential and commercial air conditioning units in Vasai."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Best AC Service in Vasai: Reliable & Affordable Cooling Solutions</h2>
        <p className="text-lg leading-relaxed mb-6">
          When the harsh summer hits, a functioning air conditioner in your home or office is essential. At <strong>Smart AC Service</strong>, we offer the most comprehensive <strong>AC service in Vasai</strong>. Whether you're dealing with an AC cooling problem in <strong>Vasai West</strong>, or you need emergency repairs in <strong>Vasai East</strong>, our team of highly trained technicians is ready to help. We are the trusted choice for residents in Evershine City, Bhabola, and Ambadi Road for quick, professional, and guaranteed AC solutions.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service Over Local Competitors in Vasai?</h3>
        <p className="mb-4">
          Finding a dependable <strong>AC technician in Vasai</strong> can be frustrating. Many local vendors and aggregators like Justdial, Sulekha, or Urban Company often connect you with unverified mechanics who lack expertise with modern inverter systems or charge hidden fees. Here’s why we stand out:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Comparison Factor</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Other Providers / Aggregators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Technician Expertise</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Certified & Background Verified</td>
                <td className="py-3 px-4 border-b text-red-500">Unverified / Freelance Mechanics</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Pricing Structure</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">100% Transparent & Upfront</td>
                <td className="py-3 px-4 border-b text-red-500">Surprise Costs & Hidden Fees</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Spare Parts Quality</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Genuine OEM Parts only</td>
                <td className="py-3 px-4 border-b text-red-500">Duplicate / Low-grade Spares</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Response Speed</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Same Day / Under 45 Mins</td>
                <td className="py-3 px-4 border-b text-red-500">24-48 Hours Wait Time</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Workmanship Warranty</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">30 to 90 Days Service Guarantee</td>
                <td className="py-3 px-4 border-b text-red-500">Usually No Warranty</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Emergency AC Service in Vasai & Same Day AC Repair</h3>
        <p className="mb-4">
          An AC breaking down in the middle of a sultry night is a nightmare. Our <strong>24 Hour AC Repair Vasai</strong> team is always on standby. If your unit is facing severe AC water leakage, a dead compressor, or tripping the mains, call us for <strong>emergency AC service Vasai</strong>. We ensure <strong>same day AC service</strong> across all major Vasai sectors, from Vasai Gaon and Papdy to Kaul Heritage.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Comprehensive AC Service Offerings in Vasai</h3>
        
        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Service Vasai</h4>
        <p className="mb-4">Split air conditioners require regular maintenance to maintain optimal cooling and prevent major breakdowns. Our <strong>split AC service</strong> includes comprehensive deep cleaning, filter sanitization, electrical connection checks, and gas pressure monitoring to keep your unit running flawlessly.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Window AC Service Vasai</h4>
        <p className="mb-4">Though sturdy, window ACs can suffer from severe vibration, noise issues, and restricted airflow over time. Our team excels at <strong>window AC service</strong>, from unblocking drainage channels to completely overhauling the fan motor and compressor components.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Inverter AC Repair</h4>
        <p className="mb-4">Inverter technology is complex and requires specialized knowledge. We are experts in <strong>inverter AC repair</strong>, capable of resolving sophisticated <strong>AC PCB repair</strong> issues, sensor faults, and variable speed compressor malfunctions that normal mechanics cannot fix.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Commercial AC Repair</h4>
        <p className="mb-4">For offices, restaurants, and retail spaces in Ambadi Road or Agarwal Nagari, we provide rapid <strong>commercial AC repair</strong> and <strong>cassette AC repair</strong>. We understand that a faulty AC impacts your business, so we prioritize commercial breakdowns.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Gas Filling Vasai</h4>
        <p className="mb-4">If your AC is blowing normal fan air instead of cold air, it's likely a gas leak. Our <strong>AC gas filling Vasai</strong> service includes rigorous leak detection, nitrogen pressure testing, leak sealing, and precise <strong>AC gas refill</strong> (R32, R410A, or R22) by weight for maximum efficiency.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Installation & Uninstallation Vasai</h4>
        <p className="mb-4">Whether you are moving into Suncity or relocating from Rajodi, our professional <strong><a href="/ac-installation" className="text-blue-600 underline">AC installation</a></strong> ensures perfect alignment, flawless copper piping, and secure mounting. We also handle safe <strong>AC uninstallation</strong> with proper gas pump-down.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Deep Cleaning & Foam Jet Cleaning</h4>
        <p className="mb-4">Standard servicing often misses deep-seated dirt. Our advanced <strong><a href="/ac-deep-cleaning" className="text-blue-600 underline">Foam Jet Cleaning</a></strong> uses non-toxic biodegradable foams and high-pressure water jets to flush out deeply ingrained grime, mold, and allergens from the cooling coils, ensuring pure, chilled air.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AMC Plans (Annual Maintenance Contract)</h4>
        <p className="mb-4">Protect your investment with our comprehensive <strong><a href="/amc-service" className="text-blue-600 underline">AMC Plans</a></strong>. Enjoy priority support, free routine maintenance visits, discounted repairs, and a longer lifespan for your air conditioning unit.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Common AC Problems & Signs Your AC Needs Service</h3>
        <p className="mb-4">Don't wait for a complete breakdown. Call us immediately if you notice:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>AC Not Cooling:</strong> Usually caused by choked filters, a dirty condenser, or a refrigerant gas leak.</li>
          <li><strong>AC Water Leakage:</strong> Dripping water from the indoor unit points to a clogged drain pipe or frozen evaporator coil.</li>
          <li><strong>AC Compressor Repair Needed:</strong> Unusual grinding noises outside, continuous tripping of the MCB, or the outdoor unit not turning on at all.</li>
          <li><strong>Foul Odors:</strong> A musty smell indicates harmful mold and bacteria breeding inside the AC.</li>
          <li><strong>High Electricity Bills:</strong> A poorly maintained AC struggles to cool, consuming up to 30% more power.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Brands We Expertly Service & Repair</h3>
        <p className="mb-4">Our professional technicians are fully trained to service and repair all leading air conditioning brands in India:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Hitachi", "Carrier", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Hyper-Local AC Service: Areas We Serve in Vasai</h3>
        <p className="mb-4">We guarantee the fastest response times because we are locally based. We actively serve the following neighborhoods in Vasai and beyond:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          Vasai East, Vasai West, Evershine City, Bhabola, Ambadi Road, Vasai Gaon, Papdy, Kaul Heritage, Suncity, Waliv, Rajodi, Sandor, Agarwal Nagari, <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a>, <a href="/ac-repair-virar" className="text-blue-600 underline hover:text-blue-800">Virar</a>, <a href="/ac-service-naigaon" className="text-blue-600 underline hover:text-blue-800">Naigaon</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent Pricing Table</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service Description</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">AC Inspection / Diagnosis</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹499</td></tr>
              <tr><td className="py-3 px-4 border-b">Split / Window AC Service</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹599</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-deep-cleaning" className="text-blue-600 hover:underline">Foam Jet Deep Cleaning</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹649 - ₹899</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-gas-filling" className="text-blue-600 hover:underline">AC Gas Filling (R32 / R410A / R22)</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2500 - ₹2800</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Installation (Complete setup)</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1299</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Uninstallation</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹899</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Prices are indicative and may vary slightly based on AC capacity (tonnage) and exact spare parts required.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Seamless Working Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { step: 1, title: "Quick Booking", desc: "Call or WhatsApp us for instant confirmation." },
            { step: 2, title: "Rapid Dispatch", desc: "A verified technician is dispatched to your Vasai location." },
            { step: 3, title: "Transparent Quote", desc: "Full inspection followed by a clear, upfront cost." },
            { step: 4, title: "Guaranteed Repair", desc: "Swift resolution using genuine parts with warranty." }
          ].map(p => (
            <div key={p.step} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{p.step}</div>
              <h4 className="font-bold text-gray-800 mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - AC Service in Vasai</h3>
        <div className="space-y-4 mb-10">
          {[
            {q: "How quickly can a technician reach my home in Vasai West?", a: "We typically dispatch a professional AC technician to Vasai West, Evershine City, and Bhabola within 30-45 minutes of your booking."},
            {q: "What is included in a standard AC Service?", a: "Standard AC service includes cleaning the air filters, washing the indoor cooling coils, checking electrical connections, cleaning the outdoor condenser unit, and inspecting gas pressure."},
            {q: "Is there a visiting charge if I only want an inspection?", a: "Yes, we have a nominal inspection fee of ₹299 to thoroughly diagnose the issue. However, if you choose to proceed with the repair, this inspection fee is 100% waived off."},
            {q: "Do you repair Inverter AC PCBs?", a: "Yes, repairing Inverter AC PCBs is one of our specialties. Instead of forcing costly replacements, our electronic experts can often repair the existing PCB."},
            {q: "My AC is leaking water inside the room. How can you fix it?", a: "AC water leakage usually occurs due to a clogged drain pipe or excessive dirt on the evaporator coil. We clear the blockage using pressure pumps or perform a deep foam jet cleaning."},
            {q: "Which AC refrigerant gas is the best?", a: "There is no 'best' gas; your AC requires the specific gas it was designed for (R32, R410A, or older R22). We always use the exact manufacturer-specified, factory-grade refrigerant."},
            {q: "Do you provide AC service in Vasai East as well?", a: "Absolutely. We have dedicated technicians serving all of Vasai East, including Waliv, Rajodi, and surrounding industrial/residential zones."},
            {q: "How long does AC gas last?", a: "AC gas does not get 'consumed' like car fuel. If your AC needs a gas refill, it means there is a leak in the copper piping or condenser coils that must be brazed and fixed first."},
            {q: "What is Foam Jet AC Cleaning?", a: "Foam Jet Cleaning involves applying biodegradable foam chemicals to the indoor coils to loosen deeply embedded dirt and mold, which is then washed away with a high-pressure water jet."},
            {q: "Is it necessary to service my AC every year?", a: "Yes. Due to the high dust and humidity levels in Vasai, servicing your AC at least twice a year ensures better cooling, prevents major breakdowns, and significantly lowers electricity bills."},
            {q: "Do you offer warranties on AC repairs?", a: "Yes, we provide a 30 to 90-day service warranty on our repair work, and up to 1-year warranty on major replaced components like compressors."},
            {q: "Can you install an AC that I bought online?", a: "Yes, we provide professional AC installation for all brands, regardless of where you purchased the unit. We ensure proper flaring and vacuuming during installation."},
            {q: "My AC outdoor unit is making a loud noise. What's wrong?", a: "A loud noise from the outdoor unit could indicate a loose fan blade, failing motor bearings, or a worn-out compressor rubber mount. It requires immediate attention."},
            {q: "Do you service commercial cassette ACs in Vasai?", a: "Yes, we provide specialized service and repair for commercial cassette ACs, ductable units, and tower ACs commonly used in offices and restaurants."},
            {q: "Why is my AC tripping the MCB switch?", a: "An AC tripping the MCB indicates a serious electrical short circuit, a grounded compressor, or a faulty capacitor. Turn off the AC immediately and call our emergency repair team."},
            {q: "Do you use genuine spare parts?", a: "100% yes. We strictly use genuine OEM (Original Equipment Manufacturer) parts to ensure the longevity and safety of your air conditioner."},
            {q: "What areas nearby do you serve apart from Vasai?", a: "Our service network extends to Nalasopara, Virar, Naigaon, and Bhayandar."},
            {q: "Are your technicians background-verified?", a: "Yes, every technician undergoes a rigorous background check and continuous technical training before they are dispatched to customer homes."},
            {q: "What payment methods are accepted?", a: "We accept Cash, UPI (Google Pay, PhonePe, Amazon Pay), and IMPS online transfers upon successful completion of the service."},
            {q: "How do I book a service?", a: "Booking is easy! You can call us at +91 81159 53195, message us on WhatsApp, or fill out the booking form on our website."}
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience the Best AC Service in Vasai Today!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't suffer in the heat with a malfunctioning AC. Trust the certified professionals at Smart AC Service for fast, affordable, and guaranteed solutions. Check out our <a href="/blog" className="text-blue-600 underline">latest blog posts</a> for AC maintenance tips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:8115953195" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              📞 Call Now: +91 81159 53195
            </a>
            <a href="https://wa.me/8115953195" target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              💬 WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const overrideH1 = (
    <>
      Best AC Service in <span className="text-grad-brand">Vasai</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Looking for the most reliable AC service in Vasai? Our certified technicians provide fast, affordable, and guaranteed AC repair, installation, and gas filling in Vasai East and West. Book now!"
      />
    </>
  );
}
