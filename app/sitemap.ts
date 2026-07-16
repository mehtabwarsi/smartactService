import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smartact-service.vercel.app'

  const routes = [
    '',
    '/ac-repair-nalasopara',
    '/ac-service-vasai',
    '/ac-repair-virar',
    '/ac-service-naigaon',
    '/ac-repair-bhayandar',
    '/ac-installation',
    '/ac-gas-filling',
    '/ac-deep-cleaning',
    '/amc-service',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/blog',
    '/blog/best-time-for-ac-service-in-mumbai',
    '/blog/ac-cooling-problem-solution',
    '/blog/ac-gas-filling-cost',
    '/blog/split-ac-vs-window-ac',
    '/blog/how-often-should-you-service-your-ac',
    '/blog/why-your-ac-is-not-cooling',
    '/blog/top-10-ac-maintenance-tips'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : (route.includes('repair') || route.includes('service') || route.includes('installation') || route.includes('gas-filling')) ? 0.9 : 0.7,
  }))
}