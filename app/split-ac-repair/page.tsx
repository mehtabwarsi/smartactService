import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Split AC Repair Near Me | Fast Split AC Service & PCB Repair',
  description: 'Expert Split AC Repair Service. We fix Split AC water leakage, cooling issues, PCB faults, and gas leaks in Nalasopara, Vasai, Virar & Bhayandar. Book now!',
  keywords: 'Split AC Repair, Split AC Service, Split AC Technician, Split AC Repair Near Me, Split AC Not Cooling, Split AC Water Leakage, Split AC Gas Filling',
  alternates: { canonical: 'https://smartact-service.vercel.app/split-ac-repair' },
  openGraph: {
    title: 'Split AC Repair Near Me | Fast Split AC Service & PCB Repair',
    description: 'Expert Split AC Repair Service. We fix Split AC water leakage, cooling issues, PCB faults, and gas leaks in Nalasopara, Vasai, Virar & Bhayandar. Book now!',
    url: 'https://smartact-service.vercel.app/split-ac-repair',
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
        "@id": "https://smartact-service.vercel.app/split-ac-repair#localbusiness",
        "name": "Smart AC Service",
        "description": "Premium Split AC Repair Services specializing in PCB repair, gas filling, and water leakage solutions.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/split-ac-repair",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nalasopara",
          "addressRegion": "Maharashtra",
          "postalCode": "401209",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹",
        "areaServed": [
          "Nalasopara", "Vasai", "Virar", "Naigaon", "Bhayandar"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1732"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Split AC Repair",
        "provider": {
          "@id": "https://smartact-service.vercel.app/split-ac-repair#localbusiness"
        },
        "areaServed": [
          "Nalasopara", "Vasai", "Virar", "Naigaon", "Bhayandar"
        ]
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
            "name": "Split AC Repair",
            "item": "https://smartact-service.vercel.app/split-ac-repair"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is my Split AC leaking water inside the room?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Split AC water leakage happens when the internal drain pipe is clogged with dirt and algae, or if the indoor unit is lacking refrigerant gas, causing the evaporator coil to freeze and melt."
            }
          },
          {
            "@type": "Question",
            "name": "Can you repair an Inverter Split AC PCB?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our electronic specialists can perform component-level PCB repair for Inverter Split ACs, which is significantly cheaper than replacing the entire circuit board."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a Split AC gas filling cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Split AC gas filling costs between ₹2,500 and ₹2,800 depending on the exact refrigerant (R32, R410A, or R22). This price includes mandatory nitrogen leak testing and vacuuming."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Split AC Repair: Fast, Reliable, and Guaranteed</h2>
        <p className="text-lg leading-relaxed mb-6">
          Split Air Conditioners offer the best cooling performance and whisper-quiet operation, but they are highly complex machines. When a Split AC breaks down, you need a specialized <strong>Split AC technician</strong> who understands complicated Inverter PCBs, complex copper piping networks, and delicate sensors. Whether you are dealing with a <strong>Split AC not cooling</strong> in <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a>, severe <strong>Split AC water leakage</strong> in <a href="/ac-service-vasai" className="text-blue-600 underline hover:text-blue-800">Vasai</a>, or a dead compressor in <a href="/ac-repair-virar" className="text-blue-600 underline hover:text-blue-800">Virar</a>, <strong>Smart AC Service</strong> provides immediate, guaranteed solutions across <a href="/ac-service-naigaon" className="text-blue-600 underline hover:text-blue-800">Naigaon</a> and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Split ACs Stop Cooling (And How We Fix Them)</h3>
        <p className="mb-4">
          A Split AC consists of an indoor evaporator unit and an outdoor condenser unit. A failure in either unit brings the whole system down. Here are the most common <strong>Split AC cooling problems</strong> we resolve daily:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Split AC Gas Leakage:</strong> The copper pipes connecting the indoor and outdoor units can develop micro-leaks, especially at the flare nuts. We use nitrogen testing to find the leak, braze it, and perform a full <strong>Split AC gas filling</strong>.</li>
          <li><strong>Choked Cooling Coils:</strong> If the indoor filters and coils are blocked with thick dust, air cannot pass through. Our <a href="/ac-deep-cleaning" className="text-blue-600 underline">Split AC Deep Cleaning</a> uses a high-pressure Foam Jet to blast away the dirt.</li>
          <li><strong>Failed Capacitors:</strong> If the outdoor fan spins but the compressor won't start (creating a buzzing sound), a faulty start capacitor is usually to blame. We perform rapid <strong>Split AC capacitor replacement</strong> on-site.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Solving Split AC Water Leakage Permanently</h3>
        <p className="mb-4">
          Water dripping from your indoor unit ruins expensive wall paint and furniture. This <strong>Split AC water leakage</strong> occurs when the drain pipe is choked with a jelly-like algae substance. Sometimes, local mechanics just blow air into the pipe, which only provides a temporary 2-day fix. We use a high-pressure water jet pump to permanently flush out the entire drainage system, ensuring smooth water flow.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Advanced Split AC PCB Repair</h3>
        <p className="mb-4">
          Modern Inverter Split ACs rely heavily on complex Printed Circuit Boards (PCBs) to control compressor speed. Power fluctuations or lizard short-circuits frequently damage these boards, resulting in blinking <strong>Split AC error codes</strong>. While brand service centers will force you to buy a brand new PCB (costing ₹5,000+), our electronic experts provide component-level <strong>Split AC PCB repair</strong> for a fraction of the cost.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service Over Local Competitors?</h3>
        <p className="mb-4">
          Don't trust your expensive Split AC with unverified mechanics from aggregators like Justdial or Urban Company. Here is how our specialized <strong>Split AC repair service</strong> stands apart:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Service Standard</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Freelancers & Aggregators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">PCB Fault Handling</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">In-House PCB Repair (Cost-Saving)</td>
                <td className="py-3 px-4 border-b text-red-500">Force Full Replacement (Expensive)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Gas Leak Protocols</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Nitrogen Leak Test & Vacuuming</td>
                <td className="py-3 px-4 border-b text-red-500">Blind "Top-Ups" (Scam)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Spare Parts Quality</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Genuine OEM Parts with Warranty</td>
                <td className="py-3 px-4 border-b text-red-500">Cheap Duplicate Parts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Emergency Response</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Same Day 45-Min Arrival</td>
                <td className="py-3 px-4 border-b text-red-500">Subject to random availability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comprehensive Split AC Services We Provide</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Compressor Repair & Replacement</h4>
        <p className="mb-4">The compressor is the engine of the AC. If it is drawing too much current, overheating, or completely dead, we offer comprehensive <strong>Split AC compressor repair</strong> or a complete, guaranteed <strong>compressor replacement</strong> using original brand parts.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Fan Motor Repair</h4>
        <p className="mb-4">Are you experiencing a severe <strong>Split AC noise problem</strong>? A rattling indoor unit or a screaming outdoor unit usually means the fan motor bearings have shattered. We provide swift <strong>Split AC fan motor repair</strong> and replacement to restore silent operation.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Sensor Repair</h4>
        <p className="mb-4">If your AC cools for 10 minutes and then turns off, or the remote temperature doesn't match the room temperature, the thermistor (coil or room sensor) is faulty. We offer quick and cheap <strong>Split AC sensor repair</strong>.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Installation & Relocation</h4>
        <p className="mb-4">Moving to a new house? We provide end-to-end <strong><a href="/ac-installation" className="text-blue-600 underline">Split AC installation</a></strong>. We carefully pump down the gas during uninstallation so you don't lose any refrigerant, transport the heavy units safely, and re-install them flawlessly.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Repair vs Replace: What Should You Do?</h3>
        <p className="mb-4">Not sure if you should fix your old Split AC or buy a new one? Here is our professional advice:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>When to Repair:</strong> If your AC is under 7 years old, PCB repairs, gas filling, and fan motor replacements are highly economical and will give your unit years of extra life.</li>
          <li><strong>When to Replace:</strong> If your AC is over 10 years old, uses the banned R22 Freon gas, and has suffered a total compressor burnout, the cost of a new compressor + R22 gas + labor is often better spent on a new, energy-efficient Inverter AC.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent Split AC Repair Charges</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service Required</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Estimated Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">Technician Visit / Diagnostics</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹299 (Waived if repair is done)</td></tr>
              <tr><td className="py-3 px-4 border-b">Split AC Capacitor Replacement</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹650 - ₹950</td></tr>
              <tr><td className="py-3 px-4 border-b">Water Leakage Fix (Drain Flush)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹400 - ₹600</td></tr>
              <tr><td className="py-3 px-4 border-b">PCB Repair (Non-Inverter / Inverter)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹1,200 - ₹3,500</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/ac-gas-filling" className="text-blue-600 hover:underline">R32 / R410A Gas Refill (with Leak Fix)</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2,500 - ₹2,800</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Note: Prices vary depending on the AC brand, tonnage (1 to 2 Ton), and exact part availability.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Brands We Command</h3>
        <p className="mb-4">Our engineers are extensively trained to repair the intricate mechanics and proprietary error codes of all leading Split AC brands:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Carrier", "Hitachi", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General", "Haier", "Godrej"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Service Areas: Immediate Emergency Response</h3>
        <p className="mb-4">We are a purely local business. This allows us to guarantee rapid <strong>same day service</strong> and <strong>emergency repair</strong> across the northern suburbs:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Nalasopara</strong> (East/West), <strong>Vasai</strong> (Road & Station), <strong>Virar</strong> (Global City, Bolinj), <strong>Naigaon</strong>, and <strong>Bhayandar</strong> (Jesal Park, Mira Bhayandar Road).
        </p>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - Split AC Repair</h3>
        <div className="space-y-4 mb-10">
          {[
            {q: "Why is my Split AC indoor unit leaking water?", a: "This is primarily caused by a clogged drain pipe. When dust mixes with condensation, it forms an algae sludge that blocks the pipe, causing water to overflow from the drain pan into your room. We flush it out with a high-pressure pump."},
            {q: "My Split AC turns on, but it is not cooling. Why?", a: "The most common reasons are: severe dust blocking the cooling coils, a gas leak (low refrigerant), or a dead start capacitor in the outdoor unit which prevents the compressor from turning on."},
            {q: "Why is the AC displaying an error code and blinking lights?", a: "Blinking lights and error codes (like CH38 on LG or E4 on Voltas) indicate a communication error between the indoor and outdoor units, a faulty sensor, or a damaged PCB. Our technicians use brand-specific manuals to decode and fix these errors."},
            {q: "Can you fix an Inverter AC PCB?", a: "Yes. While official service centers usually force you to buy a brand-new PCB, our expert electronic technicians can often repair your existing PCB by replacing burnt ICs or relays, saving you a lot of money."},
            {q: "Why shouldn't I just top up the gas?", a: "An AC is a closed system. Gas never 'finishes'. If it is low, it means there is a physical leak. Topping up gas without brazing (welding) the leak is a scam, as the new gas will just leak out again."},
            {q: "Is vacuuming necessary before gas filling?", a: "Absolutely. If ambient air and moisture are left inside the copper pipes, they react with the refrigerant to form an acid that burns out the compressor. We mandate the use of a vacuum pump for all gas refills."},
            {q: "Why is my outdoor unit making a very loud noise?", a: "A loud rattling or screaming noise from the outdoor unit usually means the fan motor bearings have shattered, the fan blade is broken, or the compressor mounts have rusted away."},
            {q: "Do you repair the Split AC remote?", a: "We do not repair remotes, as buying a universal or replacement remote is much cheaper and faster. However, if the AC's internal display receiver is faulty, we can repair that."},
            {q: "What is an AC capacitor and why does it fail?", a: "A capacitor acts like a heavy-duty battery that gives the compressor a massive jolt of electricity to start running. They frequently burn out due to power spikes or intense summer heat. We replace them on the spot."},
            {q: "How long does a Split AC repair take?", a: "Minor issues like capacitor replacements or water leak flushes take 30 minutes. Gas charging with nitrogen leak testing takes about 1.5 to 2 hours. Complex PCB repairs may require us to take the board to our lab for 24 hours."},
            {q: "Do you use original brand spare parts?", a: "Yes. We strictly use 100% genuine OEM spare parts. Using cheap duplicate capacitors or sensors will cause the AC to break down again rapidly."},
            {q: "Why is ice forming on the copper pipes of my AC?", a: "Ice formation is ironically a sign of low refrigerant gas. The low pressure causes the evaporator coil to drop below freezing, turning ambient humidity into solid ice."},
            {q: "Do you offer a warranty on repairs?", a: "Yes, customer trust is our foundation. We provide a 30 to 90-day service warranty on our repair workmanship and honor the manufacturer's warranty on new spare parts."},
            {q: "My AC trips the main MCB switch immediately. What should I do?", a: "Turn the AC off immediately. This is a dead short circuit, usually caused by a burnt compressor terminal or melted internal wiring. Do not try to turn it back on; call our emergency repair team."},
            {q: "Can a dirty AC increase my electricity bill?", a: "Yes, by up to 30%. When the coils are choked with dust, the compressor has to work much harder and run much longer to cool the room, drawing maximum amps."},
            {q: "Do you provide Annual Maintenance Contracts (AMC) for Split ACs?", a: "Yes, we offer highly affordable AMC plans that include routine deep cleaning, priority breakdown support, and spare part discounts to prevent these very repairs."},
            {q: "Will repairing my 12-year-old AC save me money?", a: "Usually, no. If a 12-year-old AC suffers a major compressor failure, the repair cost is high. We will honestly advise you if replacing it with a new Inverter AC is a better financial decision."},
            {q: "What if the same problem happens again?", a: "If the exact same issue reoccurs within our warranty period, we will send a technician to fix it again completely free of charge."},
            {q: "Are your Split AC technicians verified?", a: "Yes, every technician undergoes strict background verification and rigorous technical training before they are allowed to enter a customer's home."},
            {q: "How do I book a repair right now?", a: "Click the WhatsApp button on our website for an instant chat, or call us directly at +91 81159 53195. We will dispatch a technician to your address immediately."}
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Split AC Fixed Today!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Stop tolerating a hot room or a leaking AC. Trust the certified experts at Smart AC Service for fast, honest, and guaranteed Split AC repairs. Check our <a href="/blog" className="text-blue-600 underline">AC troubleshooting guide</a> or contact us now.
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
      Professional Split AC Repair <span className="text-grad-brand">Service</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Is your Split AC not cooling or leaking water? We offer expert PCB repair, gas filling, and compressor replacement across Nalasopara, Vasai, Virar, and Bhayandar. Book your same-day repair now!"
      />
    </>
  );
}
