import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC Repair Nalasopara | 24/7 Service, Gas Filling & AMC',
  description: 'Top-rated AC Repair in Nalasopara East & West. Smart AC Service provides same day split & window AC repair, installation, and gas filling. Book verified technicians!',
  keywords: 'AC Repair Nalasopara, AC Service Nalasopara, AC Technician Nalasopara, AC Repair Near Me, Split AC Repair Nalasopara, Window AC Repair Nalasopara, AC Gas Filling Nalasopara, AC Installation Nalasopara, AC AMC Nalasopara, Emergency AC Repair Nalasopara',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-repair-nalasopara' },
  openGraph: {
    title: 'AC Repair Nalasopara | 24/7 Service, Gas Filling & AMC',
    description: 'Top-rated AC Repair in Nalasopara East & West. Smart AC Service provides same day split & window AC repair, installation, and gas filling. Book verified technicians!',
    url: 'https://smartact-service.vercel.app/ac-repair-nalasopara',
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
        "@id": "https://smartact-service.vercel.app/ac-repair-nalasopara#localbusiness",
        "name": "Smart AC Service - Nalasopara",
        "description": "Professional AC repair and service in Nalasopara East and West. We offer AC installation, gas filling, and deep cleaning.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/ac-repair-nalasopara",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nalasopara",
          "addressRegion": "Maharashtra",
          "postalCode": "401209",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.4184",
          "longitude": "72.8147"
        },
        "priceRange": "₹₹",
        "areaServed": [
          "Nalasopara East", "Nalasopara West", "Achole", "Tulinj", "Moregaon", "Oswal Nagari", "Central Park", "Alkapuri", "Fun Fiesta", "Yashwant Gaurav", "Nilemore"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "854"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AC Repair",
        "provider": {
          "@id": "https://smartact-service.vercel.app/ac-repair-nalasopara#localbusiness"
        },
        "areaServed": "Nalasopara"
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
            "name": "AC Repair Nalasopara",
            "item": "https://smartact-service.vercel.app/ac-repair-nalasopara"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cost of AC repair in Nalasopara?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AC repair services in Nalasopara start from ₹499. The final cost depends on the specific issue, such as PCB repair, gas leak, or compressor issues. We provide an upfront estimate before starting the work."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide same-day AC service in Nalasopara East and West?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer same-day AC repair and service across Nalasopara East, Nalasopara West, Achole, Tulinj, and nearby areas."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Best AC Repair in Nalasopara: Your Trusted Cooling Experts</h2>
        <p className="text-lg leading-relaxed mb-6">
          Living in <strong>Nalasopara</strong> means dealing with intense summer heat and high humidity levels. When your air conditioner breaks down, it’s not just an inconvenience—it’s a disruption to your daily life and comfort. At <strong>Smart AC Service</strong>, we provide the most reliable, fast, and affordable <strong>AC repair in Nalasopara</strong>. Whether you reside in <strong>Nalasopara East</strong> or <strong>Nalasopara West</strong>, our certified AC technicians are just a call away, ready to restore your cooling instantly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service Over Local Technicians?</h3>
        <p className="mb-4">
          Finding a professional AC technician in Nalasopara can be challenging. Many local mechanics lack the proper training to handle modern inverter ACs or use substandard spare parts. Here is why thousands of customers trust us over competitors like Urban Company, Sulekha, or Justdial:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Feature</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Local Technicians</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Pricing</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Transparent & Upfront</td>
                <td className="py-3 px-4 border-b text-red-500">Hidden Charges</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Spare Parts</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">100% Genuine with Warranty</td>
                <td className="py-3 px-4 border-b text-red-500">Duplicate / Local Parts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Technicians</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Certified & Background Verified</td>
                <td className="py-3 px-4 border-b text-red-500">Untrained & Unverified</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Response Time</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Under 30 Minutes (Same Day)</td>
                <td className="py-3 px-4 border-b text-red-500">Unreliable / Next Day</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Service Warranty</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">30 to 90 Days Warranty</td>
                <td className="py-3 px-4 border-b text-red-500">No Guarantee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Emergency AC Repair & Same Day AC Service</h3>
        <p className="mb-4">
          An AC breakdown during a hot afternoon or late at night requires immediate attention. We offer <strong>24 Hour AC Repair</strong> support for urgent cooling problems. If your AC stops cooling, trips the MCB, or starts leaking water heavily, our <strong>emergency AC repair Nalasopara</strong> team will arrive at your doorstep in record time. From <strong>Central Park</strong> to <strong>Yashwant Gaurav</strong>, our rapid response vehicles cover the entire Nalasopara region.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comprehensive AC Services We Offer</h3>
        
        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Repair Nalasopara</h4>
        <p className="mb-4">Split air conditioners are the most common cooling units in modern homes. We fix all split AC problems including indoor unit water leakage, strange rattling noises, blower motor issues, and PCB failures. Our experts carry advanced diagnostic tools to pinpoint the exact issue quickly.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Window AC Repair Nalasopara</h4>
        <p className="mb-4">Though older, window ACs are still widely used. If your window AC is vibrating heavily, not cooling properly, or the compressor isn't turning on, our technicians can repair it on the spot. We service all tonnages from 1 Ton to 2 Ton window units.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Inverter AC Repair</h4>
        <p className="mb-4">Inverter ACs save electricity but have complex circuitry. A normal mechanic cannot fix an inverter AC PCB. We specialize in <strong>inverter AC repair</strong>, expertly handling sensor issues, communication errors, and compressor variable speed drive problems.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Commercial AC Repair</h4>
        <p className="mb-4">For offices, shops, and clinics in <strong>Tulinj</strong> and <strong>Achole</strong>, we provide commercial AC repair services, including cassette ACs and ductable systems, ensuring your business operations are never affected by the heat.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Gas Filling Nalasopara</h4>
        <p className="mb-4">If your AC is throwing warm air and there's ice on the copper pipes, you likely have a gas leak. We don't just top up gas blindly. Our <strong>AC Gas Refill</strong> process involves nitrogen pressure testing, leak brazing, vacuuming the system, and filling genuine R32, R410a, or R22 gas by weight for optimal cooling.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Installation & Uninstallation</h4>
        <p className="mb-4">Moving to a new apartment in <strong>Oswal Nagari</strong> or <strong>Alkapuri</strong>? We offer professional <strong><a href="/ac-installation" className="text-blue-600 underline">AC installation near me</a></strong>. We ensure perfect leveling, proper flaring of copper pipes to prevent gas leaks, and secure outdoor unit mounting. We also provide safe uninstallation with proper gas pump-down.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Deep Cleaning & Foam Jet Cleaning</h4>
        <p className="mb-4">Normal water washing is not enough. Our <strong><a href="/ac-deep-cleaning" className="text-blue-600 underline">Foam Jet Cleaning</a></strong> uses specialized biodegradable chemicals and high-pressure jet pumps to remove stubborn grime, mold, and bacteria from the deepest parts of your cooling coils, improving airflow and air quality instantly.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC AMC Nalasopara</h4>
        <p className="mb-4">Prevent breakdowns before they happen. Our <strong><a href="/amc-service" className="text-blue-600 underline">AC AMC (Annual Maintenance Contract)</a></strong> includes scheduled preventive maintenance visits, priority breakdown support, and free gas leak checks, saving you thousands of rupees in unexpected repairs.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Common AC Problems & Signs Your AC Needs Repair</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>AC Not Cooling:</strong> Dirty filters, low refrigerant, or a faulty compressor.</li>
          <li><strong>AC Water Leakage:</strong> Blocked drain pipe, frozen evaporator coil, or improper installation.</li>
          <li><strong>AC Compressor Repair:</strong> Clicking sounds outside, AC tripping the breaker, or blowing warm air.</li>
          <li><strong>Foul Odors:</strong> Smells like dirty socks indicate mold buildup in the drain pan.</li>
          <li><strong>High Electricity Bills:</strong> An unserviced AC works harder, consuming 20-30% more power.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Brands We Repair</h3>
        <p className="mb-4">Our certified technicians are experts in handling all major air conditioning brands available in India:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Hitachi", "Carrier", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Areas We Serve in Nalasopara</h3>
        <p className="mb-4">We are a truly local company. We provide hyper-local services across all major neighborhoods in Nalasopara and surrounding regions, including:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed">
          Nalasopara East, Nalasopara West, Achole, Tulinj, Moregaon, Central Park, Oswal Nagari, Alkapuri, Yashwant Gaurav, Fun Fiesta, Nilemore, <a href="/ac-service-vasai" className="text-blue-600 underline">Vasai</a>, <a href="/ac-repair-virar" className="text-blue-600 underline">Virar</a>, <a href="/ac-service-naigaon" className="text-blue-600 underline">Naigaon</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent Pricing Table</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service Type</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Estimated Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">AC Repair / Inspection</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹499</td></tr>
              <tr><td className="py-3 px-4 border-b">AC General Service</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹599</td></tr>
              <tr><td className="py-3 px-4 border-b">Foam Jet Deep Cleaning</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹649 - ₹899</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-gas-filling" className="text-blue-600 underline">AC Gas Refill (R32 / R410a / R22)</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2500 - ₹2800</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Installation (Split)</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1299</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Uninstallation</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹899</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Prices may vary based on exact spare parts required and AC tonnage.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Simple 4-Step Repair Process</h3>
        <ol className="list-decimal pl-6 mb-8 space-y-3">
          <li><strong>Booking:</strong> Contact us via WhatsApp or Phone call. We confirm your booking in seconds.</li>
          <li><strong>Technician Visit:</strong> Our verified technician arrives at your location in Nalasopara on time.</li>
          <li><strong>Diagnosis & Quote:</strong> We inspect the AC and provide a transparent, upfront repair quote.</li>
          <li><strong>Repair & Warranty:</strong> We fix the AC using genuine parts and provide a service warranty.</li>
        </ol>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs)</h3>
        <div className="space-y-4 mb-10">
          {[
            {q: "How fast can you send an AC technician in Nalasopara?", a: "We usually dispatch a technician within 30-45 minutes of booking for areas like Nalasopara East, West, Achole, and Tulinj."},
            {q: "Is there a visiting charge if I don't proceed with the repair?", a: "We charge a nominal inspection fee of ₹299 to diagnose the exact issue. If you proceed with the repair, this fee is completely waived off."},
            {q: "Do you provide a warranty on AC repair?", a: "Yes, we provide a 30-day service warranty on all our repair work and up to 1-year warranty on genuine spare parts like compressors and PCBs."},
            {q: "Which refrigerant gas do you use?", a: "We only use original, factory-grade refrigerants like R32, R410A, and R22 based on your AC manufacturer's specifications."},
            {q: "Can you fix my AC water leakage problem immediately?", a: "Yes, AC water leakage is one of the most common issues we solve daily. It usually requires clearing the blocked drain pipe or deep cleaning the evaporator coil."},
            {q: "Do you repair both Split and Window ACs?", a: "Absolutely. Our experts are well-trained to handle split ACs, window ACs, and even commercial cassette AC units."},
            {q: "My AC is running but not cooling. What is the issue?", a: "This could be due to dirty filters, a tripped compressor, a faulty capacitor, or a gas leak. Our technician will pinpoint the exact cause."},
            {q: "What is Foam Jet Cleaning?", a: "It's an advanced cleaning method where we use a pressure washer and specialized foam chemicals to deep clean the indoor unit, removing hidden mold, dust, and bacteria."},
            {q: "Do you offer AC uninstallation and shifting services?", a: "Yes, if you are shifting homes within Nalasopara or to nearby areas like Vasai or Virar, we safely uninstall, transport, and reinstall your AC without gas loss."},
            {q: "Is it safe to get my AC serviced by local mechanics?", a: "Local mechanics often lack training for modern inverter ACs and might use duplicate parts which can permanently damage your AC. Always choose certified professionals."},
            {q: "How often should I service my AC in Nalasopara?", a: "Given the dust and coastal humidity, we highly recommend getting your AC serviced at least twice a year (before summer and post-monsoon) for optimal performance."},
            {q: "Do you handle Inverter AC PCB repair?", a: "Yes, PCB repair is complex and expensive to replace. Our electronic experts can often repair the existing PCB at a fraction of the cost of a new one."},
            {q: "Why is ice forming on my AC copper pipes?", a: "Ice formation is a classic sign of low refrigerant gas due to a leak, or severely restricted airflow caused by a choked cooling coil. Turn off the AC immediately and call us."},
            {q: "What brands do you service?", a: "We service all major brands including Daikin, LG, Samsung, Voltas, Blue Star, Panasonic, Hitachi, Lloyd, O General, and Carrier."},
            {q: "Are there any hidden charges in your pricing?", a: "No. Our pricing is 100% transparent. We provide an exact quotation after the initial inspection before starting any repair work."},
            {q: "Do you provide AC AMC (Annual Maintenance Contracts)?", a: "Yes, our AMC packages cover routine services and priority breakdown support, offering complete peace of mind throughout the year."},
            {q: "What payment methods do you accept?", a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and IMPS bank transfers after the service is successfully completed."},
            {q: "Can a dirty AC cause high electricity bills?", a: "Yes. When filters and coils are choked with dust, the compressor runs longer and harder to cool the room, drastically increasing power consumption."},
            {q: "My AC makes a loud rattling noise. Is it dangerous?", a: "A rattling noise could indicate a loose blower fan, a failing motor bearing, or a damaged compressor mount. It should be inspected immediately to prevent further damage."},
            {q: "How can I book an AC service appointment?", a: "You can book easily by calling us directly at +91 81159 53195 or by sending a message on WhatsApp. We provide instant confirmations."}
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center mt-10">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Fix Your AC?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't let a faulty AC ruin your peace of mind. Get professional, guaranteed AC repair in Nalasopara today. Read our <a href="/blog" className="text-blue-600 underline">AC maintenance blog</a> for tips or contact us right away.
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
      Best AC Repair in <span className="text-grad-brand">Nalasopara</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Looking for reliable AC repair in Nalasopara? Our certified technicians provide fast, affordable, and guaranteed AC service in Nalasopara East, West, and surrounding areas. Book now for same-day service!"
      />
    </>
  );
}
