import ClientPage from '@/components/ClientPage';
import { Metadata } from 'next';
import { getLocalBusinessSchema } from '@/lib/seo';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AC Service & Repair Blog | Smart AC Service',
  description: 'Read the latest tips, guides, and expert advice on AC repair, maintenance, gas filling, and installation from the professionals at Smart AC Service.',
  alternates: { canonical: 'https://smartact-service.vercel.app/blog' }
};

export default function BlogIndex() {
  const seoContent = (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest AC Maintenance Guides</h2>
      <div className="grid gap-6 md:grid-cols-2">

        <Link href="/blog/best-time-for-ac-service-in-mumbai" className="block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-900 mb-2">The Best Time for AC Service in Mumbai</h3>
          <p className="text-gray-500 text-sm">Discover the best time for AC service in Mumbai. Learn how pre-summer maintenance saves money, prevents breakdowns, and ensures optimal cooling.</p>
          <span className="inline-block mt-4 text-[#00AEEF] font-semibold text-sm">Read Article →</span>
        </Link>
        <Link href="/blog/ac-cooling-problem-solution" className="block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimate AC Cooling Problem Solutions</h3>
          <p className="text-gray-500 text-sm">Explore the top reasons why your AC is not cooling and find effective solutions. From dirty filters to gas leaks, learn how to restore your AC cooling power.</p>
          <span className="inline-block mt-4 text-[#00AEEF] font-semibold text-sm">Read Article →</span>
        </Link>
        <Link href="/blog/ac-gas-filling-cost" className="block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-900 mb-2">AC Gas Filling Cost Guide for 2026</h3>
          <p className="text-gray-500 text-sm">Find out the exact AC gas filling cost in Mumbai. Understand the differences between R32, R410A, and R22 refrigerants and why cheap gas filling is a scam.</p>
          <span className="inline-block mt-4 text-[#00AEEF] font-semibold text-sm">Read Article →</span>
        </Link>
        <Link href="/blog/split-ac-vs-window-ac" className="block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Split AC vs Window AC: A Complete Comparison</h3>
          <p className="text-gray-500 text-sm">Split AC vs Window AC - which should you buy? Compare energy efficiency, cooling capacity, installation costs, and noise levels in this comprehensive guide.</p>
          <span className="inline-block mt-4 text-[#00AEEF] font-semibold text-sm">Read Article →</span>
        </Link>
        <Link href="/blog/how-often-should-you-service-your-ac" className="block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-900 mb-2">How Often Should You Really Service Your AC?</h3>
          <p className="text-gray-500 text-sm">Wondering how often you should service your AC? Our experts recommend the ideal AC maintenance schedule to maximize lifespan and minimize electricity bills.</p>
          <span className="inline-block mt-4 text-[#00AEEF] font-semibold text-sm">Read Article →</span>
        </Link>
        <Link href="/blog/why-your-ac-is-not-cooling" className="block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Top 7 Reasons Why Your AC Is Not Cooling</h3>
          <p className="text-gray-500 text-sm">Is your AC running but not cooling? Discover the 7 most common reasons, from frozen coils to faulty compressors, and learn how professional repair helps.</p>
          <span className="inline-block mt-4 text-[#00AEEF] font-semibold text-sm">Read Article →</span>
        </Link>
        <Link href="/blog/top-10-ac-maintenance-tips" className="block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Top 10 AC Maintenance Tips for Peak Performance</h3>
          <p className="text-gray-500 text-sm">Follow these top 10 AC maintenance tips to keep your air conditioner running smoothly this summer. Save on electricity bills and prevent costly repairs.</p>
          <span className="inline-block mt-4 text-[#00AEEF] font-semibold text-sm">Read Article →</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <ClientPage
        seoContent={seoContent}
        overrideH1={
          <>
            AC Service & Repair <br />
            <span className="text-grad-brand">Knowledge Hub</span>
          </>
        }
        overrideHeroText="Expert guides, tips, and insights to help you maintain your air conditioner, reduce electricity bills, and troubleshoot common cooling problems."
      />
    </>
  );
}
