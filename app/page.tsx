"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Bath,
  Bolt,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Gauge,
  Hammer,
  Headphones,
  Home as HomeIcon,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Thermometer,
  Timer,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

/* ────────────────────────────────────────────────
   CONSTANTS
──────────────────────────────────────────────── */
const PHONE = "+9181159533195";
const PHONE_DISPLAY = "+91 81159 53395";
const WHATSAPP = "https://wa.me/9181159533195";
const EMAIL = "[EMAIL_ADDRESS]";

/* ────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────── */
const services = [
  { title: "AC Repair", price: "From ₹499", desc: "Fast diagnostics and expert repairs for all cooling failures, strange noises, and power issues.", icon: Wrench, hue: "from-[#00AEEF] to-[#0D9488]" },
  { title: "General Service", price: "₹599", desc: "Comprehensive filter cleaning, coil inspection, lubrication, and full performance restoration.", icon: Sparkles, hue: "from-[#0D9488] to-[#22C55E]" },
  { title: "Foam Jet Cleaning", price: "₹649", desc: "Deep interior foam wash that eliminates stubborn dust, mould, and bacteria from every component.", icon: Droplets, hue: "from-violet-500 to-[#0D9488]" },
  { title: "Deep Cleaning", price: "₹899", desc: "Full indoor and outdoor unit cleaning for cleaner air, stronger cooling, and longer AC life.", icon: Bath, hue: "from-sky-500 to-[#00AEEF]" },
  { title: "AC Installation", price: "From ₹1299", desc: "Professional installation with precise alignment, mounting, pipe fitting, and rigorous testing.", icon: HomeIcon, hue: "from-indigo-500 to-violet-500" },
  { title: "Uninstallation", price: "From ₹899", desc: "Safe, clean removal with proper packing for relocation, renovation, or unit upgrades.", icon: Hammer, hue: "from-orange-500 to-amber-400" },
  { title: "Gas Refilling", price: "From ₹2800", desc: "Complete leak detection, system vacuuming, and precision refrigerant charging for lasting comfort.", icon: Gauge, hue: "from-rose-500 to-red-500" },
  { title: "Water Leakage Repair", price: "From ₹599", desc: "Root-cause repair of drain blockages, pipe leaks, and overflow tray failures — fixed the first time.", icon: Droplets, hue: "from-[#00AEEF] to-sky-400" },
  { title: "PCB Repair", price: "From ₹1499", desc: "Advanced board-level diagnostics and repair for inverter and smart AC control circuit failures.", icon: BrainCircuit, hue: "from-purple-500 to-indigo-500" },
  { title: "Capacitor Replacement", price: "From ₹499", desc: "Reliable OEM capacitor replacement to restore fast, stable startup and smooth motor performance.", icon: Bolt, hue: "from-yellow-500 to-orange-400" },
  { title: "Cooling Problem Repair", price: "From ₹499", desc: "Deep diagnosis and repair for poor cooling, weak airflow, and inconsistent temperature output.", icon: Thermometer, hue: "from-[#00AEEF] to-[#0D9488]" },
  { title: "AMC Plans", price: "From ₹1999/yr", desc: "Annual maintenance contracts with 2 scheduled visits, priority support, and preventive care.", icon: ShieldCheck, hue: "from-[#0D9488] to-emerald-500" },
];

const whyUs = [
  { title: "Certified Technicians", desc: "Every technician is trained, background-verified, and experienced across all major AC brands.", icon: BadgeCheck, stat: "5+ Yrs" },
  { title: "100% Satisfaction", desc: "Honest pricing, zero hidden charges, and a follow-up guarantee until you're fully satisfied.", icon: CheckCircle2, stat: "100%" },
  { title: "Genuine Spare Parts", desc: "Only OEM-grade parts and trusted branded components. Never substandard substitutes.", icon: ShieldCheck, stat: "OEM" },
  { title: "Affordable Pricing", desc: "Market-competitive rates with transparent upfront quotations. No surprises on your bill.", icon: Sparkles, stat: "₹499+" },
  { title: "30-Min Response", desc: "We confirm bookings in under 5 minutes and dispatch the nearest technician immediately.", icon: Clock3, stat: "30 Min" },
  { title: "Service Warranty", desc: "All repairs come with a service warranty. We stand behind our workmanship completely.", icon: ShieldCheck, stat: "Covered" },
  { title: "Emergency Support", desc: "Urgent help for breakdowns, leaks, and cooling failures. Available 7 days a week.", icon: Headphones, stat: "24/7" },
  { title: "Doorstep Service", desc: "We come to you — fully equipped to diagnose and complete the work at your home or office.", icon: HomeIcon, stat: "Home" },
];

const steps = [
  { n: "01", title: "Book in Seconds", desc: "Call, WhatsApp, or fill the form. Booking confirmed in under 60 seconds.", icon: Phone },
  { n: "02", title: "Technician Dispatched", desc: "Nearest verified expert assigned and on the way to your location.", icon: BadgeCheck },
  { n: "03", title: "Inspection & Quote", desc: "Full AC diagnosis with a clear, upfront quote before any work begins.", icon: Sparkles },
  { n: "04", title: "Repair & Service", desc: "Precise, professional repair with quality parts. Cleaned up before we leave.", icon: Wrench },
  { n: "05", title: "Pay & Relax", desc: "Transparent bill, service report, and warranty certificate. Then cool off!", icon: CheckCircle2 },
];

const plans = [
  {
    id: "basic",
    name: "Basic Service",
    price: "₹599",
    period: "per AC",
    tag: null,
    features: ["Filter Deep Cleaning", "Coil Inspection", "Performance Test", "Service Report"],
    cta: "Book Now",
    featured: false,
  },
  {
    id: "foam",
    name: "Foam Jet Service",
    price: "₹649",
    period: "per AC",
    tag: "Most Popular",
    features: ["Full Indoor Wash", "Outdoor Unit Clean", "Bacteria Removal", "Performance Testing", "Odour Elimination"],
    cta: "Get This Deal",
    featured: true,
  },
  {
    id: "gas",
    name: "Gas Charging",
    price: "₹2800+",
    period: "per AC",
    tag: null,
    features: ["Leak Detection", "Vacuum Process", "Precision Gas Fill", "Post-fill Performance Test"],
    cta: "Book Now",
    featured: false,
  },
  {
    id: "install",
    name: "Installation",
    price: "₹1299+",
    period: "per unit",
    tag: null,
    features: ["Professional Mounting", "Full Pipe Fitting", "Testing & Calibration", "Demo & Walkthrough"],
    cta: "Book Now",
    featured: false,
  },
];

