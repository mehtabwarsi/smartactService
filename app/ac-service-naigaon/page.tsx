import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC Service Naigaon | Expert AC Repair & Installation Near Me',
  description: 'Top-rated AC service in Naigaon East & West. Smart AC Service provides 24/7 split & window AC repair, installation, and gas filling. Fast & affordable!',
  keywords: 'AC Service Naigaon, AC Repair Naigaon, AC Technician Naigaon, Best AC Service Naigaon, AC Service Near Me, Split AC Repair Naigaon, Window AC Repair Naigaon, AC Gas Filling Naigaon, AC Installation Naigaon, Emergency AC Repair Naigaon',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-service-naigaon' },
  openGraph: {
    title: 'AC Service Naigaon | Expert AC Repair & Installation Near Me',
    description: 'Top-rated AC service in Naigaon East & West. Smart AC Service provides 24/7 split & window AC repair, installation, and gas filling. Fast & affordable!',
    url: 'https://smartact-service.vercel.app/ac-service-naigaon',
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
        "@id": "https://smartact-service.vercel.app/ac-service-naigaon#localbusiness",
        "name": "Smart AC Service - Naigaon",
        "description": "Professional AC repair, maintenance, and installation services in Naigaon East and West.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/ac-service-naigaon",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Naigaon",
          "addressRegion": "Maharashtra",
          "postalCode": "401208",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.3499",
          "longitude": "72.8468"
        },
        "priceRange": "₹₹",
        "areaServed": [
          "Naigaon East", "Naigaon West", "Juchandra", "Bapane", "Uttan Road", "Naigaon Railway Station", "Sasunavghar", "Kaman", "Diva", "Chandansar"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "624"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AC Service",
        "provider": {
          "@id": "https://smartact-service.vercel.app/ac-service-naigaon#localbusiness"
        },
        "areaServed": "Naigaon"
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
            "name": "AC Service Naigaon",
            "item": "https://smartact-service.vercel.app/ac-service-naigaon"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cost of an AC technician visit in Naigaon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our diagnostic inspection fee in Naigaon starts at just ₹299. However, if you choose to proceed with our quoted repair service, this inspection fee is 100% waived off."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you repair an AC in Naigaon East?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We pride ourselves on speed. Our local technicians can usually reach any address in Naigaon East or West, including Juchandra and Kaman, within 30 to 45 minutes for emergency repairs."
            }
          },
          {
            "@type": "Question",
            "name": "Is AC gas filling available on the same day?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer same-day AC gas filling services across Naigaon. Our process includes a complete leak check before we refill the exact manufacturer-specified refrigerant."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium AC Service in Naigaon: Your Comfort is Our Priority</h2>
        <p className="text-lg leading-relaxed mb-6">
          Living near the coastal areas of <strong>Naigaon</strong> means dealing with high humidity and intense summers that take a toll on your air conditioner. If your AC is failing to cool, leaking water, or making strange noises, you need a highly responsive expert. <strong>Smart AC Service</strong> is the most trusted <strong>AC service provider in Naigaon</strong>. From routine maintenance in <strong>Naigaon West</strong> to emergency cooling repairs in <strong>Naigaon East</strong>, our certified <strong>AC technicians in Naigaon</strong> deliver rapid, guaranteed solutions straight to your home or office.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Smart AC Service Outperforms Local Technicians in Naigaon</h3>
        <p className="mb-4">
          Many people in Naigaon rely on aggregators like Justdial or Urban Company, only to face delayed service, unverified mechanics, or inflated bills with hidden costs. We operate differently. As a dedicated local specialist, we prioritize absolute transparency and technical excellence. Here is why we are the top choice for AC repair over local competitors:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Feature</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service (Naigaon)</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Freelancers & Aggregators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Pricing</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Clear, Upfront Quotation</td>
                <td className="py-3 px-4 border-b text-red-500">Hidden / Extra Charges</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Technician Reliability</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">In-House & Background Verified</td>
                <td className="py-3 px-4 border-b text-red-500">Untested Third-Parties</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Spare Parts</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Genuine OEM only (with Warranty)</td>
                <td className="py-3 px-4 border-b text-red-500">Cheap / Duplicate Parts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Service Speed</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Under 45 Minutes (Same Day)</td>
                <td className="py-3 px-4 border-b text-red-500">24 to 48 Hours Wait</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Guarantee</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">30 to 90 Days Repair Warranty</td>
                <td className="py-3 px-4 border-b text-red-500">No Post-Service Responsibility</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Emergency AC Repair Naigaon & Same Day Service</h3>
        <p className="mb-4">
          An air conditioner failure is always unexpected. Our rapid-response <strong>emergency AC repair Naigaon</strong> team operates 24/7. Whether it's a short-circuited compressor near the <strong>Naigaon Railway Station</strong> or severe <strong>AC water leakage</strong> in Juchandra, our experts provide flawless <strong>same day AC service</strong> to restore your comfort instantly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Complete AC Services Offered in Naigaon</h3>
        
        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Repair Naigaon</h4>
        <p className="mb-4">Split air conditioners are fantastic, but they suffer from drainage blockages and sensor issues over time. Our <strong>split AC repair</strong> service covers everything from deep cleaning choked cooling coils to resolving complex blower motor vibrations, ensuring whisper-quiet operation.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Window AC Repair Naigaon</h4>
        <p className="mb-4">Older window units are prone to heavy vibration and condenser wear. We are specialists in <strong>window AC repair</strong>, capable of fixing thermostat failures, replacing damaged capacitors, and fully overhauling the unit for extended life.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Inverter AC PCB Repair</h4>
        <p className="mb-4">Standard technicians struggle with Inverter ACs. We provide highly technical <strong>inverter AC repair</strong>. If your unit is throwing error codes, we offer component-level <strong>AC PCB repair</strong>, which is far more affordable than replacing the entire board.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Commercial & Cassette AC Repair</h4>
        <p className="mb-4">For offices, clinics, and showrooms along Uttan Road or Diva, we deliver swift <strong>commercial AC repair</strong>. We service cassette ACs and ductable units, recognizing that a functioning AC is critical for your business.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Gas Filling Naigaon (With Leak Detection)</h4>
        <p className="mb-4">Is your AC blowing warm air? It likely needs an <strong>AC gas refill</strong>. Unlike mechanics who just 'top up', our <strong>AC gas filling Naigaon</strong> protocol includes a rigorous nitrogen pressure test to find the leak, brazing to seal it, vacuuming, and finally charging the exact weight of R32, R410A, or R22 gas.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Precision AC Installation & Uninstallation</h4>
        <p className="mb-4">Moving homes within Bapane or Sasunavghar? Our <strong><a href="/ac-installation" className="text-blue-600 underline">AC installation</a></strong> guarantees proper alignment and flawless copper flaring to prevent gas leaks. We also provide safe <strong>AC uninstallation</strong>, carefully pumping down the refrigerant so nothing is lost.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Foam Jet Deep Cleaning</h4>
        <p className="mb-4">Standard water washing is insufficient for coastal humidity. Our <strong><a href="/ac-deep-cleaning" className="text-blue-600 underline">Foam Jet Cleaning</a></strong> uses non-toxic, antibacterial foam and a high-pressure jet to eliminate deeply embedded mold and dirt from the evaporator coil, dramatically improving air quality and cooling speed.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Comprehensive AMC Plans</h4>
        <p className="mb-4">Keep your AC running at peak efficiency with our <strong><a href="/amc-service" className="text-blue-600 underline">Annual Maintenance Contracts (AMC)</a></strong>. These plans include periodic preventative maintenance, priority emergency response, and significant discounts on spare parts.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Warning Signs Your AC Needs Immediate Repair</h3>
        <p className="mb-4">Ignoring small problems leads to massive repair bills. Call us if you notice:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>AC Not Cooling:</strong> Dirty filters, low refrigerant, or a struggling compressor.</li>
          <li><strong>AC Water Leakage:</strong> A blocked drain pipe or a frozen cooling coil dripping indoors.</li>
          <li><strong>AC Compressor Failure:</strong> The outdoor unit makes a loud buzzing noise but the fan does not turn on.</li>
          <li><strong>Foul Odors:</strong> A musty smell means harmful bacteria and mold are growing inside the unit.</li>
          <li><strong>Spike in Electricity Bills:</strong> An unmaintained AC works 30% harder, drastically raising power consumption.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">All Brands Expertly Repaired</h3>
        <p className="mb-4">Our technicians undergo rigorous brand-specific training. We confidently repair:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Hitachi", "Carrier", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Hyper-Local Service: Areas We Cover in Naigaon</h3>
        <p className="mb-4">We guarantee rapid response times because we are a local business. We serve all major neighborhoods in and around Naigaon:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          Naigaon East, Naigaon West, Juchandra, Bapane, Uttan Road, Naigaon Railway Station Area, Sasunavghar, Kaman, Diva, Chandansar, and neighboring regions like <a href="/ac-service-vasai" className="text-blue-600 underline hover:text-blue-800">Vasai</a>, <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a>, <a href="/ac-repair-virar" className="text-blue-600 underline hover:text-blue-800">Virar</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent Pricing Table</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service Required</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">AC Repair / Diagnostic Visit</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹499</td></tr>
              <tr><td className="py-3 px-4 border-b">Standard AC Service (Split/Window)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹599</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-deep-cleaning" className="text-blue-600 hover:underline">Foam Jet Deep Cleaning</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹649 - ₹899</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-gas-filling" className="text-blue-600 hover:underline">AC Gas Filling (R32 / R410A / R22)</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2500 - ₹2800</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Installation (Complete Setup)</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1299</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Uninstallation</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹899</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Prices are subject to the specific AC model, required genuine parts, and the complexity of the repair.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Seamless 4-Step Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { step: 1, title: "Contact Us", desc: "Book instantly via Phone or WhatsApp." },
            { step: 2, title: "Fast Arrival", desc: "A technician arrives at your Naigaon address promptly." },
            { step: 3, title: "Clear Quote", desc: "We diagnose the issue and provide an upfront price." },
            { step: 4, title: "Expert Repair", desc: "Your AC is fixed perfectly with a solid warranty." }
          ].map(p => (
            <div key={p.step} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{p.step}</div>
              <h4 className="font-bold text-gray-800 mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - AC Service Naigaon</h3>
        <div className="space-y-4 mb-10">
          {[
            {q: "How fast can you repair my AC in Naigaon West?", a: "For Naigaon West, including areas near the station and coastal side, we typically dispatch our technicians within 30 to 45 minutes."},
            {q: "Is there a visiting charge if I don't get the AC repaired?", a: "We charge a nominal diagnostic fee of ₹299 to uncover the exact issue. If you proceed with our repair, this fee is fully waived off."},
            {q: "How do you fix AC water leakage indoors?", a: "Water leakage is extremely common. It is usually caused by a blocked drain pipe or heavy dirt buildup on the cooling coil. We fix this by unblocking the drain and performing a deep foam wash."},
            {q: "Do you repair the PCB of Inverter ACs?", a: "Yes! Inverter AC PCBs are highly complex. We have electronic specialists who repair the existing boards at a fraction of the cost of replacing them entirely."},
            {q: "Is it safe to refill AC gas without fixing the leak?", a: "No, it is a waste of money. AC gas doesn't just evaporate. We always perform a nitrogen pressure test to find the leak, braze it, and then refill the gas."},
            {q: "What is the difference between normal service and Foam Jet Cleaning?", a: "Normal service involves basic filter washing. Foam Jet Cleaning uses specialized chemicals and a high-pressure jet pump to remove deep-seated mold and dirt from the cooling coils."},
            {q: "Do you offer any warranty on AC repairs in Naigaon?", a: "Absolutely. We stand by our work. We provide a 30 to 90-day service warranty on our repairs and a manufacturer's warranty on genuine spare parts."},
            {q: "My AC trips the main power (MCB) instantly. Why?", a: "This indicates a severe electrical short circuit, usually a grounded compressor, burnt wiring, or a failed capacitor. Please keep the AC off and call our emergency team."},
            {q: "Which refrigerant gases do you use?", a: "We exclusively use pure, factory-grade refrigerants specified by the brand, including R32, R410A, and R22. We never use cheap, mixed gases."},
            {q: "Do you install ACs bought online?", a: "Yes, we provide expert AC installation for units purchased online. We ensure correct flaring and secure mounting to prevent any future gas leaks."},
            {q: "Can you shift my AC from Naigaon East to Vasai?", a: "Yes, we handle complete AC shifting. We will safely uninstall the AC, pump down the gas, transport it, and reinstall it perfectly in Vasai."},
            {q: "Why is ice forming on my AC's indoor copper pipes?", a: "Ice forms when there is a severe airflow restriction (due to choked filters/coils) or when the refrigerant gas is critically low. It needs immediate servicing."},
            {q: "Do you service commercial AC units in Naigaon?", a: "Yes, we service cassette ACs, tower units, and ductable systems for restaurants, clinics, and offices across Naigaon."},
            {q: "How often should I service my AC in a coastal area like Naigaon?", a: "Because of high humidity and coastal salt in the air (which causes faster corrosion and mold), we recommend servicing your AC at least twice a year."},
            {q: "Can a dirty AC increase my electricity bill?", a: "Yes! A choked AC forces the compressor to work much harder to achieve the desired temperature, which can increase your power bill by up to 30%."},
            {q: "Are your technicians experienced and verified?", a: "Yes, every single technician is thoroughly background-checked, certified, and trained on the latest Inverter AC technologies."},
            {q: "Do you use original spare parts?", a: "We only use 100% genuine OEM (Original Equipment Manufacturer) spare parts. Duplicate parts can permanently damage your compressor."},
            {q: "Do you offer Annual Maintenance Contracts (AMC)?", a: "Yes, we offer affordable AMC plans that include routine deep cleaning, priority support, and heavy discounts on repairs throughout the year."},
            {q: "What if the same problem happens again after repair?", a: "If the exact same issue occurs within the warranty period, we will revisit and fix the problem completely free of charge."},
            {q: "How do I book a technician right now?", a: "It's simple! Click the WhatsApp button on our website or call us directly at +91 81159 53195 for an instant booking."}
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get the Best AC Service in Naigaon Today!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't let the heat ruin your day or settle for unreliable mechanics. Choose Smart AC Service for guaranteed, fast, and affordable AC repair in Naigaon. Check our <a href="/blog" className="text-blue-600 underline">AC tips blog</a> or contact us directly.
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
      Best AC Service in <span className="text-grad-brand">Naigaon</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Looking for an expert AC technician in Naigaon? We provide highly reliable, affordable, and guaranteed AC repair, installation, and gas filling in Naigaon East and West. Book now for same-day service!"
      />
    </>
  );
}
