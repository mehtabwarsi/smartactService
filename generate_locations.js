const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\DELL\\Desktop\\acservice';

const locations = [
  {
    path: 'ac-repair-nalasopara',
    location: 'Nalasopara',
    title: 'AC Repair Nalasopara | Best AC Service & Installation',
    desc: 'Top-rated AC repair and service in Nalasopara East & West. We provide fast gas filling, deep cleaning, and AC installation near you. Call now!',
    keywords: 'AC Repair Nalasopara, AC Service Nalasopara, Split AC Repair Nalasopara, Window AC Repair Nalasopara, AC Installation Nalasopara',
    h1: 'Expert AC Repair & Service in Nalasopara',
    heroDesc: 'Looking for reliable AC repair in Nalasopara? Our certified technicians provide fast, affordable, and guaranteed AC service in Nalasopara East and West.'
  },
  {
    path: 'ac-service-vasai',
    location: 'Vasai',
    title: 'AC Service Vasai | Fast AC Repair & Gas Filling',
    desc: 'Professional AC service in Vasai. Get same-day AC repair, installation, and gas refilling from expert technicians. Honest pricing, 100% satisfaction guaranteed.',
    keywords: 'AC Service Vasai, AC Repair Vasai, AC Gas Filling Vasai, AC Installation Vasai, Best AC Repair Near Me',
    h1: 'Premium AC Service & Repair in Vasai',
    heroDesc: 'Experience the best AC service in Vasai. We specialize in split and window AC repair, deep cleaning, and installation across Vasai Road and surrounding areas.'
  },
  {
    path: 'ac-repair-virar',
    location: 'Virar',
    title: 'AC Repair Virar | Same Day AC Service & Maintenance',
    desc: 'Trusted AC repair in Virar East & West. 24/7 emergency AC service, split AC repair, window AC repair, and affordable gas filling in Virar.',
    keywords: 'AC Repair Virar, AC Service Virar, 24 Hour AC Repair Virar, AC Cleaning Virar',
    h1: 'Reliable AC Repair & Installation in Virar',
    heroDesc: 'Need urgent AC repair in Virar? Our fast-response team delivers top-tier AC service, maintenance, and gas charging for all brands in Virar East and West.'
  },
  {
    path: 'ac-service-naigaon',
    location: 'Naigaon',
    title: 'AC Service Naigaon | Top AC Repair & Installation',
    desc: 'Affordable and professional AC service in Naigaon. We offer expert AC repair, gas filling, and deep cleaning. Call our verified technicians today.',
    keywords: 'AC Service Naigaon, AC Repair Naigaon, AC Installation Naigaon',
    h1: 'Top-Rated AC Service & Repair in Naigaon',
    heroDesc: 'Your trusted partner for AC service in Naigaon. From minor fixes to complete overhauls, we ensure your home stays cool with our expert AC repair services.'
  },
  {
    path: 'ac-repair-bhayandar',
    location: 'Bhayandar',
    title: 'AC Repair Bhayandar | Expert AC Service & Gas Filling',
    desc: 'Best AC repair in Bhayandar East & West. Specializing in split/window AC repair, precise gas filling, and uninstallation. Book your service now.',
    keywords: 'AC Repair Bhayandar, AC Service Bhayandar, AC Gas Filling Bhayandar',
    h1: 'Expert AC Repair & Maintenance in Bhayandar',
    heroDesc: 'Beat the heat with our expert AC repair in Bhayandar. We offer comprehensive AC service, deep cleaning, and professional installation across Bhayandar.'
  }
];

