import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC Installation Service | Pro Split & Window AC Fitting',
  description: 'Top-rated AC Installation Near Me. Expert split & window AC installation, shifting, and copper pipe fitting across Nalasopara, Vasai, Virar & Bhayandar.',
  keywords: 'AC Installation, Split AC Installation, Window AC Installation, AC Installation Near Me, AC Installation Service, AC Installation Charges, Professional AC Installation, AC Installation in Nalasopara, AC Installation in Vasai, AC Installation in Virar, AC Installation in Naigaon, AC Installation in Bhayandar',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-installation' },
  openGraph: {
    title: 'AC Installation Service | Pro Split & Window AC Fitting',
    description: 'Top-rated AC Installation Near Me. Expert split & window AC installation, shifting, and copper pipe fitting across Nalasopara, Vasai, Virar & Bhayandar.',
    url: 'https://smartact-service.vercel.app/ac-installation',
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
        "@id": "https://smartact-service.vercel.app/ac-installation#localbusiness",
        "name": "Smart AC Service",
        "description": "Professional AC installation, reinstallation, and shifting services for all leading brands.",
        "image": "https://smartact-service.vercel.app/icon.png",
        "telephone": "+91 81159 53195",
        "url": "https://smartact-service.vercel.app/ac-installation",
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
        "serviceType": "AC Installation Service",
        "provider": {
          "@id": "https://smartact-service.vercel.app/ac-installation#localbusiness"
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
            "name": "AC Installation",
            "item": "https://smartact-service.vercel.app/ac-installation"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the standard AC installation charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our professional AC installation charges start from ₹1,299 for Split ACs and ₹899 for Window ACs. Costs may vary if extra copper piping, electrical wiring, or specialized mounting brackets are required."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide same day AC installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer same day AC installation services across Nalasopara, Vasai, Virar, Naigaon, and Bhayandar to ensure you don't suffer in the heat."
            }
          },
          {
            "@type": "Question",
            "name": "Is vacuuming necessary during Split AC installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Vacuuming the copper pipes removes moisture and non-condensable gases, preventing compressor failure and ensuring optimal cooling efficiency. We always use a vacuum pump during installation."
            }
          }
        ]
      }
    ]
  };

  const seoContent = (
    <div className="text-gray-700 space-y-10">
      <div className="seo-article">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional AC Installation Services: Done Right the First Time</h2>
        <p className="text-lg leading-relaxed mb-6">
          Buying a new air conditioner is a significant investment. However, even the most expensive, top-tier AC will fail to cool efficiently if it is installed incorrectly. Proper <strong>AC installation</strong> is a highly technical job requiring precision, specialized tools, and a deep understanding of thermodynamics and electrical safety. At <strong>Smart AC Service</strong>, we are the leading experts for flawless <strong>AC installation near me</strong>. We proudly serve residential and commercial clients across <a href="/ac-repair-nalasopara" className="text-blue-600 underline hover:text-blue-800">Nalasopara</a>, <a href="/ac-service-vasai" className="text-blue-600 underline hover:text-blue-800">Vasai</a>, <a href="/ac-repair-virar" className="text-blue-600 underline hover:text-blue-800">Virar</a>, <a href="/ac-service-naigaon" className="text-blue-600 underline hover:text-blue-800">Naigaon</a>, and <a href="/ac-repair-bhayandar" className="text-blue-600 underline hover:text-blue-800">Bhayandar</a>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Proper Installation Matters</h3>
        <p className="mb-4">
          A poorly executed installation leads to a cascade of problems: severe water leakage inside your room, rapid gas leaks due to bad copper flaring, excessive compressor noise from uneven mounting, and shockingly high electricity bills. More importantly, improper installation voids the manufacturer's warranty. Our certified technicians ensure that every <strong>split AC fitting</strong> and <strong>window AC fitting</strong> meets stringent brand specifications.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Smart AC Service Over Local Competitors?</h3>
        <p className="mb-4">
          Platforms like Urban Company, Sulekha, and Justdial act as middlemen, often dispatching unverified contractors who cut corners to finish jobs quickly. When you choose us, you are choosing a dedicated, locally trusted company that stands by its workmanship.
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
                <td className="py-3 px-4 border-b">Vacuum Pump Usage</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Mandatory for all Split ACs</td>
                <td className="py-3 px-4 border-b text-red-500">Rarely Used (Shortcuts taken)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Pricing Structure</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Transparent, No Hidden Fees</td>
                <td className="py-3 px-4 border-b text-red-500">Inflated costs for copper & wire</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Technician Expertise</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">In-House Certified Experts</td>
                <td className="py-3 px-4 border-b text-red-500">Randomly Assigned Handymen</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Installation Warranty</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">30-Day Gas Leak & Mount Warranty</td>
                <td className="py-3 px-4 border-b text-red-500">Zero Guarantee</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Response Time</td>
                <td className="py-3 px-4 border-b text-green-600 font-medium">Same Day Installation</td>
                <td className="py-3 px-4 border-b text-red-500">Subject to availability (24-48 hrs)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Comprehensive Installation Services</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Split AC Installation</h4>
        <p className="mb-4"><strong>Split AC installation</strong> is complex. It requires perfectly drilling the wall to connect the indoor and outdoor units without damaging your interiors. We expertly handle <strong>indoor unit mounting</strong> (ensuring a slight tilt for proper water drainage) and <strong>outdoor unit installation</strong> on heavy-duty brackets to prevent dangerous vibrations.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Window AC Installation</h4>
        <p className="mb-4">While simpler, a <strong>window AC installation</strong> must be perfectly sealed. If gaps are left around the frame, hot air seeps in, destroying cooling efficiency. We ensure a tight, secure <strong>window AC fitting</strong> with proper insulation and sturdy support frames.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Inverter AC Installation</h4>
        <p className="mb-4">Inverter air conditioners use advanced R32 or R410A refrigerants which operate at much higher pressures than older models. Therefore, <strong>inverter AC installation</strong> strictly requires high-quality copper piping, flawless flaring, and mandatory vacuuming to prevent explosive pressure failures.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Commercial & Office AC Installation</h4>
        <p className="mb-4">For businesses, we provide robust <strong>commercial AC installation</strong>. Whether you need a network of <strong>cassette AC installations</strong> for a restaurant or heavy-duty split units for an <strong>office AC installation</strong>, we deploy teams that can complete large-scale projects swiftly with minimal workplace disruption.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">New AC Installation vs. Reinstallation</h4>
        <p className="mb-4">We install brand-new units straight out of the box with precision. If you are relocating, we provide seamless <strong>old AC reinstallation</strong> and <strong>AC shifting</strong>. We carefully pump down the gas during uninstallation, transport the unit safely, and reinstall it at your new location without any refrigerant loss.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Critical Technical Components of Installation</h3>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Copper Pipe Installation</h4>
        <p className="mb-4">The lifeline of your AC. A bad flare joint in the copper pipe causes slow gas leaks. We provide expert <strong>copper pipe installation</strong> and <strong>copper pipe extension</strong> using thick-gauge, high-quality copper that withstands high refrigerant pressures.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Drain Pipe Installation</h4>
        <p className="mb-4">Improper slope in the drain pipe guarantees that water will leak inside your bedroom. Our technicians meticulously calculate the gradient during <strong>AC drain pipe installation</strong> to ensure flawless gravity-fed water drainage.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">Vacuum Pump Installation Process</h4>
        <p className="mb-4"><strong>This is non-negotiable.</strong> Air contains moisture. If ambient air remains in the copper pipes when the refrigerant is released, the moisture reacts with compressor oil, forming sludge and acid that destroys the compressor. We use a high-grade <strong>vacuum pump</strong> to evacuate the lines completely before opening the gas valves.</p>

        <h4 className="text-xl font-medium text-gray-800 mt-6 mb-2">AC Wall Mount & Bracket Installation</h4>
        <p className="mb-4">Outdoor units are heavy. A cheap bracket will rust and collapse, potentially causing fatal accidents. We supply and install premium, anti-rust, powder-coated brackets during <strong>AC bracket installation</strong>, securing them with heavy-duty anchor bolts into solid concrete.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Brands We Install</h3>
        <p className="mb-4">Our engineers are trained in the specific installation protocols of every major global brand:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LG", "Samsung", "Daikin", "Blue Star", "Voltas", "Carrier", "Hitachi", "Panasonic", "Lloyd", "IFB", "Mitsubishi", "O General", "Haier", "Godrej"].map(brand => (
            <span key={brand} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">{brand}</span>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Common Installation Mistakes We Avoid</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Skipping the Vacuum Pump:</strong> Local mechanics often use the "purge" method (using AC gas to push air out). This is illegal for R32 gas and ruins the compressor. We always vacuum.</li>
          <li><strong>Bad Flaring:</strong> Rushing the pipe flaring creates microscopic gaps. The AC will cool fine initially, but gas will leak out in 3-4 months.</li>
          <li><strong>Incorrect Indoor Unit Placement:</strong> Installing the unit too close to the ceiling chokes the air intake, drastically reducing cooling capacity. We maintain exact clearance margins.</li>
          <li><strong>Ignoring Electrical Load:</strong> Connecting a 2-Ton AC to a standard 5-Amp socket is a massive fire hazard. We guide you on proper MCB and wiring requirements.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Transparent AC Installation Charges</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Service Category</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Estimated Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-3 px-4 border-b">Split AC Installation</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹1,299</td></tr>
              <tr><td className="py-3 px-4 border-b">Window AC Installation</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹899</td></tr>
              <tr><td className="py-3 px-4 border-b">AC Safe Uninstallation</td><td className="py-3 px-4 border-b font-medium text-blue-600">From ₹899</td></tr>
              <tr><td className="py-3 px-4 border-b">Outdoor Bracket (Premium Powder Coated)</td><td className="py-3 px-4 border-b font-medium text-blue-600">₹700 - ₹900</td></tr>
              <tr><td className="py-3 px-4 border-b">Extra Copper Piping (per foot)</td><td className="py-3 px-4 border-b font-medium text-blue-600">At Market Rates</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Note: <strong>AC installation cost</strong> may vary based on exact material requirements (copper wire length, core cutting, scaffolding for high-rise buildings, etc.). A final quote is provided before starting work.</p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Service Areas: Hyper-Local Dominance</h3>
        <p className="mb-4">We are the fastest responding installation crew in the northern Mumbai suburbs. We provide rapid <strong>same day installation</strong> and <strong>emergency installation</strong> across:</p>
        <p className="font-medium text-gray-800 mb-6 leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Nalasopara</strong> (East & West), <strong>Vasai</strong> (Road & Station), <strong>Virar</strong> (Global City, Bolinj, etc.), <strong>Naigaon</strong>, and <strong>Bhayandar</strong> (Navghar, Indralok, Maxus Mall area).
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Flawless Installation Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { step: 1, title: "Site Inspection", desc: "We evaluate wall strength, electrical capacity, and optimal unit placement." },
            { step: 2, title: "Mounting & Drilling", desc: "Clean core-cutting and perfect leveling for both indoor and outdoor units." },
            { step: 3, title: "Piping & Vacuuming", desc: "Flawless copper flaring, secure connections, and strict vacuum pump evacuation." },
            { step: 4, title: "Testing & Demo", desc: "Gas release, amp-draw checking, cooling test, and a complete usage demo." }
          ].map(p => (
            <div key={p.step} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">{p.step}</div>
              <h4 className="font-bold text-gray-800 mb-2">{p.title}</h4>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">Frequently Asked Questions (FAQs) - AC Installation</h3>
        <div className="space-y-4 mb-10">
          {[
            { q: "How much does AC installation cost?", a: "Standard split AC installation charges start from ₹1,299, and Window AC installation starts at ₹899. Additional materials like extra copper pipes or outdoor brackets are charged extra based on actual usage." },
            { q: "Do you provide AC installation on the same day?", a: "Yes, we guarantee same-day AC installation across Nalasopara, Vasai, Virar, Naigaon, and Bhayandar, subject to early booking." },
            { q: "Is it necessary to use a vacuum pump during installation?", a: "100% yes. Vacuuming removes air and moisture from the copper lines. Without it, moisture mixes with refrigerant, creating sludge that destroys the compressor. It is mandatory for R32 and R410A gases." },
            { q: "What is included in standard split AC installation?", a: "It includes mounting the indoor unit, drilling one hole in the wall, mounting the outdoor unit (bracket extra), connecting the standard copper/drain pipes provided in the box, vacuuming, and testing." },
            { q: "Do you supply the outdoor bracket stand?", a: "Yes, we carry premium, heavy-duty, powder-coated MS brackets. They are highly rust-resistant and safely support the heavy outdoor compressor unit. (Cost is additional)." },
            { q: "What if the copper pipe provided by the brand is too short?", a: "We provide high-quality copper pipe extensions. Our experts meticulously braze or flare the new piping to the existing line and insulate it thoroughly to prevent cooling loss." },
            { q: "Will you do the electrical wiring?", a: "We connect the electrical wires between the indoor and outdoor units. However, bringing the main power supply from your home's MCB board to the AC switch requires an electrician." },
            { q: "Do I need permission to install an outdoor unit?", a: "If you live in a high-rise society in areas like Global City (Virar) or Yashwant Gaurav (Nalasopara), you may need society permission to mount the outdoor unit on the exterior facade." },
            { q: "What happens if my newly installed AC leaks water indoors?", a: "Indoor water leakage immediately after installation is a sign of an improper drain pipe slope or an un-leveled indoor unit. We provide a 30-day installation warranty to fix any such issues instantly." },
            { q: "Can you install an AC purchased online from Amazon or Flipkart?", a: "Absolutely. Whether you bought your AC locally from Croma/Reliance or online, we provide professional installation services for all brands." },
            { q: "How much time does it take to install a split AC?", a: "A standard split AC installation takes approximately 1.5 to 2 hours. Complex installations requiring scaffolding or long pipe extensions may take longer." },
            { q: "Do you provide AC uninstallation and shifting?", a: "Yes, we provide end-to-end AC shifting. We safely uninstall the old unit by pumping down the refrigerant (to save your gas), transport it, and reinstall it at your new location." },
            { q: "What is core cutting, and do you do it?", a: "Core cutting uses a specialized diamond drill to make a perfectly clean, round hole in a concrete wall for the copper pipes to pass through, without damaging the paint. We arrange core cutting at an additional cost." },
            { q: "Is gas charging required during a new AC installation?", a: "No. Brand new outdoor units come pre-charged with sufficient refrigerant gas for the standard pipe length (usually 3 meters). Gas is only added if pipe length exceeds the manufacturer's limit." },
            { q: "Can you install a Cassette or Commercial AC?", a: "Yes, our senior technicians specialize in commercial AC installation, including cassette ACs, ductable units, and heavy-duty tower ACs for offices and restaurants." },
            { q: "Where is the best place to mount the indoor unit?", a: "The indoor unit should be mounted high on a wall with at least 6 inches of clearance from the ceiling for proper air intake. It should face the seating area for maximum cooling efficiency." },
            { q: "Where should the outdoor unit be placed?", a: "The outdoor unit must be placed in a well-ventilated, accessible area (for future servicing), away from direct prolonged sunlight if possible, and on a sturdy, level bracket." },
            { q: "Do you offer any warranty on installation?", a: "Yes, we provide a 30-day warranty on our installation workmanship, covering gas leaks from flare joints and mounting stability issues." },
            { q: "Why do you insist on premium copper pipes?", a: "Cheap, thin copper pipes cannot handle the extreme operating pressures of modern Inverter ACs (especially those using R32 gas) and will burst or leak. We only use thick-gauge copper." },
            { q: "How can I book an AC installation appointment?", a: "It’s very easy. Click the WhatsApp button or call us directly at +91 81159 53195. We will schedule a technician visit immediately." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Q{idx + 1}. {faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-8 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Professional AC Installation Now!</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Don't risk your expensive new air conditioner with amateur mechanics. Trust the certified experts at Smart AC Service for flawless, vacuum-pumped installation. Read our <a href="/blog" className="text-blue-600 underline">AC buying guide</a> or contact us to book your slot today.
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
      Expert AC Installation <span className="text-grad-brand">Service</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Looking for a professional AC installation near me? We provide flawless split and window AC fitting, copper piping, and reinstallation across Nalasopara, Vasai, Virar, and Bhayandar. Book same-day installation now!"
      />
    </>
  );
}
