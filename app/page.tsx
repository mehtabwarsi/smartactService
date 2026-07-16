import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Smart AC Service | AC Repair, Installation & Gas Filling',
  description: 'Fast and reliable AC repair, installation, gas filling and maintenance service in Nalasopara, Vasai, Virar, Naigaon, Bhayandar and Mumbai. Same-day service available.',
  alternates: { canonical: 'https://smartact-service.vercel.app' }
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <ClientPage />
    </>
  );
}
