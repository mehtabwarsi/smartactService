import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC AMC Service Near Me | Annual Maintenance Contract Plans',
  description: 'Protect your AC with our premium Annual Maintenance Contract (AMC). Preventive AC maintenance, deep cleaning, and priority support in Vasai, Virar & Nalasopara.',
  keywords: 'AC AMC, AC AMC Service, Annual Maintenance Contract AC, AC Maintenance Contract, Split AC AMC, Window AC AMC, Commercial AC AMC, AC AMC Near Me, AC Maintenance Service, Preventive AC Maintenance',
  alternates: { canonical: 'https://smartact-service.vercel.app/amc-service' },
  openGraph: {
    title: 'AC AMC Service Near Me | Annual Maintenance Contract Plans',
    description: 'Protect your AC with our premium Annual Maintenance Contract (AMC). Preventive AC maintenance, deep cleaning, and priority support in Vasai, Virar & Nalasopara.',
    url: 'https://smartact-service.vercel.app/amc-service',
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
        "@id": "https://smartact-service.vercel.app/amc-service#localbusiness",
        "name": "Smart AC Service",
        "description": "Premium AC Annual Maintenance Contract (AMC) provider offering comprehensive preventive maintenance plans.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/amc-service",
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
      },
      {
        "@type": "Service",
        "serviceType": "AC Annual Maintenance Contract (AMC)",
        "provider": {
          "@id": "https://smartact-service.vercel.app/amc-service#localbusiness"
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
            "name": "AC AMC Service",
            "item": "https://smartact-service.vercel.app/amc-service"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in an AC AMC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An AC Annual Maintenance Contract (AMC) includes scheduled routine services (usually 2 to 4 times a year), deep cleaning of filters and coils, gas pressure checks, electrical inspections, and priority VIP support during sudden breakdowns."
            }
          },
          {
            "@type": "Question",
            "name": "How does Preventive AC Maintenance save money?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Preventive maintenance keeps the AC coils clean and the gas levels optimized, which reduces the electrical load on the compressor. This lowers your monthly electricity bills by up to 30% and prevents expensive compressor burnouts."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide Commercial AC AMC for offices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer tailored Commercial AC AMC plans for offices, restaurants, and clinics. This covers cassette ACs, ductable units, and multiple split AC setups to ensure zero business downtime."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">AC AMC Service: Total Protection for Your Air Conditioner</h2>
        <p className="text-lg leading-relaxed mb-6">
          Air conditioners are complex, expensive machines that operate under immense pressure, especially during the sweltering Indian summers. Waiting for your AC to break down before calling a mechanic is a costly mistake. <strong>Smart AC Service</strong> offers premium <strong>AC Annual Maintenance Contracts (AMC)</strong> designed to keep your units running flawlessly year-round. From <strong>residential AMC</strong> plans in <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a> and <a href="/ac-service-vasai" className="text-blue-600 underline hover:text-blue-800">Vasai</a> to heavy-duty <strong>commercial AC AMC</strong> for offices in <a href="/ac-repair-virar" className="text-blue-600 underline hover:text-blue-800">Virar</a>, <a href="/ac-service-naigaon" className="text-blue-600 underline hover:text-blue-800">Naigaon</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>, we ensure your comfort is never interrupted.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What Is an AC AMC (Annual Maintenance Contract)?</h3>
        <p className="mb-4">
          An <strong>AC AMC</strong> is a comprehensive care plan for your air conditioning system. Instead of paying high, unpredictable repair costs when the AC suddenly stops working, you pay a small, fixed annual fee. In return, we take complete responsibility for the health of your AC. This includes periodic <strong>preventive AC maintenance</strong> (quarterly or half-yearly), rigorous deep cleaning, priority breakdown attendance, and heavy discounts on spare parts.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service Over Aggregators?</h3>
        <p className="mb-4">
          When you buy an AMC from giant aggregators like Urban Company, you get a different, random technician every time they visit. They do not know the history of your machine. With Smart AC Service, you get a dedicated local team that treats your AC like their own.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Benefit</th>
                <th className="py-3 px-4 text-left font-semibold text-blue-900 border-b">Smart AC Service (AMC)</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600 border-b">Local / Aggregator Non-AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">Priority Breakdown Service</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">VIP 24-Hour Response Guarantee</td>
                <td className="py-3 px-4 border-b text-red-500">Wait 2-3 days during peak summer</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Preventive Care</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Scheduled visits (We call you)</td>
                <td className="py-3 px-4 border-b text-red-500">Reactive only (You call when it breaks)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Spare Parts Cost</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Up to 20% Discount for AMC Members</td>
                <td className="py-3 px-4 border-b text-red-500">Full MRP + Hidden markups</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Technician Consistency</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Familiar, dedicated local engineers</td>
                <td className="py-3 px-4 border-b text-red-500">Random, unverified gig workers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Tailored AMC Plans for Every Need</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Residential Split & Window AC AMC</h4>
        <p className="mb-4">Perfect for homes. Choose between our <strong>Half-Yearly AC Service</strong> (2 visits a year) or <strong>Quarterly AC Service</strong> (4 visits a year). This covers both <strong>Split AC AMC</strong> and <strong>Window AC AMC</strong>. We ensure your family sleeps comfortably, especially during the suffocating Mumbai summers.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Commercial & Office AC AMC</h4>
        <p className="mb-4">If the AC fails in your restaurant or office, productivity halts and customers leave. Our <strong>Commercial AC AMC</strong> is built for heavy usage. We conduct intensive <strong>preventive maintenance</strong> during off-hours, ensuring zero downtime for your business. This covers cassette ACs, tower units, and multi-split systems.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">What Does an AMC Visit Include? (The Comprehensive Health Check)</h3>
        <p className="mb-4">Our scheduled maintenance visits are not just simple "wash and go" jobs. Our engineers perform a rigorous 15-point <strong>AC Performance Check</strong>:</p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Deep Foam Cleaning:</strong> Complete <a href="/ac-deep-cleaning" className="text-blue-600 underline">Foam Jet deep cleaning</a> of the indoor cooling coil (evaporator) and outdoor condenser to remove mud and black mold.</li>
          <li><strong>Gas Pressure Inspection:</strong> Precision checks of the refrigerant levels using manifold gauges. Early detection of minor leaks prevents the compressor from running dry and burning out.</li>
          <li><strong>Electrical Safety Check:</strong> Inspecting the run and start capacitors, tightening loose electrical terminal connections, and measuring amp-draw to prevent short circuits.</li>
          <li><strong>Drain Pipe & Water Tray Cleaning:</strong> High-pressure flushing of the drainage system to guarantee zero indoor water leakage.</li>
          <li><strong>Blower Fan Calibration:</strong> Cleaning the cylindrical blower to ensure maximum air velocity and silent operation.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">The Financial Reality: Why Regular Maintenance Saves You Money</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">1. Slashing Electricity Bills</h4>
        <p className="mb-4">A dirty AC forces the compressor to work 30% harder to push air through clogged filters and mud-caked coils. A clean AC reaches the desired temperature faster and turns the compressor off sooner. Over a year, the electricity savings alone completely pay for the cost of the AMC.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">2. Extending Compressor Life</h4>
        <p className="mb-4">The compressor is the heart of the AC, and replacing it costs thousands of rupees. <strong>Preventive maintenance</strong> ensures the outdoor unit breathes easily and the gas levels are correct, preventing the compressor from overheating and dying prematurely.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">3. Preventing Expensive Emergency Repairs</h4>
        <p className="mb-4">During peak summer, independent mechanics double their visiting charges. As an AMC member, you bypass these inflated costs. You get VIP priority attendance and heavily discounted genuine spare parts.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent AMC Pricing Comparison</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">AMC Plan Tier</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Visits Included</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Starting Price (Per AC)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b"><strong>Silver Plan (Basic Preventive)</strong></td><td className="py-3 px-4 border-b text-gray-600">2 Services / Year</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1,199</td></tr>
              <tr><td className="py-3 px-4 border-b"><strong>Gold Plan (Standard Residential)</strong></td><td className="py-3 px-4 border-b text-gray-600">3 Services / Year</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1,699</td></tr>
              <tr><td className="py-3 px-4 border-b"><strong>Platinum Plan (Commercial/Heavy Use)</strong></td><td className="py-3 px-4 border-b text-gray-600">4 Services / Year</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹2,199</td></tr>
              <tr><td className="py-3 px-4 border-b text-gray-500 italic" colSpan={3}>*Note: Comprehensive AMC plans (which include the cost of all spare parts and gas) are also available upon site inspection. Volume discounts apply for offices with 3+ ACs.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Brands We Protect</h3>
        <p className="mb-4">Our engineers are factory-trained to maintain the complex Inverter PCBs and mechanics of all major brands:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Carrier", "Hitachi", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General", "Haier", "Godrej"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Service Areas: Unmatched Local Reach</h3>
        <p className="mb-4">We don't outsource our work. Our in-house technicians operate dedicated routes, ensuring blazing-fast emergency support for our AMC clients across:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Nalasopara</strong> (East/West), <strong>Vasai</strong>, <strong>Virar</strong> (Global City, Bolinj), <strong>Naigaon</strong>, and <strong>Bhayandar</strong> (Navghar, Mira Bhayandar Road, Indralok).
        </p>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - AC AMC Service</h3>
        <div className="space-y-4 mb-10">
          {[
            { q: "What is the difference between Non-Comprehensive and Comprehensive AMC?", a: "Non-Comprehensive AMC covers all routine service visits and diagnostic labor, but you pay for any spare parts or gas if required. A Comprehensive AMC covers routine services PLUS the cost of all spare parts (like compressors, PCBs, gas) during the contract year." },
            { q: "How many services do I actually need in a year?", a: "For normal residential use in Mumbai's dusty/coastal environment, 2 to 3 services a year are ideal. For commercial spaces or homes that run the AC 24/7, a quarterly plan (4 services) is highly recommended." },
            { q: "If my AC breaks down between scheduled AMC visits, do I have to pay a visiting charge?", a: "No! As an AMC contract holder, all breakdown diagnostic visits are completely free. You only pay for spare parts if your contract is non-comprehensive." },
            { q: "Does the AMC include Foam Jet Deep Cleaning?", a: "Yes. Our standard AMC plans include thorough wet services using high-pressure jet pumps to ensure the cooling coils are completely free of mold and mud." },
            { q: "Is gas filling included in the standard AMC?", a: "Gas filling is not included in the standard (Non-Comprehensive) AMC. However, we check the gas pressure during every visit, and if a refill is needed, AMC members get a heavy discount on the gas charging cost." },
            { q: "Do I have to remember to call you for my scheduled service?", a: "Not at all. We maintain a digital CRM system. Our support team will call you a week before your service is due to schedule a convenient time for the technician's visit." },
            { q: "Can I buy an AMC for a very old Window AC?", a: "Yes, we offer AMC plans for Window ACs. However, for extremely old units (10+ years), we will conduct a preliminary health check before approving a Comprehensive contract." },
            { q: "What happens if I move to a new house within your service area?", a: "Your AMC contract is fully transferable. If you move from Vasai to Virar, for example, your contract moves with you. (Uninstallation/Installation charges apply for the shifting process)." },
            { q: "Do you provide AMC for offices with multiple Cassette ACs?", a: "Yes, we specialize in Commercial AC AMC. We offer customized, discounted contracts for businesses with multiple Split, Window, or Cassette units." },
            { q: "Why should I buy an AMC instead of just calling a mechanic when it breaks?", a: "Because running an unmaintained AC increases your electricity bill by 30% and drastically shortens the life of the compressor. An AMC prevents breakdowns, saves electricity, and guarantees you priority service when you need it most." },
            { q: "Will an AMC fix the 'dirty socks' smell from my AC?", a: "Yes. That smell is black mold. The routine deep cleaning included in your AMC eradicates this mold, ensuring your family breathes healthy, odorless air." },
            { q: "How soon do you respond to emergency breakdowns for AMC customers?", a: "AMC customers get VIP Priority routing. During peak summer, while regular customers might wait 24-48 hours, AMC members are attended to within hours." },
            { q: "Are the spare parts used during AMC repairs genuine?", a: "100% Yes. We only use OEM (Original Equipment Manufacturer) spare parts. We never compromise the integrity of your machine with cheap duplicate parts." },
            { q: "Can I upgrade my Non-Comprehensive plan to a Comprehensive one later?", a: "Yes, you can upgrade after our technician inspects the current health of your air conditioner and verifies it is in good working order." },
            { q: "Do you service Inverter ACs under the AMC plan?", a: "Absolutely. Our technicians are highly trained in the electronics and specialized refrigerants (like R32) used in modern Inverter ACs." },
            { q: "Is the AMC fee refundable if I sell my AC?", a: "While the fee is non-refundable, the AMC is transferable to the new owner of the AC, which actually increases the resale value of your machine." },
            { q: "What is an 'Electrical Safety Check'?", a: "During every visit, we check the amp-draw of the compressor, inspect the run/start capacitors for bulging, and tighten all terminal wires. This prevents dangerous short circuits and fires." },
            { q: "Does the AMC cover remote control repairs?", a: "No, plastic body parts, remote controls, and air filters (if torn) are considered consumable/physical damage items and are not covered under free replacement." },
            { q: "Are your technicians background verified?", a: "Yes, since our technicians will be visiting your home multiple times a year, every team member undergoes strict background checks and continuous training." },
            { q: "How do I sign up for an AC AMC today?", a: "It’s very easy. Click the WhatsApp button or call us at +91 81159 53195. We will schedule a first visit to inspect and service your AC, and you can sign the contract on the spot." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Your Comfort With an AMC Today!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't wait for your AC to break down in the middle of a hot summer night. Join hundreds of smart homeowners and businesses who trust Smart AC Service for year-round peace of mind. Check our <a href="/blog" className="text-blue-600 underline">AC maintenance guide</a> or sign up for an AMC now.
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
      AC Annual Maintenance Contract <span className="text-grad-brand">(AMC)</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Protect your AC from sudden breakdowns and expensive repairs. Our premium AMC service offers preventive maintenance, deep cleaning, and VIP priority support across Nalasopara, Vasai, Virar, Naigaon, and Bhayandar."
      />
    </>
  );
}