const reviews = [
  { name: "Priya Shah", loc: "Vasai West", init: "PS", rating: 5, text: "Absolutely brilliant service! The technician arrived on time, explained everything clearly, and my split AC is now cooling like it did on day one. Will never use anyone else.", date: "2 weeks ago" },
  { name: "Rahul Deshmukh", loc: "Virar East", init: "RD", rating: 5, text: "Professional from start to finish. Transparent pricing, no hidden charges, and the foam jet cleaning made a massive difference. The service quality is genuinely 5-star.", date: "1 month ago" },
  { name: "Meera Nair", loc: "Nalasopara East", init: "MN", rating: 5, text: "The technician diagnosed the PCB fault within minutes. Fixed the same day. My AC was back running better than ever. Highly technical team — very impressed.", date: "3 weeks ago" },
  { name: "Ankit Rao", loc: "Bhayandar West", init: "AR", rating: 5, text: "Best AC service I've experienced in years. They arrived exactly on time, the work was done neatly, and they cleaned up everything before leaving. Truly premium.", date: "1 week ago" },
  { name: "Sonal Patil", loc: "Naigaon", init: "SP", rating: 5, text: "Quick response, expert technician, and genuine pricing. They found a capacitor issue that two other services missed. Fixed in 30 minutes. Absolutely recommended.", date: "5 days ago" },
  { name: "Harsh Verma", loc: "Mumbai Suburbs", init: "HV", rating: 5, text: "Saved us ₹15,000 on a replacement we didn't need. They repaired the compressor fault at a fraction of the cost. Honest, skilled, and refreshingly transparent.", date: "2 months ago" },
];

const faqs = [
  { q: "How much does AC service typically cost?", a: "Our AC general service starts at ₹599 and foam jet cleaning at ₹649. Gas refilling starts at ₹2,800 and installation at ₹1,299. All prices are shared upfront before work begins." },
  { q: "Do you provide same-day service?", a: "Yes. Same-day service is available in Nalasopara, Vasai, Virar, Naigaon, Bhayandar, and Mumbai subject to technician availability. Call us directly for the fastest response." },
  { q: "Do you service inverter AC units?", a: "Absolutely. Our certified technicians are trained on inverter and non-inverter units across all major brands — Daikin, Voltas, LG, Samsung, Blue Star, Hitachi, and more." },
  { q: "Do you repair window AC models?", a: "Yes. We service split ACs, window ACs, cassette units, and tower ACs. We carry tools and parts for most common models and brands." },
  { q: "Is gas refilling safe? What refrigerant do you use?", a: "Yes, completely safe. We use R32 and R22 refrigerant based on your AC model. Our process includes a full leak check and vacuum before any gas is added." },
  { q: "Can you install a brand new AC?", a: "Yes. We provide end-to-end installation: wall mounting, copper piping, drainage, electrical connections, testing, and a full usage demonstration." },
  { q: "Do you offer Annual Maintenance Contracts?", a: "Yes. Our AMC plans start at ₹1,999/year and include two scheduled maintenance visits, priority booking, discounted repair rates, and a dedicated service history report." },
  { q: "Is there a warranty on your repairs?", a: "Yes. All repairs come with a service warranty on the work completed. Parts warranties vary by brand. We provide a warranty certificate with every job." },
  { q: "Do you have emergency or urgent service?", a: "Yes. Call us directly for urgent breakdowns. We prioritise emergency calls and aim to dispatch a technician within the hour across all service areas." },
  { q: "Which areas do you currently cover?", a: "We service Nalasopara (East & West), Vasai, Virar, Naigaon, Bhayandar, and nearby Mumbai suburban areas. Expanding rapidly — call us even if your area isn't listed." },
];

const areas = [
  { name: "Nalasopara", sub: "East & West", icon: "🏙️" },
  { name: "Virar", sub: "East & West", icon: "🏘️" },
  { name: "Vasai", sub: "Road & Station", icon: "🏢" },
  { name: "Naigaon", sub: "North & South", icon: "🏡" },
  { name: "Bhayandar", sub: "East & West", icon: "🌆" },
  { name: "Mumbai", sub: "Suburbs & Nearby", icon: "🏙️" },
];

const stats = [
  { val: "1000", suffix: "+", label: "Happy Customers" },
  { val: "4.9", suffix: "★", label: "Google Rating" },
  { val: "30", suffix: " min", label: "Avg Response" },
  { val: "5", suffix: "+ Yrs", label: "In Business" },
];

