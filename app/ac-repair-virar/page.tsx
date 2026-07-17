import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC Repair Virar | Top AC Service, Gas Filling & Installation',
  description: 'Looking for the best AC repair in Virar? Smart AC Service offers 24/7 split & window AC repair, installation, and gas filling in Virar East & West. Call now!',
  keywords: 'AC Repair Virar, AC Service Virar, AC Technician Virar, Best AC Repair Virar, AC Repair Near Me, Split AC Repair Virar, Window AC Repair Virar, AC Gas Filling Virar, AC Installation Virar, Emergency AC Repair Virar',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-repair-virar' },
  openGraph: {
    title: 'AC Repair Virar | Top AC Service, Gas Filling & Installation',
    description: 'Looking for the best AC repair in Virar? Smart AC Service offers 24/7 split & window AC repair, installation, and gas filling in Virar East & West. Call now!',
    url: 'https://smartact-service.vercel.app/ac-repair-virar',
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
        "@id": "https://smartact-service.vercel.app/ac-repair-virar#localbusiness",
        "name": "Smart AC Service - Virar",
        "description": "Expert AC repair and maintenance service in Virar East and West. Specializing in AC gas filling, installation, and deep cleaning.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/ac-repair-virar",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Virar",
          "addressRegion": "Maharashtra",
          "postalCode": "401303",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.4560",
          "longitude": "72.7925"
        },
        "priceRange": "₹₹",
        "areaServed": [
          "Virar East", "Virar West", "Global City", "Bolinj", "Agashi", "Arnala", "Narangi", "Phoolpada", "Y K Nagar", "Manvelpada", "Viva College Area", "Gokul Township"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1045"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AC Repair",
        "provider": {
          "@id": "https://smartact-service.vercel.app/ac-repair-virar#localbusiness"
        },
        "areaServed": "Virar"
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
            "name": "AC Repair Virar",
            "item": "https://smartact-service.vercel.app/ac-repair-virar"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does AC repair cost in Virar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AC repair diagnostics in Virar start at just ₹499. The final price depends on the specific repair required, such as compressor replacement, PCB repair, or gas leak fixing. All costs are discussed upfront before we start the job."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer emergency AC repair in Virar West?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide 24-hour emergency AC repair services across Virar West and Virar East, including areas like Global City, Bolinj, and Agashi."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can an AC technician reach my location in Virar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Since our technicians are locally based in Virar, we typically reach your doorstep within 30 to 45 minutes of booking."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Unmatched AC Repair in Virar: Your Ultimate Cooling Partner</h2>
        <p className="text-lg leading-relaxed mb-6">
          The sweltering heat of <strong>Virar</strong> can make life unbearable if your air conditioner stops functioning. When you are looking for prompt and professional <strong>AC repair in Virar</strong>, <strong>Smart AC Service</strong> is the name you can trust. Whether you are living near the bustling <strong>Viva College Area</strong>, residing in the peaceful <strong>Gokul Township</strong>, or running a business in <strong>Virar East</strong>, our certified AC technicians are equipped to handle every cooling challenge instantly. We provide a hassle-free, fully guaranteed service experience right at your doorstep.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service Over Other Virar Providers?</h3>
        <p className="mb-4">
          Many homeowners in Virar get frustrated dealing with unverified mechanics from apps like Urban Company, Sulekha, or Justdial, who often charge hidden fees and offer zero warranties. We believe in transparency and absolute professionalism. Here is a direct comparison of why we are the top-rated <strong>AC service provider in Virar</strong>:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Feature</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service (Virar)</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Local Competitors / Aggregators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Upfront Pricing</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Yes, 100% Transparent</td>
                <td className="py-3 px-4 border-b text-red-500">Hidden / Escalating Charges</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Technician Verification</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Background Checked & Certified</td>
                <td className="py-3 px-4 border-b text-red-500">Unverified Freelancers</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Genuine Spare Parts</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">100% OEM Spares with Warranty</td>
                <td className="py-3 px-4 border-b text-red-500">Substandard / Local Parts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Emergency Response</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Under 45 Minutes (Same Day)</td>
                <td className="py-3 px-4 border-b text-red-500">Delayed by 24-48 Hours</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Post-Repair Support</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">30 to 90-Day Warranty</td>
                <td className="py-3 px-4 border-b text-red-500">No Post-Service Guarantee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Same Day & Emergency AC Repair in Virar</h3>
        <p className="mb-4">
          An AC breakdown during peak summer requires an immediate fix. Our dedicated <strong>emergency AC repair Virar</strong> team operates round the clock. Whether you are facing severe <strong>AC water leakage</strong> in Global City or a dead compressor in Manvelpada late at night, our <strong>24 Hour AC Repair</strong> unit is always ready. We guarantee <strong>same day AC service</strong> so you never have to sleep in the heat.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Complete AC Solutions: Services We Provide</h3>
        
        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Expert Split AC Repair Virar</h4>
        <p className="mb-4">Split ACs offer great cooling but are prone to specific issues like blocked drain pipes, faulty blower motors, and sensor failures. Our <strong>split AC repair</strong> specialists utilize advanced diagnostic tools to resolve any issue right on the spot, ensuring your room gets chilled quickly and quietly.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Window AC Repair Virar</h4>
        <p className="mb-4">Window ACs are durable workhorses, but over time they suffer from compressor fatigue and heavy vibrations. We provide comprehensive <strong>window AC repair</strong>, from overhauling the fan motor to replacing faulty capacitors, extending the life of your unit by years.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Advanced Inverter AC PCB Repair</h4>
        <p className="mb-4">Modern Inverter ACs save power but feature highly complicated electronic printed circuit boards (PCBs). Instead of forcing you to buy a brand new, expensive PCB, our highly trained electronics experts specialize in intricate <strong>inverter AC repair</strong> and component-level <strong>AC PCB repair</strong>, saving you thousands of rupees.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Commercial AC Repair & Maintenance</h4>
        <p className="mb-4">If you operate a restaurant in Agashi or an office in Bolinj, you need your ACs running constantly. We provide rapid <strong>commercial AC repair</strong> and <strong>cassette AC repair</strong> services designed to minimize downtime for your business operations.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Gas Filling Virar (Leak Fix included)</h4>
        <p className="mb-4">If your AC is only blowing room-temperature air, it's a sign of a refrigerant leak. Our <strong>AC gas filling Virar</strong> service is thorough. We do not just blindly refill gas; we conduct a nitrogen pressure test, fix the leak by brazing, vacuum the entire system, and then perform a precise <strong>AC gas refill</strong> using pure R32, R410A, or R22 refrigerants.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Flawless AC Installation & Uninstallation</h4>
        <p className="mb-4">Moving into a new flat in Y K Nagar or Arnala? Proper installation determines your AC's lifespan. Our <strong><a href="/ac-installation" className="text-blue-600 underline">AC installation near me</a></strong> service guarantees perfect wall mounting, precise copper pipe flaring to prevent future leaks, and secure electrical connections. We also do safe <strong>AC uninstallation</strong> if you are shifting homes.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Foam Jet Cleaning & Deep Sanitization</h4>
        <p className="mb-4">Normal water washing does not kill bacteria. Our state-of-the-art <strong><a href="/ac-deep-cleaning" className="text-blue-600 underline">Foam Jet Cleaning</a></strong> uses high-pressure water jets combined with specialized anti-bacterial foam to eliminate mold, fungi, and deep-seated dust from your cooling coils. This drastically improves the air quality in your home and boosts cooling efficiency.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Money-Saving AMC Plans</h4>
        <p className="mb-4">Keep your AC running smoothly year-round. Our <strong><a href="/amc-service" className="text-blue-600 underline">AMC (Annual Maintenance Contract)</a></strong> provides you with scheduled preventive maintenance, VIP priority booking for breakdowns, and massive discounts on any required spare parts.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Why AC Stops Cooling: Common Signs You Need Repair</h3>
        <p className="mb-4">Catching AC problems early can prevent expensive compressor replacements. Look out for these signs:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>AC Not Cooling Efficiently:</strong> Usually indicates heavily clogged filters, a dirty outdoor condenser, or a drop in refrigerant gas levels.</li>
          <li><strong>Continuous AC Water Leakage:</strong> Water dripping inside means the drain pipe is blocked or the evaporator coil has frozen over due to low gas.</li>
          <li><strong>AC Compressor Repair Warning:</strong> If the outdoor unit makes a loud buzzing or clicking noise but the fan does not spin, your compressor or run capacitor is failing.</li>
          <li><strong>Foul, Musty Odors:</strong> A smell like dirty socks indicates that mold and bacteria are breeding inside the wet environment of your indoor unit.</li>
          <li><strong>Frequent Tripping:</strong> If turning on the AC trips your main power switch, there is a dangerous electrical short circuit that needs immediate professional attention.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">All Major Brands Covered</h3>
        <p className="mb-4">Our certified technicians are extensively trained to repair and service every popular AC brand available in the Indian market:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Hitachi", "Carrier", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Hyper-Local Reach: Areas We Serve in Virar</h3>
        <p className="mb-4">We don't make you wait. Because our technicians are stationed locally, we provide ultra-fast response times across every corner of Virar:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          Virar East, Virar West, Global City, Bolinj, Agashi, Arnala, Narangi, Phoolpada, Y K Nagar, Manvelpada, Viva College Area, Gokul Township, as well as nearby areas like <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a>, <a href="/ac-service-vasai" className="text-blue-600 underline hover:text-blue-800">Vasai</a>, <a href="/ac-service-naigaon" className="text-blue-600 underline hover:text-blue-800">Naigaon</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Affordable & Transparent Pricing Table</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service Category</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Starting Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">AC Repair / Diagnostic Visit</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹499</td></tr>
              <tr><td className="py-3 px-4 border-b">Standard AC Service (Split/Window)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹599</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-deep-cleaning" className="text-blue-600 hover:underline">Foam Jet Deep Cleaning</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹649 - ₹899</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-gas-filling" className="text-blue-600 hover:underline">AC Gas Refill with Leak Fix</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2500 - ₹2800</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Installation (Complete Setup)</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1299</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Safe Uninstallation</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹899</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Note: Final price is provided after the on-site inspection. Costs vary slightly depending on AC tonnage and required replacement parts.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Simple 4-Step Working Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { step: 1, title: "Book Instantly", desc: "Reach us via WhatsApp or Phone for an immediate appointment." },
            { step: 2, title: "Expert Arrival", desc: "A certified technician arrives at your Virar address swiftly." },
            { step: 3, title: "Diagnosis & Quote", desc: "Thorough inspection of the AC followed by an exact, upfront price." },
            { step: 4, title: "Fix & Guarantee", desc: "Your AC is repaired flawlessly using OEM parts and backed by a warranty." }
          ].map(p => (
            <div key={p.step} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{p.step}</div>
              <h4 className="font-bold text-gray-800 mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - AC Repair Virar</h3>
        <div className="space-y-4 mb-10">
          {[
            {q: "How fast can you repair my AC in Global City, Virar?", a: "We typically dispatch a professional AC technician to Global City and nearby Virar West areas within 30-45 minutes of receiving your booking."},
            {q: "Do you charge a visiting fee if I decide not to get the repair done?", a: "We have a highly affordable inspection fee of ₹299 to correctly diagnose your AC's issue. However, if you choose to proceed with our repair quote, this fee is 100% waived."},
            {q: "Can you fix a dripping indoor AC unit?", a: "Yes, AC water leakage is a very common issue we fix daily. It usually happens due to a blocked drainage pipe or heavily soiled evaporator coils. We clear the blockage and clean the unit thoroughly."},
            {q: "Is it safe to refill AC gas without checking for leaks?", a: "No, it is a bad practice. AC gas doesn't simply 'run out'. If gas is low, there is a leak. We perform rigorous nitrogen pressure testing to find and braze the leak before refilling the gas."},
            {q: "Do you service Inverter AC models in Virar?", a: "Absolutely! Our technicians undergo specialized training to handle the complex electronics, PCBs, and variable speed compressors of modern Inverter AC units."},
            {q: "What does Foam Jet AC Cleaning involve?", a: "Foam Jet Cleaning uses specialized anti-bacterial chemical foam and a high-pressure water jet machine to deep clean the indoor and outdoor coils. It removes deeply embedded dirt that normal washing misses."},
            {q: "Do you offer any warranty on AC repairs?", a: "Yes, customer trust is our priority. We provide a 30 to 90-day service warranty on our repairs and a manufacturer-backed warranty on genuine spare parts like capacitors and compressors."},
            {q: "My AC trips the main switch (MCB) when turned on. What's wrong?", a: "This is a serious electrical fault. It usually points to a short-circuited compressor, faulty wiring, or a burnt capacitor. Do not attempt to turn it on again; call our emergency repair team immediately."},
            {q: "Which refrigerant gases do you use?", a: "We only use premium, factory-grade refrigerants strictly according to your AC manufacturer's specifications. We stock R32, R410A, and R22 gases."},
            {q: "Do you repair commercial Cassette ACs?", a: "Yes, we handle commercial cooling requirements in Virar, including the repair, installation, and maintenance of Cassette ACs, ductable units, and tower ACs."},
            {q: "Can you help shift my AC from Virar East to Virar West?", a: "Yes, we provide end-to-end AC shifting services. We safely uninstall the unit (pumping the gas down to prevent loss), transport it, and reinstall it perfectly at your new location."},
            {q: "Why is ice forming on my AC's copper pipes?", a: "Ice formation usually indicates two things: either your refrigerant gas level is critically low due to a leak, or the indoor cooling coil is severely choked with dust, preventing proper airflow."},
            {q: "Do you use duplicate or local spare parts?", a: "Never. We strictly use 100% genuine OEM (Original Equipment Manufacturer) spare parts. Using substandard parts can permanently damage your air conditioner."},
            {q: "How often should I service my AC in Virar?", a: "Due to the local dust and coastal humidity, we strongly recommend servicing your AC at least twice a year—ideally right before summer and right after the monsoon season."},
            {q: "Can a dirty AC cause my electricity bill to increase?", a: "Yes, significantly. A dirty AC forces the compressor to work much harder and run longer to cool the room, which can increase power consumption by up to 30%."},
            {q: "What areas in Virar do you cover?", a: "We cover all of Virar, including Virar East, Virar West, Global City, Bolinj, Agashi, Arnala, Narangi, Phoolpada, Y K Nagar, Manvelpada, Viva College Area, and Gokul Township."},
            {q: "Are your AC technicians certified and verified?", a: "Yes, every technician at Smart AC Service undergoes strict background verification and rigorous technical training before they are allowed to visit a customer's home."},
            {q: "Do you provide Annual Maintenance Contracts (AMC)?", a: "Yes, our AMC plans are designed to give you peace of mind. They include multiple routine services, priority breakdown attendance, and discounts on any necessary repairs."},
            {q: "What happens if the same problem occurs after repair?", a: "If the exact same issue reoccurs within our warranty period, we will send a technician to fix it again completely free of charge."},
            {q: "How can I book an AC technician right now?", a: "Booking is incredibly easy. Just click the WhatsApp button on our website or call us directly at +91 81159 53195. We confirm bookings instantly."}
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Restore Perfect Cooling to Your Home Today!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't compromise on your comfort or settle for unverified mechanics. Trust the leading experts for fast, affordable, and guaranteed AC repair in Virar. Read our <a href="/blog" className="text-blue-600 underline">cooling tips blog</a> or book a service right away.
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
      Best AC Repair in <span className="text-grad-brand">Virar</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Looking for a professional AC technician in Virar? We provide rapid, affordable, and guaranteed AC repair, gas filling, and installation services across Virar East and West. Book now for same-day service!"
      />
    </>
  );
}
