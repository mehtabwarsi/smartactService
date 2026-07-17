import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC Deep Cleaning Near Me | Foam Jet AC Service Nalasopara to Bhayandar',
  description: 'Top-rated AC Deep Cleaning service. Expert foam jet cleaning for split & window ACs. Eradicate mold, boost cooling, and save electricity. Book same-day service!',
  keywords: 'AC Deep Cleaning, AC Cleaning Service, Split AC Cleaning, Window AC Cleaning, Foam Jet AC Cleaning, AC Service Near Me, AC Deep Cleaning Near Me, Professional AC Cleaning, AC Coil Cleaning, AC Indoor Unit Cleaning',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-deep-cleaning' },
  openGraph: {
    title: 'AC Deep Cleaning Near Me | Foam Jet AC Service Nalasopara to Bhayandar',
    description: 'Top-rated AC Deep Cleaning service. Expert foam jet cleaning for split & window ACs. Eradicate mold, boost cooling, and save electricity. Book same-day service!',
    url: 'https://smartact-service.vercel.app/ac-deep-cleaning',
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
        "@id": "https://smartact-service.vercel.app/ac-deep-cleaning#localbusiness",
        "name": "Smart AC Service",
        "description": "Professional AC Deep Cleaning Service. Specializing in Foam Jet cleaning, mold eradication, and coil sanitization.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/ac-deep-cleaning",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nalasopara",
          "addressRegion": "Maharashtra",
          "postalCode": "401209",
          "addressCountry": "IN"
        },
        "priceRange": "₹",
        "areaServed": [
          "Nalasopara", "Vasai", "Virar", "Naigaon", "Bhayandar"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1542"
        }
      },
      {
        "@type": "Service",
        "serviceType": "AC Deep Cleaning",
        "provider": {
          "@id": "https://smartact-service.vercel.app/ac-deep-cleaning#localbusiness"
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
            "name": "AC Deep Cleaning",
            "item": "https://smartact-service.vercel.app/ac-deep-cleaning"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AC Foam Jet Deep Cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike standard filter washing, Foam Jet Cleaning uses a specialized alkaline foaming chemical to loosen deep-seated mold, bacteria, and dust trapped inside the evaporator coil. This is followed by a high-pressure water jet wash for total sanitization."
            }
          },
          {
            "@type": "Question",
            "name": "How often should I get my AC deep cleaned?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In coastal and highly polluted areas like Vasai, Virar, or Bhayandar, we strongly recommend a professional deep clean every 6 months to prevent severe mold buildup and maintain peak cooling efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Will deep cleaning stop water dripping from the indoor AC unit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. The most common cause of indoor water leakage is a blocked drain pipe or a heavily choked water tray (drain pan) full of algae. Our deep cleaning completely flushes out the drain pipe."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AC Deep Cleaning: Breathe Cleaner, Cooler Air</h2>
        <p className="text-lg leading-relaxed mb-6">
          Is your air conditioner taking too long to cool the room? Does it emit a foul, musty odor when turned on? If so, washing the top filters is not enough. Your AC is choked with deep-seated dust, black mold, and bacteria. At <strong>Smart AC Service</strong>, we offer the ultimate <strong>AC Deep Cleaning</strong> experience utilizing state-of-the-art Foam Jet technology. We provide hospital-grade sanitization for residential and commercial units across <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a>, <a href="/ac-service-vasai" className="text-blue-600 underline hover:text-blue-800">Vasai</a>, <a href="/ac-repair-virar" className="text-blue-600 underline hover:text-blue-800">Virar</a>, <a href="/ac-service-naigaon" className="text-blue-600 underline hover:text-blue-800">Naigaon</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Standard "Service" is a Scam (And Why Deep Cleaning Matters)</h3>
        <p className="mb-4">
          Many local mechanics charge you ₹300-400 for a "service". Do you know what they actually do? They take out the plastic net filters, wash them under a tap, and wipe the outer plastic cover with a cloth. <strong>This does absolutely nothing to clean the actual cooling mechanics.</strong> True cooling restriction happens deep inside the aluminum fins of the evaporator coil and inside the cylindrical blower fan. Only high-pressure <strong>Foam Jet AC Cleaning</strong> can extract this grime.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service for Professional Cleaning?</h3>
        <p className="mb-4">
          Do not let aggregators like Urban Company or Justdial send untrained laborers who will spray water carelessly, potentially frying your AC's sensitive PCB (circuit board). Our certified technicians follow strict safety protocols using specialized waterproof AC jackets.
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Feature</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service (Deep Clean)</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Standard Local Mechanics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Coil Cleaning Method</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Anti-Bacterial Foam + Jet Pump</td>
                <td className="py-3 px-4 border-b text-red-500">Dry Brushing / Hand Spraying</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Blower Fan Cleaning</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">High-Pressure Wash</td>
                <td className="py-3 px-4 border-b text-red-500">Ignored completely</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Water Leak Protection</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Complete Drain Pipe Flushing</td>
                <td className="py-3 px-4 border-b text-red-500">Often overlooked</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Electronics Safety</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">PCB Covered & Sealed</td>
                <td className="py-3 px-4 border-b text-red-500">High Risk of Short Circuits</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Mess-Free Guarantee</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Specialized Water-Catchment Jacket</td>
                <td className="py-3 px-4 border-b text-red-500">Dirty water splashed on walls</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Comprehensive Cleaning Components</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Deep Cleaning</h4>
        <p className="mb-4">Our premium <strong>split AC cleaning</strong> covers both indoor and outdoor units. We install a waterproof jacket around the indoor unit so not a single drop of dirty water touches your walls. We pressure wash the cooling coils, blower, and filters, restoring showroom-level cooling.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Window AC Cleaning</h4>
        <p className="mb-4">For <strong>window AC cleaning</strong>, we meticulously pull the heavy AC chassis out of its outer cabinet. We use the high-pressure jet to clean both the front evaporator and the rear condenser coils, removing years of caked-on dirt and rust-inducing mud.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Evaporator & Cooling Coil Cleaning</h4>
        <p className="mb-4">The evaporator coil gets extremely cold, causing condensation. Dust sticks to this wet coil, forming a thick sludge. We use chemical foam to break down this sludge during <strong>AC coil cleaning</strong>, allowing the aluminum fins to transfer heat efficiently once again.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Blower Cleaning</h4>
        <p className="mb-4">If your AC is not throwing enough air, the cylindrical blower fan is choked with lint and dust. Our targeted <strong>AC blower cleaning</strong> removes this heavy debris, instantly increasing air velocity and reducing the load on the blower motor.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Water Tray & Drain Pipe Cleaning</h4>
        <p className="mb-4">Is water dripping inside your bedroom? Algae and slime build up in the water tray, eventually blocking the drain pipe. Our <strong>AC drain pipe cleaning</strong> flushes out this blockage with high pressure, permanently solving <strong>AC water leakage</strong> issues.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">The Transformative Benefits of Regular AC Cleaning</h3>
        
        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">1. Health Benefits (Eradicate the Bad Smell)</h4>
        <p className="mb-4">That "dirty socks" or musty smell coming from your AC? That is active black mold and bacteria being blown into your lungs. Our sanitization acts as a complete <strong>AC bad smell solution</strong>, significantly reducing allergens and asthma triggers in your home.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">2. Massive Electricity Savings</h4>
        <p className="mb-4">A choked AC cannot "breathe". The compressor is forced to run continuously to try and cool the room, drawing maximum amps. Deep cleaning restores airflow, allowing the compressor to turn off sooner, which can reduce your monthly power bill by up to 25-30%.</p>
        
        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">3. Extends Compressor Lifespan</h4>
        <p className="mb-4">When the outdoor condenser is choked with mud and debris, the compressor overheats rapidly. Routine <strong>outdoor unit cleaning</strong> ensures proper heat dissipation, preventing expensive compressor burnouts.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Signs Your AC Desperately Needs Deep Cleaning</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Weak Airflow:</strong> The fan speed is set to high, but you can barely feel the air.</li>
          <li><strong>AC Not Cooling:</strong> The air is mildly cool instead of bone-chilling cold.</li>
          <li><strong>Foul Odor:</strong> The room smells damp or sour immediately after turning the AC on.</li>
          <li><strong>Indoor Water Dripping:</strong> Water is leaking from the front panel down your wall.</li>
          <li><strong>Loud Noises:</strong> A clogged blower fan creates an imbalance, causing rattling and vibrating noises.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent Cleaning Charges</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service Plan</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">Standard Dry Service (Filter washing only)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹499</td></tr>
              <tr><td className="py-3 px-4 border-b"><strong>Split AC Foam Jet Deep Cleaning (Indoor + Outdoor)</strong></td><td className="py-3 px-4 border-b font-medium text-blue-600">₹649 - ₹899</td></tr>
              <tr><td className="py-3 px-4 border-b">Window AC Deep Jet Wash</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹599 - ₹799</td></tr>
              <tr><td className="py-3 px-4 border-b">Commercial Cassette AC Jet Cleaning</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1,199</td></tr>
              <tr><td className="py-3 px-4 border-b"><a href="/amc-service" className="text-blue-600 hover:underline">Annual Maintenance Contract (Multiple Jet Cleans)</a></td><td className="py-3 px-4 border-b font-medium text-blue-600">Contact for Quote</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Note: Prices may vary slightly based on AC tonnage (1.0 to 2.0 Ton) and extreme dirt conditions requiring chemical soak time.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Brands We Deep Clean</h3>
        <p className="mb-4">We are experts in dismantling and safely washing all major brands without harming their delicate sensors:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Carrier", "Hitachi", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General", "Haier", "Godrej"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Service Areas: Guaranteed Same Day AC Cleaning</h3>
        <p className="mb-4">Don't wait days for a mechanic. We operate a massive fleet of technicians offering rapid <strong>same day AC cleaning</strong> across the northern suburbs:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Nalasopara</strong> (East/West), <strong>Vasai</strong>, <strong>Virar</strong> (Global City, Bolinj), <strong>Naigaon</strong>, and <strong>Bhayandar</strong> (Navghar, Mira Bhayandar Road).
        </p>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - AC Deep Cleaning</h3>
        <div className="space-y-4 mb-10">
          {[
            {q: "What is the difference between normal service and deep cleaning?", a: "Normal service is superficial; a mechanic just washes the top plastic filters under a tap. Deep cleaning uses high-pressure jet pumps and specialized foam chemicals to clean the deep aluminum coils, blower fan, and outdoor condenser."},
            {q: "How much time does Foam Jet Deep Cleaning take?", a: "A thorough Split AC deep clean covering both the indoor and outdoor units takes approximately 45 to 60 minutes."},
            {q: "Will the jet spray ruin my wall paint or wallpaper?", a: "Not at all. We use a specialized, heavy-duty waterproof jacket that perfectly wraps around your indoor unit. All the dirty water flows down a funnel straight into a bucket. Your walls remain completely dry."},
            {q: "Is Foam Jet cleaning safe for my Inverter AC's PCB board?", a: "Yes. Our certified technicians strictly wrap and seal the electronic control board (PCB) and motor areas with plastic before spraying any water. Safety is our top priority."},
            {q: "How often should I get my AC deep cleaned?", a: "If you live in dusty or coastal areas (like Vasai or Virar), or if you run the AC every night, you must deep clean it every 6 months. For occasional use, once a year before summer is mandatory."},
            {q: "Can deep cleaning fix my AC's bad smell?", a: "Yes. The sour or 'dirty socks' smell is caused by black mold and algae growing inside the wet evaporator coil and drain pan. Our antibacterial foam explicitly kills this mold and removes the smell."},
            {q: "Will deep cleaning solve indoor water leakage?", a: "In 90% of cases, yes. Indoor water leakage happens when the drain tray or drain pipe is choked with jelly-like algae. The high-pressure jet completely clears this blockage."},
            {q: "Does cleaning the outdoor unit really matter?", a: "It is critical. The outdoor unit (condenser) releases the heat absorbed from your room. If it is choked with dust and bird feathers, the compressor overheats and can permanently burn out."},
            {q: "Why is my AC throwing very little air?", a: "The cylindrical blower fan inside your indoor unit is choked with heavy dust and lint, preventing it from scooping and throwing air. Our jet wash removes this lint, instantly increasing airflow."},
            {q: "Will deep cleaning reduce my electricity bill?", a: "Yes. A clean AC transfers heat efficiently and blows cold air faster. This allows the thermostat to turn off the power-hungry compressor sooner, saving you up to 30% on electricity."},
            {q: "Do you clean Window ACs?", a: "Yes, we pull the heavy window AC chassis out of the wall cabinet and pressure wash the entire unit—both front and back coils—thoroughly."},
            {q: "Can you deep clean Cassette or Tower ACs in my office?", a: "Absolutely. We are equipped to handle large-scale commercial AC deep cleaning for cassette units and ductable setups in offices and restaurants."},
            {q: "What chemicals do you use for Foam Jet cleaning?", a: "We use professional-grade, non-corrosive, alkaline-based AC coil cleaners. They aggressively break down grease and mold but are completely safe for the aluminum fins and copper pipes."},
            {q: "Can I just use a toothbrush to clean the coils myself?", a: "No. The aluminum fins are razor-thin and bend very easily. Brushing them will crush the fins, permanently blocking airflow and ruining the coil. Only high-pressure water safely pushes the dirt out."},
            {q: "What if my AC still isn't cooling after a deep clean?", a: "If the AC is completely clean and still not cooling, it indicates a mechanical failure, such as low refrigerant gas (leakage) or a weak capacitor. Our technician will diagnose this for you."},
            {q: "Is gas checking included in the deep cleaning service?", a: "Yes, as a part of our performance check, our technician will assess the cooling output. If we suspect low gas, we will attach a gauge to check the pressure levels and advise you accordingly."},
            {q: "Do I need to cover my furniture before the service?", a: "It is a good idea to move laptops or expensive items directly below the AC, but our waterproof jacket system ensures 99% mess-free operation."},
            {q: "Why do local mechanics refuse to use a jet pump?", a: "Because it takes more time, requires expensive equipment, and they lack the technical skill to protect the PCB from water damage. They prefer taking ₹300 for 10 minutes of useless filter washing."},
            {q: "Do you offer emergency AC cleaning?", a: "Yes, if your AC starts heavily leaking water indoors during the night, you can book us for priority emergency service the next morning."},
            {q: "How can I book an AC deep cleaning appointment?", a: "Click the WhatsApp button on our website for an instant response, or call us at +91 81159 53195 to secure your same-day booking."}
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Showroom-Level Cooling Again!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Stop breathing dirty air and paying high electricity bills. Trust Smart AC Service for a genuine, high-pressure foam jet deep clean. Read our <a href="/blog" className="text-blue-600 underline">cooling tips blog</a> or book your service instantly today.
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
      Professional AC Deep Cleaning <span className="text-grad-brand">Service</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Is your AC throwing warm, smelly air? Our premium Foam Jet Deep Cleaning eradicates mold, unclogs drain pipes, and boosts cooling efficiency instantly. Book same-day service across Vasai, Virar & Nalasopara."
      />
    </>
  );
}
