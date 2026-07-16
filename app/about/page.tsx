import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Smart AC Service | Our Mission & Team',
  description: 'Learn about Smart AC Service. We are a team of certified technicians dedicated to providing premium AC repair and installation across Mumbai and surrounding areas.',
  keywords: 'About Smart AC Service, AC Repair Experts, Certified AC Technicians',
  alternates: { canonical: 'https://smartact-service.vercel.app/about' },
  openGraph: {
    title: 'About Smart AC Service | Our Mission & Team',
    description: 'Learn about Smart AC Service. We are a team of certified technicians dedicated to providing premium AC repair and installation across Mumbai and surrounding areas.',
    url: 'https://smartact-service.vercel.app/about',
    siteName: 'Smart AC Service',
    locale: 'en_IN',
    type: 'website',
  }
};

export default function Page() {
  const seoContent = (
    <div className="text-gray-600 space-y-6">

      <div className="seo-article">
        <h2>Welcome to About Smart AC Service</h2>
        <p>Thank you for visiting <strong>Smart AC Service</strong>. We pride ourselves on delivering premium, reliable, and affordable air conditioning solutions to our valued customers. This page provides essential information regarding our about. We encourage you to read through the details carefully to understand our commitment to excellence, transparency, and customer satisfaction.</p>

        <h3>Our Core Values</h3>
        <p>At the heart of our operations lies a steadfast dedication to our core values. We believe that every customer deserves the highest standard of service, devoid of hidden costs or subpar workmanship. Our approach is built upon:</p>
        <ul>
          <li><strong>Integrity and Transparency:</strong> We operate with complete honesty, providing upfront quotations and clear explanations of the required services.</li>
          <li><strong>Technical Excellence:</strong> Our technicians are rigorously trained and certified, ensuring they possess the expertise to handle even the most complex AC systems.</li>
          <li><strong>Customer-Centric Focus:</strong> Your comfort is our priority. We strive for rapid response times, respectful conduct, and a service experience that exceeds expectations.</li>
          <li><strong>Commitment to Quality:</strong> From the tools we use to the genuine spare parts we install, we never compromise on the quality of our work.</li>
        </ul>

        <h3>Extensive Service Coverage</h3>
        <p>We understand that air conditioning emergencies can happen anywhere. That is why we have expanded our service network to cover a wide geographical area. Whether you are located in the bustling neighborhoods of <strong>Nalasopara</strong>, the commercial hubs of <strong>Vasai</strong>, the residential areas of <strong>Virar</strong>, or the surrounding regions of Naigaon, Bhayandar, and Mumbai, our mobile service units are equipped and ready to be dispatched to your location promptly.</p>

        <h3>Comprehensive Solutions for Every Need</h3>
        <p>Our expertise is not limited to just one aspect of AC care. We offer an extensive portfolio of services designed to address every possible requirement:</p>
        <p><strong>1. Expert Diagnostics and Repair:</strong> Rapid troubleshooting and precise repair of all AC malfunctions, ensuring long-lasting performance.</p>
        <p><strong>2. Professional Installation:</strong> Flawless setup of new units, adhering to manufacturer specifications for optimal efficiency and safety.</p>
        <p><strong>3. Advanced Deep Cleaning:</strong> Utilizing specialized foam jets to eradicate deep-seated dirt, mold, and bacteria, significantly improving indoor air quality.</p>
        <p><strong>4. Reliable AMC Plans:</strong> Annual Maintenance Contracts that provide year-round peace of mind, preventive care, and priority support.</p>

        <h3>Why Trust Matters</h3>
        <p>Inviting a service technician into your home requires a significant level of trust. We recognize this responsibility and have implemented strict protocols to ensure your safety and comfort. Every member of our team undergoes comprehensive background verification. Furthermore, our transparent pricing model means you are never pressured into unnecessary repairs or subjected to bait-and-switch tactics. We build long-term relationships based on trust, reliability, and consistent results.</p>

        <h3>Get in Touch</h3>
        <p>We are always here to assist you. If you require immediate service, have questions regarding our policies, or wish to schedule a consultation, please do not hesitate to contact us. Our dedicated support team is available via phone, WhatsApp, and email, ready to provide prompt and courteous assistance. Experience the standard of excellence that defines <strong>Smart AC Service</strong>.</p>
      </div>

    </div>
  );

  const overrideH1 = (
    <>
      About Smart<br />
      <span className="text-grad-brand">AC Service</span>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={overrideH1}
        overrideHeroText="Discover the story behind Smart AC Service. We are driven by a singular mission: to provide the most reliable, transparent, and high-quality AC service in the region."
      />
    </>
  );
}
