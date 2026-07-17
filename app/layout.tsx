import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartact-service.vercel.app"),
  icons: {
    icon: "./icon.png",
    shortcut: './icon.png',
    apple: './icon.png',
  },
  title: {
    default: "Smart AC Service | AC Repair, Installation & Gas Filling in Nalasopara, Vasai & Virar",
    template: "%s | Smart AC Service",
  },
  description:
    "Premium AC repair, installation, gas filling and maintenance service in Nalasopara, Vasai, Virar, Naigaon, Bhayandar and Mumbai. Same-day service with verified technicians. Starting ₹499.",
  keywords: [
    "AC Repair Nalasopara",
    "AC Service Vasai",
    "AC Repair Virar",
    "AC Installation Nalasopara",
    "Gas Filling Vasai",
    "Split AC Repair Virar",
    "Window AC Repair",
    "Emergency AC Repair",
    "AC Service Naigaon",
    "AC Repair Bhayandar",
    "AC Service Mumbai",
    "AC Repair Near Me",
    "Best AC Service Nalasopara",
    "Foam Jet Cleaning AC",
    "AMC Service AC",
    "PCB Repair AC",
    "Smart AC Service",
  ],
  authors: [{ name: "Smart AC Service" }],
  creator: "Smart AC Service",
  publisher: "Smart AC Service",
  category: "Home Services",
  alternates: {
    canonical: "https://smartact-service.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smartact-service.vercel.app",
    siteName: "Smart AC Service",
    title: "Smart AC Service | AC Repair, Installation & Gas Filling",
    description:
      "Fast and reliable AC repair, installation, gas filling and maintenance service in Nalasopara, Vasai, Virar, Naigaon, Bhayandar and Mumbai. Same-day service available.",
    images: [
      {
        url: "https://smartact-service.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart AC Service - Premium AC Repair in Nalasopara, Vasai & Virar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart AC Service | AC Repair & Installation",
    description:
      "Premium AC repair and installation service with same-day support and verified technicians. Serving Nalasopara, Vasai, Virar & Mumbai.",
    images: ["https://smartact-service.vercel.app/og-image.jpg"],
  },
  verification: {
    google: "googlee254e8817ed63200",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#00AEEF" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nalasopara, Maharashtra" />
        <meta name="geo.position" content="19.4234;72.7989" />
        <meta name="ICBM" content="19.4234, 72.7989" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