/* ────────────────────────────────────────────────
   MOTION VARIANTS
──────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

const vFadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } };
const vFadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
const vSlideL = { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } };
const vSlideR = { hidden: { opacity: 0, x: 48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } };
const vStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const vStaggerSlow = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const vScale = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } } };

/* ────────────────────────────────────────────────
   SVG ILLUSTRATIONS
──────────────────────────────────────────────── */
function ACSplitIllustration() {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
      {/* Ambient glow */}
      <ellipse cx="240" cy="280" rx="180" ry="30" fill="url(#glow1)" opacity="0.3" />
      {/* Indoor unit body */}
      <rect x="60" y="60" width="360" height="110" rx="18" fill="url(#bodyGrad)" />
      <rect x="60" y="60" width="360" height="110" rx="18" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Glossy top shine */}
      <rect x="70" y="64" width="340" height="30" rx="14" fill="rgba(255,255,255,0.10)" />
      {/* Display panel */}
      <rect x="270" y="80" width="120" height="50" rx="10" fill="rgba(0,174,239,0.15)" stroke="rgba(0,174,239,0.3)" strokeWidth="1" />
      <circle cx="300" cy="105" r="10" fill="rgba(0,174,239,0.4)" />
      <text x="317" y="100" fontSize="10" fill="rgba(255,255,255,0.7)" fontFamily="monospace">18°C</text>
      <text x="317" y="114" fontSize="8" fill="rgba(0,174,239,0.8)" fontFamily="monospace">COOL</text>
      {/* Power LED */}
      <circle cx="300" cy="105" r="5" fill="#22C55E" />
      <circle cx="300" cy="105" r="5" fill="#22C55E" opacity="0.5">
        <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Vane slats */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1="80" y1={148 + i * 4} x2="260" y2={152 + i * 4} stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" />
      ))}
      {/* Front grille lines */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={i} x1={90 + i * 28} y1="130" x2={90 + i * 28} y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      ))}
      {/* Air flow arrows — left */}
      <g opacity="0.7">
        {[0, 1, 2].map(i => (
          <g key={i}>
            <line x1="30" y1={190 + i * 18} x2="62" y2={190 + i * 18} stroke="url(#flowL)" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.5s" repeatCount="indefinite" />
            </line>
            <polyline points={`58,${185 + i * 18} 64,${190 + i * 18} 58,${195 + i * 18}`} fill="none" stroke="#00AEEF" strokeWidth="1.5" opacity="0.6" />
          </g>
        ))}
      </g>
      {/* Air flow arrows — right */}
      <g opacity="0.7">
        {[0, 1, 2].map(i => (
          <g key={i}>
            <line x1="418" y1={190 + i * 18} x2="450" y2={190 + i * 18} stroke="url(#flowR)" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" values="0;16" dur="1.5s" repeatCount="indefinite" />
            </line>
            <polyline points={`422,${185 + i * 18} 416,${190 + i * 18} 422,${195 + i * 18}`} fill="none" stroke="#0D9488" strokeWidth="1.5" opacity="0.6" />
          </g>
        ))}
      </g>
      {/* Brand logo area */}
      <text x="120" y="105" fontSize="14" fontWeight="700" fill="white" opacity="0.9" fontFamily="system-ui">Smart AC</text>
      <text x="120" y="122" fontSize="9" fill="rgba(0,174,239,0.8)" fontFamily="system-ui" letterSpacing="2">PREMIUM SERIES</text>

      {/* Outdoor unit */}
      <rect x="160" y="220" width="160" height="90" rx="14" fill="url(#outerGrad)" />
      <rect x="160" y="220" width="160" height="90" rx="14" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
      {/* Fan grille */}
      <circle cx="240" cy="265" r="32" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <circle cx="240" cy="265" r="20" fill="rgba(0,174,239,0.2)" />
      <circle cx="240" cy="265" r="8" fill="rgba(0,174,239,0.5)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line key={i} x1="240" y1="265" x2={240 + 28 * Math.cos(deg * Math.PI / 180)} y2={265 + 28 * Math.sin(deg * Math.PI / 180)} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      ))}
      {/* Fan rotation animation */}
      <g style={{ transformOrigin: "240px 265px", animation: "spin-slow 3s linear infinite" }}>
        {[0, 120, 240].map((deg, i) => (
          <ellipse key={i} cx={240 + 14 * Math.cos(deg * Math.PI / 180)} cy={265 + 14 * Math.sin(deg * Math.PI / 180)} rx="12" ry="4" fill="rgba(0,174,239,0.5)" transform={`rotate(${deg} 240 265)`} />
        ))}
      </g>
      {/* Pipe connecting indoor to outdoor */}
      <path d="M 220 170 Q 220 195 220 220" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 260 170 Q 260 195 260 220" stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Cooling waves from unit */}
      {[0, 1, 2].map(i => (
        <path key={i} d={`M 60 ${118 + i * 10} Q 30 ${112 + i * 10} 10 ${118 + i * 10}`} stroke="rgba(0,174,239,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;0;0.3" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
          <animate attributeName="d" values={`M 60 ${118 + i * 10} Q 30 ${112 + i * 10} 10 ${118 + i * 10}; M 60 ${118 + i * 10} Q 30 ${122 + i * 10} 10 ${118 + i * 10}; M 60 ${118 + i * 10} Q 30 ${112 + i * 10} 10 ${118 + i * 10}`} dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
        </path>
      ))}

      {/* Defs */}
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#0d1a35" />
        </linearGradient>
        <linearGradient id="outerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2d4a" />
          <stop offset="100%" stopColor="#0a1424" />
        </linearGradient>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flowL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00AEEF" stopOpacity="0" />
          <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="flowR" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0D9488" stopOpacity="0" />
          <stop offset="100%" stopColor="#0D9488" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ProcessIllustration({ step }: { step: number }) {
  const colors = ["#00AEEF", "#0D9488", "#22C55E", "#6366f1", "#f59e0b"];
  const color = colors[step % colors.length];
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill={`${color}18`} stroke={`${color}30`} strokeWidth="1" />
      <circle cx="40" cy="40" r="28" fill={`${color}25`} />
      <circle cx="40" cy="40" r="18" fill={color} opacity="0.9" />
    </svg>
  );
}

