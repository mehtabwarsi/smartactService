import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC Gas Filling Near Me | Fast & Safe AC Gas Refill Service',
  description: 'Expert AC Gas Filling Service. R32, R410A & R22 gas refill with complete leak testing and vacuuming across Nalasopara, Vasai, Virar, Naigaon & Bhayandar.',
  keywords: 'AC Gas Filling, AC Gas Refill, Split AC Gas Filling, Window AC Gas Filling, AC Gas Charging, AC Gas Filling Near Me, AC Gas Filling Charges, AC Gas Filling Service, AC Gas Filling Nalasopara, AC Gas Filling Vasai, AC Gas Filling Virar, AC Gas Filling Naigaon, AC Gas Filling Bhayandar',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-gas-filling' },
  openGraph: {
    title: 'AC Gas Filling Near Me | Fast & Safe AC Gas Refill Service',
    description: 'Expert AC Gas Filling Service. R32, R410A & R22 gas refill with complete leak testing and vacuuming across Nalasopara, Vasai, Virar, Naigaon & Bhayandar.',
    url: 'https://smartact-service.vercel.app/ac-gas-filling',
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
        "@id": "https://smartact-service.vercel.app/ac-gas-filling#localbusiness",
        "name": "Smart AC Service",
        "description": "Professional AC Gas Filling Service. Specializing in R32, R410A, and R22 refrigerants with nitrogen pressure leak testing.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/ac-gas-filling",
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
          "reviewCount": "1480"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AC Gas Filling Service",
        "provider": {
          "@id": "https://smartact-service.vercel.app/ac-gas-filling#localbusiness"
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
            "name": "AC Gas Filling",
            "item": "https://smartact-service.vercel.app/ac-gas-filling"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does AC gas filling cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AC gas filling charges typically range from ₹2,500 to ₹2,800 depending on the type of refrigerant (R32, R410A, or R22) and the capacity of the AC. This price strictly includes leak detection and vacuuming."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my AC gas leaking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AC gas leaks are caused by microscopic holes in the copper piping, often due to poor flaring during installation, corrosion from coastal humidity, or physical damage to the condenser coils."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to just top-up the AC gas without fixing the leak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Topping up gas without fixing the underlying leak is a waste of money, as the new gas will leak out again. Furthermore, mixed gases damage the compressor. We always detect and braze the leak before refilling."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional AC Gas Filling Services: Restore Your Cooling instantly</h2>
        <p className="text-lg leading-relaxed mb-6">
          Is your air conditioner running constantly but failing to cool the room? The most common culprit is a low refrigerant level due to a hidden leak. <strong>AC Gas Filling</strong> (or AC gas charging) is a highly technical process that should never be handled by amateurs. At <strong>Smart AC Service</strong>, we provide industry-standard <strong>AC gas refill</strong> services that permanently fix your cooling problems. We utilize precision nitrogen pressure testing to locate leaks and ensure your AC blows ice-cold air. We proudly serve residential and commercial clients across <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a>, <a href="/ac-service-vasai" className="text-blue-600 underline hover:text-blue-800">Vasai</a>, <a href="/ac-repair-virar" className="text-blue-600 underline hover:text-blue-800">Virar</a>, <a href="/ac-service-naigaon" className="text-blue-600 underline hover:text-blue-800">Naigaon</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why AC Gas Gets Low (The Myth of "Gas Evaporation")</h3>
        <p className="mb-4">
          Many local mechanics will tell you that AC gas naturally evaporates over time and needs to be "topped up" every year. <strong>This is completely false.</strong> An air conditioner is a closed-loop system. If the refrigerant level is low, it means there is a physical hole in your copper piping or coils where the gas has escaped. Topping up gas without fixing the leak is a scam.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Signs Your AC Needs Gas Filling</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>AC Not Cooling:</strong> The unit blows room-temperature air despite the compressor running.</li>
          <li><strong>Ice on the Copper Pipes:</strong> Thick ice forming on the indoor cooling coil or outdoor copper valves is a definitive sign of severe gas shortage.</li>
          <li><strong>High Electricity Bills:</strong> Because the AC cannot reach the set temperature, the compressor runs continuously, burning through electricity.</li>
          <li><strong>Hissing or Bubbling Noises:</strong> A distinct hissing sound near the indoor unit often indicates an active, pressurized gas leak.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service for Gas Charging?</h3>
        <p className="mb-4">
          Platforms like Urban Company, Sulekha, and Justdial often dispatch untrained contractors who simply pump cheap gas into your AC without fixing the leak. We strictly follow factory-grade protocols.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Feature</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Freelancers & Aggregators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Leak Detection</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Nitrogen Pressure Testing</td>
                <td className="py-3 px-4 border-b text-red-500">Visual Guesswork / Ignored</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Vacuum Process</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Mandatory High-Power Vacuum Pump</td>
                <td className="py-3 px-4 border-b text-red-500">Skipped (Uses illegal purge method)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Refrigerant Quality</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">100% Original, Brand Specific Gas</td>
                <td className="py-3 px-4 border-b text-red-500">Cheap / Mixed / Adulterated Gas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Warranty</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Guarantee on brazed joints</td>
                <td className="py-3 px-4 border-b text-red-500">No Post-Service Warranty</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Complete AC Gas Filling Services</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Gas Filling</h4>
        <p className="mb-4">Split units have longer copper piping, making them more susceptible to leaks at the flare nuts. Our <strong>split AC gas filling</strong> service involves opening the joints, re-flaring them properly, and performing a full system recharge to restore crisp cooling.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Window AC Gas Filling</h4>
        <p className="mb-4">Window ACs are compact, meaning leaks usually happen directly on the internal U-bends of the condenser coil due to rust. Our <strong>window AC gas filling</strong> includes taking the chassis out, brazing the rusted U-bends, and safely recharging the system.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Inverter AC Gas Filling</h4>
        <p className="mb-4">Inverter ACs utilize highly volatile gases like R32, which operate at extreme pressures and are mildly flammable. Therefore, <strong>Inverter AC gas filling</strong> requires specialized gauges, mandatory vacuuming, and precise charging by weight using a digital scale. Our certified technicians handle this with strict safety protocols.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The Smart AC Service Scientific 4-Step Process</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">1. Gas Leakage Detection & Repair (Nitrogen Pressure Testing)</h4>
        <p className="mb-4">We do not guess where the leak is. We pump high-pressure Nitrogen gas into your AC system and use advanced soap solutions and electronic detectors to pinpoint microscopic holes in the copper pipes or coils. Once found, we permanently seal the leak using high-temperature brazing (welding).</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">2. The Crucial Vacuum Process</h4>
        <p className="mb-4">Once the leak is sealed, ambient air and moisture are trapped inside the pipes. If new gas mixes with this moisture, it forms an acid that destroys the compressor. We use a heavy-duty <strong>vacuum pump</strong> to pull the system into a deep vacuum, entirely removing air and moisture.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">3. Precise Gas Charging</h4>
        <p className="mb-4">We then inject the exact weight of refrigerant specified by your AC manufacturer. Overcharging causes compressor tripping, and undercharging causes ice formation. We get it exactly right.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">4. Cooling Performance Check</h4>
        <p className="mb-4">After the <strong>AC gas charging</strong>, we run the unit and use digital thermometers and clamp meters to verify that the return air temperature and amp draw are perfectly aligned with factory specs.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Types of Refrigerant Gases: R22 vs R32 vs R410A</h3>
        <p className="mb-4">We only use factory-grade, 100% pure refrigerants. Mixing gases is dangerous and destroys cooling efficiency.</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>R32 Gas Filling:</strong> The modern standard for Inverter ACs. Highly efficient, eco-friendly, but operates at high pressure. Must be charged as a liquid.</li>
          <li><strong>R410A Gas Filling:</strong> A widely used blend in modern ACs. Because it is a blend of two gases, if it leaks, the remaining gas goes out of balance. It must be completely vacuumed and refilled from scratch.</li>
          <li><strong>R22 Gas Filling (Freon):</strong> Found in older ACs. It is being phased out globally due to ozone depletion, making original R22 gas expensive, but we maintain stocks for our clients with older units.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent AC Gas Filling Charges</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service / Gas Type</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Estimated Price (incl. Leak Fix & Vacuuming)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">R32 Gas Filling (Inverter ACs)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2,500 - ₹2,800</td></tr>
              <tr><td className="py-3 px-4 border-b">R410A Gas Filling</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2,500 - ₹2,800</td></tr>
              <tr><td className="py-3 px-4 border-b">R22 Gas Filling (Older Non-Inverter)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹2,600 - ₹2,900</td></tr>
              <tr><td className="py-3 px-4 border-b">Nitrogen Leak Testing Only (if required)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹400 - ₹600</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Note: <strong>AC Gas filling charges</strong> depend on the tonnage of the AC (1 Ton, 1.5 Ton, 2 Ton) and the severity of the leak repair required.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Brands We Service</h3>
        <p className="mb-4">Our engineers are fully equipped to recharge and repair the gas systems of all major global brands:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Carrier", "Hitachi", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General", "Haier", "Godrej"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Service Areas: Rapid Gas Refill Near You</h3>
        <p className="mb-4">We are the fastest responding cooling experts in the northern Mumbai suburbs. We provide rapid <strong>same day service</strong> and <strong>emergency service</strong> across:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Nalasopara</strong> (East & West), <strong>Vasai</strong> (Road & Station), <strong>Virar</strong> (Global City, Bolinj), <strong>Naigaon</strong>, and <strong>Bhayandar</strong> (Navghar, Indralok, Maxus Mall area).
        </p>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - AC Gas Filling</h3>
        <div className="space-y-4 mb-10">
          {[
            {q: "How do I know if my AC needs gas?", a: "If your AC is running but blowing warm air, or if you see ice building up on the copper pipes of the outdoor unit, your refrigerant level is critically low."},
            {q: "How much does AC gas filling cost?", a: "Complete AC gas filling, which must include nitrogen leak testing, brazing the leak, vacuuming, and refilling, costs between ₹2,500 and ₹2,800 depending on the AC tonnage and gas type."},
            {q: "Why can't you just 'top up' the gas for cheaper?", a: "Topping up without fixing the leak means the gas will simply leak out again in a few weeks. Furthermore, topping up R410A gas without vacuuming creates an unbalanced chemical mixture that damages the compressor."},
            {q: "How long does AC gas last?", a: "In a properly sealed, leak-free AC system, the gas lasts forever. It does not evaporate or get consumed like fuel in a car. You only need gas if there is a hole in the system."},
            {q: "Is it dangerous to breathe leaking AC gas?", a: "Modern refrigerants like R32 and R410A are generally non-toxic in small amounts, but they displace oxygen. If a massive leak happens in a small, closed room, it can cause dizziness. Open a window immediately."},
            {q: "What is Nitrogen pressure testing?", a: "Nitrogen gas is pumped into your AC pipes at extremely high pressure (up to 300 PSI). Because it is highly pressurized and dry, it forces its way out of microscopic leaks, making them easy to find with soap solution."},
            {q: "Why is vacuuming necessary before gas filling?", a: "Air contains moisture. If moisture mixes with the new refrigerant and compressor oil, it creates an acid that eats the compressor from the inside. A vacuum pump sucks all the moisture out of the pipes."},
            {q: "Do you offer a warranty on gas filling?", a: "We offer a strong warranty on the joints that we braze/weld. If the gas leaks from the exact spot we repaired, we will refill it for free within the warranty period."},
            {q: "Can you change R22 gas to R32 gas in my old AC?", a: "No. Compressors are engineered specifically for one type of gas. Putting R32 gas into an R22 compressor operates at a much higher pressure and will cause the compressor to explode."},
            {q: "Why is ice forming on my indoor AC unit?", a: "Counter-intuitively, ice formation is a primary symptom of low AC gas. When gas is low, the evaporator coil drops below freezing temperature, turning the moisture in the air into solid ice."},
            {q: "Do you refill commercial Cassette ACs?", a: "Yes, our technicians are certified to handle heavy-duty commercial AC gas filling for cassette units, ductable systems, and tower ACs."},
            {q: "How long does the gas filling process take?", a: "A professional gas filling job, including leak detection, brazing, 30 minutes of deep vacuuming, and charging, takes roughly 1.5 to 2 hours."},
            {q: "What happens if you overcharge the AC gas?", a: "Overcharging is very dangerous. It causes abnormally high head pressure, which will cause the compressor to repeatedly trip (turn off) to protect itself, and it can eventually blow the compressor valves."},
            {q: "Can low gas cause my compressor to fail?", a: "Yes. The refrigerant gas not only cools your room, but it also cools the compressor motor itself. Without enough gas, the compressor overheats and burns out."},
            {q: "Is R32 gas flammable?", a: "R32 is classified as 'mildly flammable' (A2L). It is safe when handled by certified professionals using proper vacuum pumps and digital charging scales, which is exactly how we operate."},
            {q: "Do you service Window ACs?", a: "Yes, we provide complete Window AC gas filling, which usually involves taking the chassis out, pressure washing, brazing rusted U-bends, and recharging."},
            {q: "Why do local mechanics quote ₹1,000 for gas filling?", a: "They are running a scam. They do not fix the leak, they do not use a vacuum pump, and they often pump cheap, highly flammable mixed gases (like hydrocarbon blends) into your AC, risking a fire."},
            {q: "Do you use original brand refrigerant?", a: "We strictly use 100% pure, factory-grade refrigerants (Floron, Mafron, Daikin original, etc.) to ensure maximum cooling efficiency and safety."},
            {q: "What areas do you provide emergency gas filling in?", a: "We provide rapid response across Nalasopara, Vasai, Virar, Naigaon, and Bhayandar."},
            {q: "How can I book a gas filling appointment?", a: "Click the WhatsApp button on our website for an instant chat, or call us directly at +91 81159 53195 to schedule a technician immediately."}
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Restore Ice-Cold Cooling Instantly!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Stop suffering in the heat and stop wasting money on mechanics who don't fix the underlying leak. Trust Smart AC Service for safe, vacuum-pumped AC gas filling. Read our <a href="/blog" className="text-blue-600 underline">AC maintenance blog</a> or contact us to book your service right away.
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
      Professional AC Gas Filling <span className="text-grad-brand">Service</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Is your AC blowing warm air? We provide expert AC gas filling with mandatory nitrogen leak testing and deep vacuuming. R32, R410A, and R22 gas recharge available across Nalasopara, Vasai, Virar, and Bhayandar."
      />
    </>
  );
}
