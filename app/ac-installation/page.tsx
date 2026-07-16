import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Professional AC Installation Service | Safe & Certified',
  description: 'Get your split or window AC installed by certified technicians. We offer safe, flawless AC installation, uninstallation, and copper pipe fitting at best prices.',
  keywords: 'AC Installation, Split AC Installation, Window AC Installation, AC Fitting, AC Uninstallation',
  alternates: { canonical: 'https://smartact-service.vercel.app/ac-installation' },
  openGraph: {
    title: 'Professional AC Installation Service | Safe & Certified',
    description: 'Get your split or window AC installed by certified technicians. We offer safe, flawless AC installation, uninstallation, and copper pipe fitting at best prices.',
    url: 'https://smartact-service.vercel.app/ac-installation',
    siteName: 'Smart AC Service',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function Page() {
  const seoContent = (
    <div className="text-gray-600 space-y-6">

      <div className="seo-article">
        <h2>Why Choose Our AC Installation Service?</h2>
        <p>Your air conditioning system is a significant investment, and maintaining its peak performance requires specialized care. Whether you are dealing with reduced cooling, strange noises, or simply need a new unit set up, our <strong>AC Installation</strong> is designed to meet the highest industry standards. We do not just offer quick fixes; we provide comprehensive solutions that enhance the efficiency, longevity, and safety of your cooling systems.</p>

        <h3>The Importance of Professional AC Installation</h3>
        <p>Many individuals attempt DIY fixes or hire untrained mechanics in an effort to save money. However, modern air conditioners, especially inverter models, are complex machines with intricate electronic and mechanical components. Improper handling during a <strong>AC Installation</strong> can lead to severe consequences, including refrigerant leaks, compressor damage, and electrical hazards.</p>
        <p>By choosing our certified professionals, you are ensuring that every procedure—be it vacuuming the lines before gas filling, ensuring the exact slope for water drainage during installation, or using the correct chemical agents for deep cleaning—is executed flawlessly. This precision not only prevents costly future breakdowns but also ensures your unit operates at optimal energy efficiency, keeping your electricity bills in check.</p>

        <h3>What to Expect from Our Service</h3>
        <p>We believe in absolute transparency and meticulous attention to detail. When you book a <strong>AC Installation</strong> with us, our process includes:</p>
        <ul>
          <li><strong>Initial Assessment:</strong> A thorough inspection to evaluate the current state of your unit and identify any underlying issues.</li>
          <li><strong>Upfront Quotation:</strong> A clear, detailed explanation of the required work and the associated costs, with zero hidden fees.</li>
          <li><strong>Precision Execution:</strong> Using state-of-the-art tools and genuine OEM parts to perform the service according to manufacturer guidelines.</li>
          <li><strong>Final Testing:</strong> Rigorous performance testing to ensure optimal airflow, temperature delta, and electrical safety before we consider the job done.</li>
        </ul>

        <h3>Common Signs You Need This Service</h3>
        <p>It is crucial to recognize the warning signs early to prevent minor issues from escalating into major repairs. Look out for the following indicators:</p>
        <p><strong>1. Weak Airflow or Warm Air:</strong> This often points to clogged filters, dirty coils, or a refrigerant leak, requiring immediate deep cleaning or gas charging.</p>
        <p><strong>2. Unusual Noises:</strong> Rattling, buzzing, or grinding sounds can indicate loose parts, a failing motor, or debris trapped in the blower fan.</p>
        <p><strong>3. Frequent Cycling:</strong> If your AC turns on and off constantly without properly cooling the room, it could be a sign of a faulty thermostat, an oversized unit, or a compressor issue.</p>
        <p><strong>4. High Energy Bills:</strong> A sudden spike in your electricity consumption is a clear indicator that your AC is working harder than it should, often due to a lack of maintenance.</p>

        <h3>Our Commitment to Quality and Safety</h3>
        <p>Your safety and satisfaction are our top priorities. All our technicians undergo rigorous background checks and continuous training to stay abreast of the latest HVAC technologies. We adhere strictly to environmental regulations, especially concerning the safe handling and recovery of refrigerants. When you entrust us with your <strong>AC Installation</strong>, you are choosing a partner dedicated to delivering unparalleled service, long-lasting results, and absolute peace of mind.</p>

        <h3>Book Your Service Today</h3>
        <p>Do not compromise on your comfort. Experience the reliability and expertise that has made us a trusted name in air conditioning care. Contact us today to schedule your <strong>AC Installation</strong> and enjoy a perfectly cooled environment all year round.</p>
      </div>

    </div>
  );

  const overrideH1 = (
    <>
      Professional AC Installation<br />
      <span className="text-grad-brand">& Setup</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Looking for a flawless AC installation? Our certified technicians ensure precise mounting, secure pipe fitting, and optimal performance for all AC brands."
      />
    </>
  );
}
