const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\DELL\\Desktop\\acservice';

// 1. Create components directory
const componentsDir = path.join(root, 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// 2. Read original page.tsx
const pagePath = path.join(root, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// 3. Modify ClientPage.tsx content to accept SEO content
// We'll replace `export default function Home()` with `export default function ClientPage({ seoContent, pageTitle, pageDescription }: { seoContent?: React.ReactNode, pageTitle?: string, pageDescription?: string }) {`
pageContent = pageContent.replace('export default function Home() {', 'export default function ClientPage({ seoContent, overrideH1, overrideHeroText }: { seoContent?: React.ReactNode, overrideH1?: React.ReactNode, overrideHeroText?: React.ReactNode }) {');

// Inject the SEO Content section right before the footer
const footerTag = '{/* ═══════════════════════════════════\n          FOOTER\n      ═══════════════════════════════════ */}';
const seoContentBlock = `
        {seoContent && (
          <section className="relative overflow-hidden bg-white py-16 border-t border-gray-100">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg max-w-none">
              {seoContent}
            </div>
          </section>
        )}
`;
pageContent = pageContent.replace(footerTag, seoContentBlock + '\n      ' + footerTag);

// Replace the H1
pageContent = pageContent.replace(
  /<motion\.h1 variants=\{vFadeUp\} className="display-hero font-display mt-6 text-gray-900">[\s\S]*?<\/motion\.h1>/m,
  `<motion.h1 variants={vFadeUp} className="display-hero font-display mt-6 text-gray-900">
                  {overrideH1 || (
                    <>
                      The Last AC&nbsp;Service<br />
                      You'll Ever&nbsp;
                      <span className="text-grad-brand">Need to&nbsp;Search&nbsp;For</span>
                    </>
                  )}
                </motion.h1>`
);

// Replace hero text
pageContent = pageContent.replace(
  /<motion\.p variants=\{vFadeUp\} className="mt-6 text-lg leading-relaxed text-gray-500 max-w-lg">\s*Fast, reliable and affordable AC Repair, Installation, Gas Filling and Deep Cleaning by certified technicians across Nalasopara, Vasai, Virar &amp; Mumbai\.\s*<\/motion\.p>/m,
  `<motion.p variants={vFadeUp} className="mt-6 text-lg leading-relaxed text-gray-500 max-w-lg">
                  {overrideHeroText || "Fast, reliable and affordable AC Repair, Installation, Gas Filling and Deep Cleaning by certified technicians across Nalasopara, Vasai, Virar & Mumbai."}
                </motion.p>`
);

// Save ClientPage.tsx
fs.writeFileSync(path.join(componentsDir, 'ClientPage.tsx'), pageContent, 'utf8');

// 4. Create new app/page.tsx (Server Component)
const newPageContent = `import ClientPage from '@/components/ClientPage';
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
`;
fs.writeFileSync(pagePath, newPageContent, 'utf8');

// Also create lib/seo.ts for JSON-LD
const libDir = path.join(root, 'lib');
if (!fs.existsSync(libDir)) fs.mkdirSync(libDir);

const seoTsContent = `export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smartact-service.vercel.app",
    "name": "Smart AC Service",
    "description": "Premium AC repair, installation, gas filling and maintenance in Nalasopara, Vasai, Virar, Naigaon, Bhayandar and Mumbai.",
    "url": "https://smartact-service.vercel.app",
    "telephone": "+91 81159 53195",
    "priceRange": "₹₹",
    "areaServed": ["Nalasopara", "Vasai", "Virar", "Naigaon", "Bhayandar", "Mumbai"],
    "address": { "@type": "PostalAddress", "addressLocality": "Nalasopara", "addressRegion": "Maharashtra", "postalCode": "401209", "addressCountry": "IN" },
    "geo": { "@type": "GeoCoordinates", "latitude": "19.4234", "longitude": "72.7989" },
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "07:00", "closes": "21:00" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1000" }
  };
}

export function getFAQSchema(faqs: {q: string, a: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
`;
fs.writeFileSync(path.join(libDir, 'seo.ts'), seoTsContent, 'utf8');

console.log('Refactoring complete');