/* ────────────────────────────────────────────────
   ANIMATED COUNTER
──────────────────────────────────────────────── */
function AnimatedCounter({ from = 0, to, suffix = "", duration = 1.5 }: { from?: number; to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ────────────────────────────────────────────────
   SECTION LABEL
──────────────────────────────────────────────── */
function SectionLabel({ children, dark = false, color = "brand" }: { children: React.ReactNode; dark?: boolean; color?: "brand" | "teal" | "green" | "amber" }) {
  const cls = {
    brand: dark ? "tag-white" : "tag-brand",
    teal: dark ? "tag-white" : "tag-teal",
    green: dark ? "tag-white" : "tag-green",
    amber: dark ? "tag-white" : "tag-amber",
  }[color];
  return <span className={`label-tag ${cls}`}>{children}</span>;
}

/* ────────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", location: "", message: "" });

  const { scrollYProgress } = useScroll();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
    setShowTop(window.scrollY > 500);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smartacservice.in",
    name: "Smart AC Service",
    description: "Premium AC repair, installation, gas filling and maintenance in Nalasopara, Vasai, Virar, Naigaon, Bhayandar and Mumbai.",
    url: "https://smartacservice.in",
    telephone: "+91 81159 53395",
    priceRange: "₹₹",
    areaServed: areas.map(a => a.name),
    address: { "@type": "PostalAddress", addressLocality: "Nalasopara", addressRegion: "Maharashtra", postalCode: "401209", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: "19.4234", longitude: "72.7989" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "21:00" }],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1000" },
  };

  /* ── LOADER ── */
  if (loading) {
    return (
      <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center mesh-dark">
        <div className="orb orb-brand w-96 h-96 -top-32 -left-32" />
        <div className="orb orb-teal w-80 h-80 -bottom-20 -right-20" />
        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#00AEEF] to-[#0D9488]"
          style={{ boxShadow: "0 0 60px rgba(0,174,239,0.5), 0 0 120px rgba(0,174,239,0.2)" }}>
          <Zap className="h-12 w-12 text-white" />
          <div className="absolute inset-0 rounded-[28px] animate-spin-slow opacity-50"
            style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(0,174,239,0.3) 360deg)", borderRadius: "inherit" }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center">
          <p className="font-display text-3xl font-extrabold text-white mb-1" style={{ letterSpacing: "-0.02em" }}>Smart AC Service</p>
          <p className="text-sm font-medium text-slate-400 mb-8">Loading premium experience…</p>
        </motion.div>
        <div className="flex gap-3">
          {[0, 1, 2].map(i => <div key={i} className="loader-dot h-2.5 w-2.5 rounded-full bg-[#00AEEF]" style={{ animationDelay: `${i * 0.16}s` }} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#F8FAFC", color: "#030712" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SCROLL PROGRESS */}
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      {/* ═══════════════════════════════════
          ANNOUNCEMENT TICKER
      ═══════════════════════════════════ */}
      <div className="relative overflow-hidden py-2.5" style={{ background: "linear-gradient(90deg,#080d1a,#0d2040,#080d1a)" }}>
        <div className="animate-ticker flex whitespace-nowrap select-none">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="mx-10 flex items-center gap-8 text-[13px] font-semibold">
              <span className="flex items-center gap-2 text-white"><Sparkles className="h-3 w-3 text-[#00AEEF]" /> Same Day AC Service Available</span>
              <span className="flex items-center gap-2 text-slate-300"><Phone className="h-3 w-3 text-[#00AEEF]" /> Call: {PHONE_DISPLAY}</span>
              <span className="flex items-center gap-2 text-slate-300"><MessageCircle className="h-3 w-3 text-[#22C55E]" /> WhatsApp 24/7</span>
              <span className="flex items-center gap-2 text-yellow-300 text-xs"><Star className="h-3 w-3 fill-yellow-300" /> 4.9★ Google Rating · 1000+ Customers</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
          NAVBAR
      ═══════════════════════════════════ */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass-white shadow-md border-b border-black/5" : "bg-white/70 backdrop-blur-sm"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#0D9488]" style={{ boxShadow: "0 4px 16px rgba(0,174,239,0.35)" }}>
              <Zap className="h-6 w-6 text-white" />
              <div className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#22C55E] border-2 border-white">
                <div className="live-dot w-full h-full rounded-full text-[#22C55E]" />
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-[17px] font-extrabold text-gray-900 leading-none" style={{ letterSpacing: "-0.01em" }}>Smart AC Service</p>
              <p className="text-[11px] font-semibold text-[#00AEEF] mt-0.5 tracking-wider">PREMIUM AC CARE</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[["Home", "#home"], ["Services", "#services"], ["Pricing", "#pricing"], ["About", "#about"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} className="btn-ghost text-sm underline-anim">{l}</a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="btn-outline text-sm py-2.5 px-5">
              <Phone className="h-3.5 w-3.5 text-[#00AEEF]" /> {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              Book Service <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile CTA + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href={`tel:${PHONE}`} className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00AEEF]/10 text-[#00AEEF]">
              <Phone className="h-4 w-4" />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600" aria-label="Toggle menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mobile-menu-backdrop lg:hidden" onClick={() => setMenuOpen(false)} />
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}
                className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-gray-100 bg-white/95 backdrop-blur-xl shadow-card-xl overflow-hidden lg:hidden z-[110]">
                <div className="flex flex-col p-3 gap-1">
                  {[["Home", "#home"], ["Services", "#services"], ["Pricing", "#pricing"], ["About", "#about"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
                    <a key={l} href={h} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#00AEEF] transition-colors">{l}</a>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100 flex flex-col gap-2">
                    <a href={`tel:${PHONE}`} className="btn-outline text-sm justify-center"><Phone className="h-4 w-4 text-[#00AEEF]" /> Call Now</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-sm justify-center">Book Service <ArrowRight className="h-4 w-4" /></a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ═══════════════════════════════════
            HERO
        ═══════════════════════════════════ */}
        <section id="home" className="relative overflow-hidden mesh-hero dot-grid">
          {/* Orbs */}
          <div className="orb orb-brand w-[600px] h-[600px] -top-64 -left-32 opacity-60" />
          <div className="orb orb-teal  w-[500px] h-[500px] -bottom-40 -right-20 opacity-50" />

          <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-0 sm:px-6 lg:px-8 lg:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
              {/* ── LEFT ── */}
              <motion.div initial="hidden" animate="visible" variants={vStagger} className="relative z-10 pb-12 lg:pb-24">
                <motion.div variants={vFadeUp}>
                  <SectionLabel>
                    <BadgeCheck className="h-3 w-3" /> Trusted by 1,000+ Homes
                  </SectionLabel>
                </motion.div>

                <motion.h1 variants={vFadeUp} className="display-hero font-display mt-6 text-gray-900">
                  The Last AC&nbsp;Service<br />
                  You'll Ever&nbsp;
                  <span className="text-grad-brand">Need to&nbsp;Search&nbsp;For</span>
                </motion.h1>

                <motion.p variants={vFadeUp} className="mt-6 text-lg leading-relaxed text-gray-500 max-w-lg">
                  Fast, reliable and affordable AC Repair, Installation, Gas Filling and Deep Cleaning by certified technicians across Nalasopara, Vasai, Virar &amp; Mumbai.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={vFadeUp} className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" id="hero-book" className="btn-primary">
                    Book Service — Free Inspection <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={`tel:${PHONE}`} id="hero-call" className="btn-outline">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a href={WHATSAPP} id="hero-wa" target="_blank" rel="noreferrer" className="btn-wa">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </motion.div>

                {/* Trust badges */}
                <motion.div variants={vStagger} className="mt-8 grid grid-cols-2 gap-3">
                  {["Same Day Service", "30-Min Response", "Verified Technicians", "Affordable Pricing"].map(b => (
                    <motion.div key={b} variants={vFadeUp} className="flex items-center gap-2.5 rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#22C55E]" />
                      <span className="text-[13px] font-semibold text-gray-700">{b}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Avatar social proof */}
                <motion.div variants={vFadeUp} className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["PS", "RD", "MN", "AR"].map(init => (
                      <div key={init} className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0D9488] text-xs font-bold text-white avatar-ring">{init}</div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}</div>
                    <p className="text-[12px] text-gray-500 mt-0.5"><strong className="text-gray-800">4.9/5</strong> from 1,000+ Google reviews</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── RIGHT — ILLUSTRATION + FLOATING CARDS ── */}
              <motion.div initial="hidden" animate="visible" variants={vSlideR} className="relative pb-12 lg:pb-0 flex items-end justify-center lg:justify-end">
                {/* Glow ring behind illustration */}
                <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-gradient-to-br from-[#00AEEF]/10 to-[#0D9488]/10 blur-3xl" />

                {/* Illustration */}
                <div className="relative w-full max-w-md">
                  <ACSplitIllustration />

                  {/* Floating card 1 — top-left */}
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    className="absolute -top-6 -left-4 flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-card">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#22C55E]/10">
                      <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-medium">Just Booked</p>
                      <p className="text-[13px] font-bold text-gray-900">AC Repair · Vasai</p>
                    </div>
                  </motion.div>

                  {/* Floating card 2 — top-right */}
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-4 -right-4 flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-3 shadow-card">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-50">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-medium">Latest Review</p>
                      <p className="text-[13px] font-bold text-gray-900">★★★★★ Excellent!</p>
                    </div>
                  </motion.div>

                  {/* Floating card 3 — bottom */}
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-[#0D9488] px-5 py-3 shadow-brand text-white whitespace-nowrap">
                    <Thermometer className="h-4 w-4" />
                    <span className="text-[13px] font-bold">30-Min Response · Same Day Service</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative bg-white/70 backdrop-blur-sm border-t border-gray-100/80 mt-8">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }} className="text-center">
                    <p className="font-display text-3xl font-extrabold text-[#00AEEF] sm:text-4xl" style={{ letterSpacing: "-0.03em" }}>
                      <AnimatedCounter to={parseFloat(s.val)} suffix={s.suffix} duration={1.8} />
                    </p>
                    <p className="mt-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            EMERGENCY BANNER
        ═══════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={vFadeUp}
            className="relative overflow-hidden rounded-3xl p-px"
            style={{ background: "linear-gradient(135deg,#00AEEF,#0D9488,#22C55E)" }}>
            <div className="relative rounded-[23px] bg-gradient-to-r from-[#080d1a] via-[#0d1f3c] to-[#080d1a] px-6 py-6 sm:px-10 sm:py-8">
              <div className="orb orb-brand w-64 h-64 -top-20 right-20 opacity-20" />
              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#0D9488]">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-yellow-400">
                      🎉 Limited Offer This Week
                    </span>
                    <h2 className="font-display mt-2 text-xl font-extrabold text-white-500 sm:text-2xl" style={{ letterSpacing: "-0.01em" }}>
                      Free Inspection on All AC Repair Bookings
                    </h2>
                    <p className="mt-1 text-sm text-white-400">Save ₹200 on your first visit. Valid for Nalasopara, Vasai &amp; Virar. Limited slots daily.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
                  <a href={`tel:${PHONE}`} className="btn-primary whitespace-nowrap"><Phone className="h-4 w-4" /> Call Now</a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa whitespace-nowrap"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════
            SERVICES
        ═══════════════════════════════════ */}
        <section id="services" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={vStagger}>
            <motion.div variants={vFadeUp} className="max-w-2xl">
              <SectionLabel color="brand"><Wrench className="h-3 w-3" /> Our Services</SectionLabel>
              <h2 className="display-xl font-display mt-4 text-gray-900">
                Everything Your AC<br />Needs — Under One Roof
              </h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                From rapid repairs to premium deep cleans — every service is done right, on time, and at a price that&apos;s always clear before we start.
              </p>
            </motion.div>

            <motion.div variants={vStagger} className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.article key={s.title} variants={vFadeUp} whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.22 }}
                    className="service-card-accent group relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-card-lg">
                    {/* Top gradient accent line on hover (CSS) */}
                    <div className="flex items-start justify-between gap-3">
                      <div className={`icon-box icon-box-md bg-gradient-to-br ${s.hue} text-white shadow-md`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="shrink-0 rounded-full bg-[#00AEEF]/8 px-3 py-1.5 text-[13px] font-bold text-[#0090C8]">{s.price}</span>
                    </div>
                    <h3 className="font-display mt-5 text-[17px] font-bold text-gray-900" style={{ letterSpacing: "-0.01em" }}>{s.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-gray-500">{s.desc}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#00AEEF] transition-all duration-200 group-hover:gap-2.5">
                      Book Now <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════
            WHY CHOOSE US
        ═══════════════════════════════════ */}
        <section className="relative overflow-hidden noise mesh-dark">
          <div className="orb orb-brand w-[500px] h-[500px] top-0 right-0 opacity-15" />
          <div className="orb orb-teal  w-[400px] h-[400px] bottom-0 left-0 opacity-15" />
          <div className="dot-grid-dark absolute inset-0 opacity-60" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={vStagger}>
              <motion.div variants={vFadeUp} className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                <div>
                  <SectionLabel dark color="brand"><ShieldCheck className="h-3 w-3" /> Why Choose Us</SectionLabel>
                  <h2 className="display-xl font-display mt-4 text-white">
                    The Standards You Deserve,<br />
                    <span className="text-grad-brand">Delivered Every Time</span>
                  </h2>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed lg:mb-2">
                  We combine deep technical expertise, transparent communication, and genuine care to create a service experience that feels premium at every touchpoint.
                </p>
              </motion.div>

              <motion.div variants={vStagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {whyUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.title} variants={vFadeUp} whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.2 }}
                      className="group relative rounded-[22px] border border-white/8 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00AEEF]/30 hover:bg-white/8">
                      {/* Top-right stat */}
                      <div className="absolute top-4 right-4 text-[11px] font-bold text-[#00AEEF] opacity-60 group-hover:opacity-100 transition-opacity">{item.stat}</div>
                      <div className="icon-box icon-box-md bg-[#00AEEF]/12 text-[#00AEEF] group-hover:bg-[#00AEEF]/20 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display mt-5 text-[15px] font-bold text-white" style={{ letterSpacing: "-0.01em" }}>{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white">
          <div className="line-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={vStagger}>
              <motion.div variants={vFadeUp} className="text-center max-w-2xl mx-auto">
                <SectionLabel color="teal"><Timer className="h-3 w-3" /> How It Works</SectionLabel>
                <h2 className="display-xl font-display mt-4 text-gray-900">
                  From Booking to Cool Air<br />in Under 2 Hours
                </h2>
                <p className="mt-4 text-lg text-gray-500">Every step is transparent, efficient, and designed around your convenience — no guesswork, no surprise charges.</p>
              </motion.div>

              {/* Timeline */}
              <div className="relative mt-16">
                {/* Connector line */}
                <div className="absolute top-9 left-0 right-0 hidden h-px lg:block" style={{ background: "linear-gradient(90deg, transparent, rgba(0,174,239,0.2) 10%, rgba(0,174,239,0.2) 90%, transparent)" }} />

                <motion.div variants={vStagger} className="grid gap-6 lg:grid-cols-5">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div key={step.title} variants={vFadeUp} className="group relative flex flex-col items-center text-center lg:items-center">
                        {/* Step bubble */}
                        <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#0D9488] text-white shadow-brand transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-lg">
                          <Icon className="h-7 w-7" />
                          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-[#00AEEF] border border-gray-800">
                            {step.n}
                          </span>
                        </div>

                        <div className="mt-5 px-2">
                          <h3 className="font-display text-[15px] font-bold text-gray-900" style={{ letterSpacing: "-0.01em" }}>{step.title}</h3>
                          <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{step.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div variants={vFadeUp} className="mt-14 text-center">
                <a href="#contact" className="btn-primary text-base">
                  Start Your Booking Now <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            PRICING
        ═══════════════════════════════════ */}
        <section id="pricing" className="relative overflow-hidden mesh-light dot-grid">
          <div className="orb orb-brand w-96 h-96 top-20 right-20 opacity-20" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={vStagger}>
              <motion.div variants={vFadeUp} className="text-center max-w-2xl mx-auto">
                <SectionLabel color="green"><Sparkles className="h-3 w-3" /> Pricing</SectionLabel>
                <h2 className="display-xl font-display mt-4 text-gray-900">
                  Transparent Pricing,<br />No Surprises Ever
                </h2>
                <p className="mt-4 text-lg text-gray-500">Every rupee accounted for before we touch your AC. Choose the plan that fits — or call for a custom quote.</p>
              </motion.div>

              <motion.div variants={vStagger} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map(plan => (
                  <motion.div key={plan.id} variants={vScale}
                    whileHover={{ y: plan.featured ? -6 : -4, scale: plan.featured ? 1.02 : 1.01 }}
                    className={`relative flex flex-col rounded-[26px] overflow-hidden transition-all duration-300 ${plan.featured
                      ? "bg-gradient-to-br from-[#00AEEF] via-[#0095d4] to-[#0D9488] text-white pricing-glow"
                      : "bg-white border border-gray-100 shadow-card hover:shadow-card-lg"
                      }`}>
                    {plan.tag && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl bg-yellow-400 px-4 py-1 text-[11px] font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                        {plan.tag}
                      </div>
                    )}

                    <div className={`flex flex-col flex-1 p-6 ${plan.tag ? "pt-10" : "pt-6"}`}>
                      <p className={`text-[11px] font-bold uppercase tracking-widest ${plan.featured ? "text-cyan-200" : "text-gray-400"}`}>{plan.name}</p>

                      <div className="mt-3 flex items-end gap-1.5">
                        <span className={`font-display text-4xl font-extrabold ${plan.featured ? "text-white" : "text-gray-900"}`} style={{ letterSpacing: "-0.03em" }}>{plan.price}</span>
                        <span className={`mb-1 text-sm ${plan.featured ? "text-cyan-200" : "text-gray-400"}`}>{plan.period}</span>
                      </div>

                      <ul className="mt-6 flex-1 space-y-3">
                        {plan.features.map(f => (
                          <li key={f} className={`flex items-start gap-2.5 text-[14px] ${plan.featured ? "text-cyan-50" : "text-gray-600"}`}>
                            <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-white" : "text-[#22C55E]"}`} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <a href="#contact" className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-bold transition-all duration-200 hover:scale-[1.02] ${plan.featured
                        ? "bg-white text-[#0D9488] hover:bg-slate-50 shadow-lg"
                        : "bg-gradient-to-r from-[#00AEEF] to-[#0D9488] text-white shadow-brand hover:shadow-brand-lg"
                        }`}>
                        {plan.cta} <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={vFadeUp} className="mt-8 text-center text-[13px] text-gray-400">
                * Prices are indicative. Final quote shared before any work starts. GST applicable. Call for custom model pricing.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            ABOUT
        ═══════════════════════════════════ */}
        <section id="about" className="relative overflow-hidden bg-white">
          <div className="line-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={vStagger} className="grid gap-16 lg:grid-cols-2 lg:items-center">
              {/* Left */}
              <motion.div variants={vSlideL}>
                <SectionLabel color="brand">About Smart AC Service</SectionLabel>
                <h2 className="display-lg font-display mt-4 text-gray-900">
                  Built on Trust.<br />Powered by Expertise.<br />
                  <span className="text-grad-brand">Driven by You.</span>
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-gray-500">
                  Smart AC Service was founded with one mission — to bring premium, hotel-grade AC care to every home and office in the Mumbai region, at a price that&apos;s always fair and honest.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-400">
                  Our certified technicians undergo regular training, use only OEM-grade parts, and follow a strict quality checklist for every job — so you never have to worry about the person handling your AC.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { val: "1000+", label: "Customers Served", color: "from-[#00AEEF] to-[#0D9488]" },
                    { val: "4.9★", label: "Google Rating", color: "from-yellow-400 to-orange-400" },
                    { val: "5+ Yrs", label: "In Business", color: "from-[#0D9488] to-emerald-500" },
                    { val: "30 min", label: "Avg Response", color: "from-violet-500 to-[#00AEEF]" },
                  ].map(({ val, label, color }) => (
                    <div key={label} className="rounded-[20px] border border-gray-100 bg-gray-50/80 p-4">
                      <p className={`font-display text-2xl font-extrabold text-grad-brand`} style={{ background: `linear-gradient(135deg, ${color.includes('[#00AEEF]') ? '#00AEEF' : color.includes('yellow') ? '#f59e0b' : '#0D9488'}, ${color.includes('[#0D9488]') ? '#0D9488' : color.includes('emerald') ? '#22C55E' : '#0D9488'})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{val}</p>
                      <p className="mt-1 text-[12px] font-semibold text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right */}
              <motion.div variants={vSlideR} className="grid grid-cols-2 gap-4">
                {[
                  { title: "Certified Technicians", desc: "Trained, background-verified professionals across all major AC brands.", grad: "from-[#00AEEF] to-[#0D9488]", icon: BadgeCheck },
                  { title: "Affordable Pricing", desc: "Transparent quotes. No hidden charges. Competitive rates every time.", grad: "from-[#0D9488] to-[#22C55E]", icon: Sparkles },
                  { title: "Fast Response", desc: "Confirmed bookings in minutes. Same-day dispatch across service areas.", grad: "from-violet-500 to-[#00AEEF]", icon: Clock3 },
                  { title: "100% Satisfaction", desc: "Quality work, follow-up support, and a warranty on every job done.", grad: "from-orange-400 to-rose-400", icon: Star },
                ].map(({ title, desc, grad, icon: Icon }) => (
                  <motion.div key={title} whileHover={{ scale: 1.03, y: -3 }} transition={{ duration: 0.2 }}
                    className={`rounded-[22px] bg-gradient-to-br ${grad} p-5 text-white shadow-md`}>
                    <Icon className="h-6 w-6 text-white/80 mb-3" />
                    <p className="font-display text-[15px] font-bold" style={{ letterSpacing: "-0.01em" }}>{title}</p>
                    <p className="mt-2 text-[12px] leading-relaxed text-white/75">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            BEFORE / AFTER + SERVICE AREAS
        ═══════════════════════════════════ */}
        <section className="relative overflow-hidden mesh-light">
          <div className="dot-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={vStagger} className="grid gap-8 lg:grid-cols-2">
              {/* Before/After */}
              <motion.div variants={vSlideL} className="rounded-[28px] bg-white border border-gray-100 p-8 shadow-card overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AEEF] to-[#0D9488]" />
                <SectionLabel color="brand">Before &amp; After</SectionLabel>
                <h2 className="display-lg font-display mt-4 text-gray-900">What a Professional Service Actually Does</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-red-50 border border-red-100 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-500 mb-3">⚠ Before Service</p>
                    <ul className="space-y-2.5 text-[14px] text-gray-600">
                      {["Clogged, dusty filters", "Weak or warm airflow", "Noisy compressor", "High electricity bill", "Water dripping inside"].map(i => (
                        <li key={i} className="flex items-center gap-2.5"><span className="text-red-400 font-bold text-base">✗</span>{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-3">✅ After Service</p>
                    <ul className="space-y-2.5 text-[14px] text-gray-600">
                      {["Deep cleaned, fresh filters", "Powerful, cool airflow", "Whisper-quiet operation", "25% energy savings", "Zero leakage, fully sealed"].map(i => (
                        <li key={i} className="flex items-center gap-2.5"><span className="text-emerald-500 font-bold text-base">✓</span>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a href="#contact" className="btn-primary mt-6 text-sm">Get This For Your AC <ArrowRight className="h-4 w-4" /></a>
              </motion.div>

              {/* Service Areas */}
              <motion.div variants={vSlideR}>
                <SectionLabel color="teal"><MapPin className="h-3 w-3" /> Service Areas</SectionLabel>
                <h2 className="display-lg font-display mt-4 text-gray-900">
                  Local. Quick.<br />Always Nearby.
                </h2>
                <p className="mt-4 text-[17px] text-gray-500">We service every major neighbourhood — with fast dispatch and local expertise you can count on.</p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {areas.map(a => (
                    <motion.div key={a.name} whileHover={{ scale: 1.04, y: -3 }} transition={{ duration: 0.18 }}
                      className="group flex items-center gap-3 rounded-2xl bg-white border border-gray-100 px-4 py-4 shadow-sm hover:shadow-card hover:border-[#00AEEF]/20 transition-all duration-200">
                      <span className="text-2xl">{a.icon}</span>
                      <div>
                        <p className="font-display text-[14px] font-bold text-gray-900" style={{ letterSpacing: "-0.01em" }}>{a.name}</p>
                        <p className="text-[11px] text-gray-400">{a.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#00AEEF]/6 border border-[#00AEEF]/15 px-5 py-4">
                  <MapPin className="h-5 w-5 shrink-0 text-[#00AEEF]" />
                  <p className="text-[14px] text-gray-600"><strong className="text-gray-900">Not in the list?</strong> Call us anyway — we&apos;re expanding fast and may cover your area already.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            TESTIMONIALS
        ═══════════════════════════════════ */}
        <section className="relative overflow-hidden noise mesh-dark">
          <div className="dot-grid-dark absolute inset-0 opacity-50" />
          <div className="orb orb-brand w-[500px] h-[500px] -top-32 right-32 opacity-12" />
          <div className="orb orb-teal  w-[400px] h-[400px] bottom-0 left-0 opacity-12" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={vStagger}>
              <motion.div variants={vFadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-14">
                <div>
                  <SectionLabel dark><Star className="h-3 w-3 fill-yellow-300 text-yellow-300" /> Google Reviews</SectionLabel>
                  <h2 className="display-xl font-display mt-4 text-white">
                    Real Words from<br />Real Customers
                  </h2>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur shrink-0">
                  <div>
                    <p className="font-display text-4xl font-extrabold text-white leading-none">4.9</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">Google Rating</p>
                    <p className="text-[12px] text-slate-400">1,000+ reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={vStagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((r) => (
                  <motion.div key={r.name} variants={vFadeUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}
                    className="relative flex flex-col rounded-[22px] border border-white/8 bg-white/6 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/10 overflow-hidden">
                    {/* Big quote mark */}
                    <span className="quote-mark">&ldquo;</span>

                    <div className="flex gap-0.5 mb-4">
                      {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>

                    <p className="text-[14px] leading-relaxed text-slate-300 flex-1">&ldquo;{r.text}&rdquo;</p>

                    <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/8">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0D9488] text-[13px] font-bold text-white">
                        {r.init}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-white">{r.name}</p>
                        <p className="text-[11px] text-slate-500">{r.loc} · {r.date}</p>
                      </div>
                      <div className="ml-auto text-[10px] font-semibold text-slate-600 bg-white/5 px-2 py-1 rounded-full">Google</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            FAQ
        ═══════════════════════════════════ */}
        <section id="faq" className="relative overflow-hidden bg-white">
          <div className="line-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={vStagger} className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              {/* Left sticky */}
              <motion.div variants={vSlideL} className="lg:sticky lg:top-28">
                <SectionLabel color="brand">FAQ</SectionLabel>
                <h2 className="display-lg font-display mt-4 text-gray-900">
                  Questions?<br />We&apos;ve Got<br />
                  <span className="text-grad-brand">Clear Answers.</span>
                </h2>
                <p className="mt-5 text-[17px] text-gray-500 leading-relaxed">
                  Everything you need to know before booking — answered plainly and honestly.
                </p>

                {/* Contact tiles */}
                <div className="mt-8 space-y-3">
                  <a href={`tel:${PHONE}`} className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4 transition-all hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/4">
                    <div className="icon-box icon-box-sm bg-[#00AEEF]/10 text-[#00AEEF]"><Phone className="h-4 w-4" /></div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400">Call directly</p>
                      <p className="text-[15px] font-bold text-gray-900">{PHONE_DISPLAY}</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-gray-300 group-hover:text-[#00AEEF] transition-colors" />
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4 transition-all hover:border-[#22C55E]/30 hover:bg-[#22C55E]/4">
                    <div className="icon-box icon-box-sm bg-[#22C55E]/10 text-[#22C55E]"><MessageCircle className="h-4 w-4" /></div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400">Chat instantly</p>
                      <p className="text-[15px] font-bold text-gray-900">WhatsApp Us</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-gray-300 group-hover:text-[#22C55E] transition-colors" />
                  </a>
                </div>
              </motion.div>

              {/* Accordion */}
              <motion.div variants={vStagger} className="space-y-2.5">
                {faqs.map((faq, i) => (
                  <motion.div key={i} variants={vFadeUp}
                    className={`overflow-hidden rounded-[18px] border transition-all duration-300 ${openFaq === i ? "border-[#00AEEF]/25 bg-[#00AEEF]/3" : "border-gray-100 bg-white hover:border-gray-200"}`}>
                    <button id={`faq-btn-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center gap-4 px-5 py-4.5 text-left">
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${openFaq === i ? "bg-[#00AEEF] text-white" : "bg-gray-100 text-gray-500"}`}>
                        {i + 1}
                      </span>
                      <span className={`flex-1 text-[15px] font-semibold ${openFaq === i ? "text-[#0090C8]" : "text-gray-800"}`} style={{ letterSpacing: "-0.01em" }}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-[#00AEEF] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
                          <p className="px-5 pb-5 pl-[52px] text-[14px] leading-relaxed text-gray-500">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            CONTACT
        ═══════════════════════════════════ */}
        <section id="contact" className="relative overflow-hidden noise mesh-dark">
          <div className="dot-grid-dark absolute inset-0 opacity-40" />
          <div className="orb orb-brand w-[400px] h-[400px] top-0 right-0 opacity-15" />
          <div className="orb orb-teal  w-[350px] h-[350px] bottom-0 left-20 opacity-12" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={vStagger} className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              {/* Left contact info */}
              <motion.div variants={vSlideL}>
                <SectionLabel dark color="brand">Contact Us</SectionLabel>
                <h2 className="display-lg font-display mt-4 text-white">
                  Ready for Cool Comfort?<br />
                  <span className="text-grad-brand">Let&apos;s Talk.</span>
                </h2>
                <p className="mt-5 text-[17px] text-slate-400 leading-relaxed">
                  Pick your preferred channel. We respond in minutes and can often schedule you the very same day.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    { href: `tel:${PHONE}`, icon: Phone, label: "Call Us Directly", value: PHONE_DISPLAY, grad: "from-[#00AEEF] to-[#0D9488]" },
                    { href: WHATSAPP, icon: MessageCircle, label: "WhatsApp Chat", value: "Instant reply", grad: "from-emerald-500 to-green-500", ext: true },
                    { href: `mailto:${EMAIL}`, icon: Mail, label: "Email Us", value: EMAIL, grad: "from-violet-500 to-purple-500" },
                    { href: "#", icon: MapPin, label: "Service Regions", value: "Nalasopara · Vasai · Virar · Mumbai", grad: "from-orange-400 to-amber-400" },
                  ].map(({ href, icon: Icon, label, value, grad, ext }) => (
                    <a key={label} href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group flex items-center gap-4 rounded-[20px] border border-white/8 bg-white/5 p-4 backdrop-blur-sm transition-all duration-200 hover:border-white/15 hover:bg-white/10">
                      <div className={`icon-box icon-box-md bg-gradient-to-br ${grad} shadow-md`}><Icon className="h-5 w-5 text-white" /></div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-500">{label}</p>
                        <p className="text-[14px] font-semibold text-white truncate">{value}</p>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 text-slate-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white shrink-0" />
                    </a>
                  ))}
                </div>

                {/* Trust note */}
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#22C55E]/15 bg-[#22C55E]/6 px-4 py-4">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#22C55E] mt-0.5" />
                  <p className="text-[13px] text-slate-400">
                    <strong className="text-white font-semibold">No upfront payment required.</strong> We quote before we start and bill only after the work is done to your satisfaction.
                  </p>
                </div>
              </motion.div>

              {/* Booking Form */}
              <motion.div variants={vSlideR}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                  <h3 className="font-display text-xl font-bold text-white" style={{ letterSpacing: "-0.01em" }}>Request a Booking</h3>
                  <p className="mt-1 text-[14px] text-slate-400">We&apos;ll confirm within 30 minutes and schedule at your convenience.</p>

                  <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Full Name</span>
                        <input id="contact-name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          className="input-field" placeholder="Your full name" />
                      </label>
                      <label className="block">
                        <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Phone Number</span>
                        <input id="contact-phone" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="input-field" placeholder="+91 00000 00000" />
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Service Needed</span>
                        <select id="contact-service" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                          className="input-field" style={{ background: "rgba(13,21,38,0.9)" }}>
                          <option value="">Select a service…</option>
                          {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                        </select>
                      </label>
                      <label className="block">
                        <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Your Location</span>
                        <select id="contact-location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })}
                          className="input-field" style={{ background: "rgba(13,21,38,0.9)" }}>
                          <option value="">Select your area…</option>
                          {areas.map(a => <option key={a.name} value={a.name}>{a.name}</option>)}
                        </select>
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Describe the Issue</span>
                      <textarea id="contact-message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={4} className="input-field resize-none" placeholder="What's happening with your AC? Any specific sounds, smells, or problems…" />
                    </label>

                    <button id="contact-submit" type="submit" className="btn-primary w-full justify-center text-base py-4">
                      <Send className="h-4 w-4" /> Send Booking Request
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3.5 text-[14px] font-bold text-white backdrop-blur transition-all hover:bg-white/8">
                        <Phone className="h-4 w-4" /> Call Now
                      </a>
                      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-wa justify-center text-[14px]">
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 flex sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl pb-safe">
          <a href={`tel:${PHONE}`} className="flex flex-1 items-center justify-center gap-2 py-4 text-[13px] font-bold text-[#00AEEF]">
            <Phone className="h-4 w-4" /> Call
          </a>
          <div className="w-px bg-gray-100" />
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 py-4 text-[13px] font-bold text-[#22C55E]">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <div className="w-px bg-gray-100" />
          <a href="#contact" className="flex flex-1 items-center justify-center gap-2 bg-gradient-to-r from-[#00AEEF] to-[#0D9488] py-4 text-[13px] font-bold text-white">
            Book <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </main>

      {/* ═══════════════════════════════════
          FOOTER
      ═══════════════════════════════════ */}
      <footer className="border-t border-white/5 bg-[#05080f] text-slate-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#0D9488]">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-display text-[16px] font-extrabold text-white" style={{ letterSpacing: "-0.01em" }}>Smart AC Service</p>
                  <p className="text-[10px] font-bold tracking-widest text-[#00AEEF]">PREMIUM AC CARE</p>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed">
                Premium AC repair, installation, gas filling and maintenance for homes and businesses across the Mumbai region.
              </p>
              <div className="mt-5 flex gap-2.5">
                {[
                  { href: `tel:${PHONE}`, icon: Phone, color: "hover:text-[#00AEEF] hover:border-[#00AEEF]/30" },
                  { href: WHATSAPP, icon: MessageCircle, color: "hover:text-[#22C55E] hover:border-[#22C55E]/30", ext: true },
                  { href: `mailto:${EMAIL}`, icon: Mail, color: "hover:text-violet-400 hover:border-violet-400/30" },
                ].map(({ href, icon: Icon, color, ext }) => (
                  <a key={href} href={href} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-slate-500 transition-all duration-200 ${color}`}>
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-4">Quick Links</p>
              <ul className="space-y-2.5 text-[14px]">
                {[["Home", "#home"], ["Services", "#services"], ["Pricing", "#pricing"], ["About", "#about"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-white transition-colors duration-150">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-4">Services</p>
              <ul className="space-y-2.5 text-[14px]">
                {services.slice(0, 7).map(s => (
                  <li key={s.title}><a href="#services" className="hover:text-white transition-colors duration-150">{s.title}</a></li>
                ))}
              </ul>
            </div>

            {/* Areas + Contact */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-4">Service Areas</p>
              <ul className="space-y-2 text-[14px] mb-6">
                {areas.map(a => (
                  <li key={a.name} className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-[#00AEEF] shrink-0" />{a.name}</li>
                ))}
              </ul>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-3">Contact</p>
              <ul className="space-y-2 text-[14px]">
                <li><a href={`tel:${PHONE}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">{EMAIL}</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-[#22C55E] transition-colors">WhatsApp Support</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
            <p className="text-[13px]">© 2026 Smart AC Service. All rights reserved.</p>
            <p className="text-[12px] text-slate-700">Built for maximum performance and conversion.</p>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════
          FLOATING BUTTONS (Desktop)
      ═══════════════════════════════════ */}
      <div className="fixed bottom-6 right-4 z-50 hidden sm:flex flex-col gap-3 sm:right-6 sm:bottom-8">
        <AnimatePresence>
          {showTop && (
            <motion.a initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
              href="#home" aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-card transition-all hover:border-[#00AEEF]/30 hover:text-[#00AEEF] hover:shadow-card-lg">
              <ArrowUp className="h-5 w-5" />
            </motion.a>
          )}
        </AnimatePresence>
        <motion.a initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          href={`tel:${PHONE}`} aria-label="Call" className="btn-primary py-3 px-4 text-sm">
          <Phone className="h-4 w-4" /> Call
        </motion.a>
        <motion.a initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}
          href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="btn-wa py-3 px-4 text-sm">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </motion.a>
      </div>
    </div>
  );
}