function generateSEOContent(loc) {
  return `
    <div className="seo-article">
      <h2>Comprehensive AC Repair and Service in ${loc.location}</h2>
      <p>When the sweltering heat of summer arrives, having a fully functional air conditioning system is not just a luxury; it is an absolute necessity. If you are residing in <strong>${loc.location}</strong>, you know how unbearable the rising temperatures can be. That is why our premier <strong>AC repair in ${loc.location}</strong> is dedicated to ensuring your home or office remains a cool, comfortable sanctuary year-round. We understand that an unexpected AC breakdown can disrupt your daily routine, cause immense discomfort, and even impact your health. Our team of highly trained, background-verified professionals is committed to providing rapid, reliable, and cost-effective cooling solutions tailored to your specific needs.</p>

      <h3>Why Regular AC Service in ${loc.location} Matters</h3>
      <p>Many homeowners make the mistake of waiting until their air conditioner completely breaks down before calling for professional help. However, routine <strong>AC service in ${loc.location}</strong> is the key to extending the lifespan of your unit, optimizing its cooling efficiency, and significantly reducing your monthly electricity bills. Over time, dust, dirt, and debris accumulate within the filters, coils, and fins of your AC. This buildup restricts airflow, forcing the compressor to work harder, which not only consumes more power but also increases the risk of major component failure.</p>
      <p>During our comprehensive maintenance visits, our technicians meticulously inspect every part of your system. We perform deep cleaning of the indoor evaporator coils and outdoor condenser units, ensuring maximum heat transfer. We also check the refrigerant levels, lubricate moving parts to reduce friction, and tighten electrical connections to prevent dangerous short circuits. By investing in regular maintenance, you are safeguarding your expensive appliance and ensuring it delivers pure, chilled air when you need it the most.</p>

      <h3>Our Specialised AC Services in ${loc.location}</h3>
      <p>We pride ourselves on offering a complete spectrum of air conditioning services. Whether you own a modern inverter split AC, a traditional window unit, or a high-capacity cassette AC, our experts possess the technical know-how to handle it all.</p>
      
      <h4>1. Expert Split and Window AC Repair</h4>
      <p>Is your AC making strange rattling noises? Is water leaking from the indoor unit? Or perhaps it is simply blowing warm air? Our diagnostic process is thorough and precise. We do not just treat the symptoms; we identify and eliminate the root cause of the problem. From replacing faulty capacitors and repairing malfunctioning printed circuit boards (PCBs) to fixing frozen evaporator coils, our <strong>AC repair in ${loc.location}</strong> covers every possible issue. We carry genuine OEM replacement parts, ensuring that every repair is durable and restores your unit to its original factory performance.</p>

      <h4>2. Precision AC Gas Filling and Leak Detection</h4>
      <p>A common reason for an AC failing to cool properly is low refrigerant (gas) levels. However, air conditioners do not "consume" gas like a car consumes fuel. If the gas is low, there is a leak in the system. Simply topping up the gas is a temporary and wasteful solution. Our technicians use advanced electronic leak detectors and nitrogen pressure testing to locate even the most microscopic leaks in the copper piping or condenser coils. We expertly braze and repair the leak, perform a deep vacuum to remove moisture and non-condensable gases, and then charge the system with the exact amount of high-quality refrigerant (R32, R410A, or R22) specified by the manufacturer. This meticulous process ensures optimal cooling and prevents future compressor failures.</p>

      <h4>3. Professional AC Installation and Uninstallation</h4>
      <p>The performance and longevity of an air conditioner depend heavily on how well it is installed. A poorly installed AC can lead to water leakage, excessive vibration, gas leaks, and reduced cooling capacity. Our <strong>AC installation in ${loc.location}</strong> is carried out with surgical precision. We ensure the indoor unit is perfectly leveled for proper drainage, the copper pipes are flawlessly flared and insulated, and the outdoor unit is securely mounted in a well-ventilated area. If you are relocating or renovating, our safe uninstallation service ensures the refrigerant is properly pumped down into the compressor, preventing any gas loss and keeping your unit safe during transport.</p>

      <h4>4. Advanced Foam Jet Deep Cleaning</h4>
      <p>Standard filter washing is often not enough to eliminate the deeply ingrained mold, bacteria, and grime that breed inside the damp environment of an air conditioner. Our advanced foam jet cleaning service utilizes specialized, non-toxic chemical foams and high-pressure water jets to flush out years of accumulated dirt from the deepest crevices of the cooling coils and blower fan. This not only dramatically improves the airflow and cooling capacity but also significantly enhances the indoor air quality of your home, protecting your family from respiratory issues and allergies.</p>

      <h3>The Local Advantage: Serving ${loc.location} East and West</h3>
      <p>Being a locally focused service provider gives us a distinct advantage. We are intimately familiar with the specific environmental challenges in <strong>${loc.location}</strong>, such as high humidity levels and coastal air that can accelerate the corrosion of condenser coils. This local knowledge allows us to recommend the best preventive measures, such as applying anti-corrosive coatings to your outdoor unit. Furthermore, our proximity means we can guarantee industry-leading response times. When you face an emergency breakdown in the middle of a sweltering summer night, you do not have to wait days for a technician. Our fleet of fully equipped service vehicles is always on standby, ready to dispatch the nearest expert to your doorstep, whether you reside in ${loc.location} East, ${loc.location} West, or the surrounding neighborhoods.</p>

      <h3>Why We Are the Trusted Choice for AC Repair Near Me</h3>
      <p>We understand that inviting a technician into your home requires trust. That is why we have built our business on the pillars of transparency, professionalism, and uncompromised quality.</p>
      <ul>
        <li><strong>Transparent, Upfront Pricing:</strong> We believe in honest business practices. Before any work begins, our technician will provide a detailed diagnosis and a clear, upfront quotation. There are absolutely no hidden charges or last-minute surprises on your final bill.</li>
        <li><strong>Highly Trained and Vetted Technicians:</strong> Our technicians are not just handymen; they are certified HVAC specialists who undergo continuous training on the latest inverter technologies and smart AC systems. Furthermore, every technician passes a rigorous background check for your peace of mind and safety.</li>
        <li><strong>Genuine Spare Parts Guarantee:</strong> We never compromise on quality by using cheap, substandard aftermarket parts. We exclusively use genuine, brand-approved components that come with their own manufacturer warranties, ensuring your AC runs safely and efficiently.</li>
        <li><strong>Comprehensive Service Warranty:</strong> We stand proudly behind the quality of our workmanship. Every repair and installation we perform is backed by a robust service warranty. If the same issue reoccurs within the warranty period, we will fix it completely free of charge.</li>
      </ul>

      <h3>Common AC Problems We Fix Daily in ${loc.location}</h3>
      <p>Over the years, we have successfully resolved thousands of AC issues. Some of the most frequent problems we encounter and expertly repair include:</p>
      <p><strong>1. Water Dripping from the Indoor Unit:</strong> This is usually caused by a clogged condensate drain pipe or a heavily soiled evaporator coil. Our deep cleaning service easily resolves this messy problem.</p>
      <p><strong>2. AC Not Cooling Enough:</strong> This can be due to a variety of factors, including dirty filters, low refrigerant levels, a failing compressor, or a faulty run capacitor. Our thorough diagnostic process quickly pinpoints the exact cause.</p>
      <p><strong>3. Unpleasant Odors from the AC:</strong> A foul, musty smell indicates the presence of mold and bacteria on the cooling coils. Our anti-bacterial foam jet cleaning completely eliminates these odor-causing microbes, leaving your air fresh and clean.</p>
      <p><strong>4. AC Tripping the Circuit Breaker:</strong> This is a serious electrical issue that requires immediate professional attention. It could be caused by a shorted compressor, a faulty capacitor, or loose wiring. Attempting to fix this yourself is highly dangerous.</p>

      <h3>Book Your AC Service in ${loc.location} Today</h3>
      <p>Do not let a malfunctioning air conditioner ruin your comfort. Whether you need an emergency repair, a routine seasonal service, or a flawless new installation, we are here to help. Join the thousands of satisfied customers who have made us their go-to choice for all their cooling needs. Experience the difference of premium, hassle-free AC care. Contact us today via phone, WhatsApp, or our online booking form, and let our experts restore perfect, icy-cold comfort to your home in <strong>${loc.location}</strong>.</p>
    </div>
  `;
}

locations.forEach(loc => {
  const dir = path.join(root, 'app', loc.path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const pageContent = `import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: '${loc.title}',
  description: '${loc.desc}',
  keywords: '${loc.keywords}',
  alternates: { canonical: 'https://smartacservice.in/${loc.path}' },
  openGraph: {
    title: '${loc.title}',
    description: '${loc.desc}',
    url: 'https://smartacservice.in/${loc.path}',
    siteName: 'Smart AC Service',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function Page() {
  const seoContent = (
    <div className="text-gray-600 space-y-6">
      ${generateSEOContent(loc)}
    </div>
  );

  const overrideH1 = (
    <>
      ${loc.h1.split(' ').slice(0, -2).join(' ')}<br />
      <span className="text-grad-brand">${loc.h1.split(' ').slice(-2).join(' ')}</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <ClientPage 
        seoContent={seoContent} 
        overrideH1={overrideH1}
        overrideHeroText="${loc.heroDesc}"
      />
    </>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent, 'utf8');
});

console.log('Location pages generated');
