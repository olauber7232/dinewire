// DineWire Brand Marketing Website
// PURE FRONTEND – Backend/API removed
// Optimized for GitHub Hosting & D-U-N-S Verification
// Tech: React 18 + TypeScript + Tailwind CSS
import { Router } from "wouter";
import { Link, Route, Switch } from "wouter";

import {
  Shield,
  Zap,
  BarChart,
  Smartphone,
  Globe,
  Check,
  Phone as PhoneIcon
} from "lucide-react";

// --- shadcn/ui REMOVED (local lightweight wrappers added below) ---

// Minimal Card replacements to keep JSX unchanged
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-bold ${className}`}>{children}</h3>
);

const WHATSAPP = "https://wa.me/918302718516";
const CONTACT_EMAIL = "team@dinewire.site";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-center">
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Professional Websites for Restaurants
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10">
          DineWire helps restaurants build their own digital identity with custom websites, WhatsApp ordering, and a zero-commission model.
        </p>
        <div className="flex justify-center items-center gap-4">
          <a
            href={WHATSAPP}
            className="px-8 py-4 min-w-[220px] rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg font-bold shadow-xl text-center"
          >
            Contact on WhatsApp
          </a>
          <Link href="/pricing">
            <a className="px-8 py-4 min-w-[220px] rounded-2xl border-2 border-orange-500 text-orange-600 text-lg font-bold text-center">
              View Pricing
            </a>
          </Link>
        </div>
      </section>

      {/* FEATURES / VALUE PROPOSITION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Your Own Website", desc: "A professionally designed website that represents your restaurant brand online." },
            { icon: Smartphone, title: "WhatsApp Ordering", desc: "Let customers order directly from WhatsApp without paying any commission." },
            { icon: BarChart, title: "Business Insights", desc: "Understand customer behavior and improve your restaurant operations." },
            { icon: Shield, title: "Secure Platform", desc: "We take care of hosting, uptime, and basic security." },
            { icon: Zap, title: "Quick Launch", desc: "Your restaurant website can go live in days, not months." },
            { icon: Check, title: "Zero Commission", desc: "No middlemen. You keep 100% of your revenue." }
          ].map((f, i) => (
            <Card key={i} className="border-2 border-orange-200 shadow-lg">
              <CardHeader>
                <f.icon className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">How DineWire Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Share Details", desc: "Tell us about your restaurant, menu, and branding preferences." },
              { step: "02", title: "We Build Website", desc: "Our team designs and develops your professional restaurant website." },
              { step: "03", title: "Go Live", desc: "Your website goes live with WhatsApp ordering enabled." },
              { step: "04", title: "Receive Orders", desc: "Customers contact you directly. No commission involved." }
            ].map((s, i) => (
              <div key={i} className="bg-orange-50 rounded-2xl p-6 shadow-sm border border-orange-100 text-center">
                <div className="text-5xl font-extrabold text-orange-600 mb-4">{s.step}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-700 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Who DineWire Is For</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Restaurants", "Cafés", "Cloud Kitchens", "Food Brands"].map((t) => (
              <div key={t} className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 text-center font-semibold">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DINEWIRE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Why Choose DineWire</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-lg">Food Platforms</h3>
              <ul className="space-y-2 text-gray-700">
                <li>❌ High commission on every order</li>
                <li>❌ No brand ownership</li>
                <li>❌ Platform dependency</li>
                <li>❌ Limited customer data</li>
              </ul>
            </div>
            <div className="border-2 border-orange-500 rounded-2xl p-6 bg-orange-50">
              <h3 className="font-bold mb-4 text-lg text-orange-600">DineWire</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Zero commission model</li>
                <li>✅ Your own branded website</li>
                <li>✅ Direct WhatsApp ordering</li>
                <li>✅ Full customer ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is this better than Zomato or Swiggy?", a: "DineWire helps you build your own digital presence. You are not dependent on third-party platforms." },
              { q: "Do you handle payments?", a: "No. Payments are handled directly by the restaurant." },
              { q: "How fast can my website go live?", a: "Most websites go live within a few working days." },
              { q: "Is there any contract?", a: "No long-term contracts. Simple monthly pricing." }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow border border-orange-100">
                <h4 className="font-semibold mb-2">{f.q}</h4>
                <p className="text-gray-700 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Build Your Restaurant’s Digital Identity?</h2>
        <p className="mb-8 text-lg">Get started with your own website and WhatsApp ordering today.</p>
        <a href={WHATSAPP} className="inline-block px-10 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-lg">
          Chat on WhatsApp
        </a>
      </section>

      
    </>
  );
}

function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-14">
          One clear plan designed for restaurants that want direct customers, full ownership, and zero commission.
        </p>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto mb-20">
          <Card className="border-2 border-orange-300 shadow-2xl">
            <CardHeader className="bg-orange-50 text-center">
              <CardTitle className="text-3xl">Restaurant Website Plan</CardTitle>
              <p className="text-6xl font-extrabold text-orange-600 mt-4">₹1,000</p>
              <p className="text-gray-600">per month</p>
              <p className="mt-4 text-sm text-gray-700">
                Everything you need to accept direct orders — without commissions.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Custom Branded Website","WhatsApp Ordering","Zero Commission","Free Maintenance","Email & WhatsApp Support"].map(f => (
                <div key={f} className="flex items-center gap-2 text-gray-800">
                  <Check className="h-5 w-5 text-green-600" /> {f}
                </div>
              ))}
              <a
                href={WHATSAPP}
                className="block mt-6 text-center px-6 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold"
              >
                Start Now on WhatsApp
              </a>
              <p className="text-xs text-center text-gray-600 mt-2">
                No contracts • Cancel anytime • No hidden charges
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-extrabold text-center mb-10">DineWire vs Food Delivery Platforms</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="font-semibold"></div>
            <div className="font-semibold text-center">Food Platforms</div>
            <div className="font-semibold text-center text-orange-600">DineWire</div>

            {["Commission on Orders","Brand Ownership","Customer Data Access","Monthly Cost"].map((row, i) => (
              <>
                <div key={i} className="font-medium">{row}</div>
                <div className="text-center text-red-500">✖</div>
                <div className="text-center text-green-600">✔</div>
              </>
            ))}
          </div>
        </div>

        {/* Pricing FAQ */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-extrabold text-center mb-10">Pricing FAQs</h3>
          <div className="space-y-6">
            {[
              {
                q: "Is there any long‑term contract?",
                a: "No. DineWire works on a simple monthly model. You can stop anytime without penalties."
              },
              {
                q: "Do you take commission on orders?",
                a: "Never. All orders come directly to you via WhatsApp. You keep 100% of your revenue."
              },
              {
                q: "Are there any setup or hidden charges?",
                a: "No hidden fees. The monthly price covers website setup, maintenance, and support."
              },
              {
                q: "Is this suitable for small restaurants or cafés?",
                a: "Yes. DineWire is built for restaurants of all sizes — from cafés to cloud kitchens."
              }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow border border-orange-100">
                <h4 className="font-semibold mb-2">{f.q}</h4>
                <p className="text-gray-700 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900">
          About <span className="text-orange-600">DineWire</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              DineWire is a professional digital services brand built specifically for restaurants and food businesses that want full control over their online presence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on ownership‑first digital solutions — helping restaurants connect directly with customers without high commissions or platform lock‑in.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[{icon: Globe, title: "Digital Presence"},{icon: Smartphone, title: "Direct Ordering"},{icon: Shield, title: "Secure Setup"},{icon: Zap, title: "Fast Launch"}].map((i,idx)=>(
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 text-center">
                <i.icon className="h-10 w-10 mx-auto text-orange-600 mb-3" />
                <p className="font-semibold">{i.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
            <h3 className="font-bold text-lg mb-2 text-orange-600">Our Mission</h3>
            <p className="text-gray-700">To empower restaurants with digital tools they fully own, without commissions or dependency.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
            <h3 className="font-bold text-lg mb-2 text-orange-600">What We Build</h3>
            <p className="text-gray-700">Custom websites, WhatsApp ordering systems, and ongoing technical support.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
            <h3 className="font-bold text-lg mb-2 text-orange-600">Who We Serve</h3>
            <p className="text-gray-700">Restaurants, cafés, cloud kitchens, and independent food brands.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section className="py-24 container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-3">DineWire respects the privacy of its users and clients. This Privacy Policy explains how information is collected, used, and protected.</p>
      <p className="text-gray-700 mb-3">We may collect basic contact information such as name, phone number, email address, and business details when you contact us through WhatsApp, email, or our website.</p>
      <p className="text-gray-700 mb-3">Collected information is used solely for communication, service delivery, customer support, and business-related interactions.</p>
      <p className="text-gray-700 mb-3">DineWire does not sell, rent, or trade personal information to third parties. Data is not shared except when required by law.</p>
      <p className="text-gray-700 mb-3">We may use basic analytics tools to understand website performance and improve service quality. These tools do not collect personally identifiable information.</p>
      <p className="text-gray-700 mb-3">All reasonable security measures are taken to protect stored information from unauthorized access or misuse.</p>
      <p className="text-gray-700 mb-3">Users may contact us to request correction or deletion of their information.</p>
      <p className="text-gray-700 mb-3">This Privacy Policy may be updated periodically. Continued use of our services implies acceptance of the updated policy.</p>
    </section>
  );
}

function Terms() {
  return (
    <section className="py-24 container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-gray-700 mb-3">By accessing or using DineWire services, you agree to be bound by these Terms and Conditions.</p>
      <p className="text-gray-700 mb-3">DineWire provides digital services including website development, hosting assistance, and WhatsApp-based communication tools for restaurants.</p>
      <p className="text-gray-700 mb-3">DineWire does not handle food delivery, order fulfillment, or payment processing. Restaurants are solely responsible for their operations.</p>
      <p className="text-gray-700 mb-3">All services are provided on a subscription or agreed pricing basis. Payments once made are non-refundable unless explicitly stated.</p>
      <p className="text-gray-700 mb-3">Service availability may depend on third-party platforms such as hosting providers or messaging services.</p>
      <p className="text-gray-700 mb-3">DineWire reserves the right to modify, suspend, or discontinue services with prior notice when possible.</p>
      <p className="text-gray-700 mb-3">Users agree not to misuse the services for unlawful or harmful activities.</p>
      <p className="text-gray-700 mb-3">These terms are governed by applicable laws of India.</p>
    </section>
  );
}

// SEO Meta + OpenGraph + Schema
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    document.title = "DineWire – Restaurant Website & WhatsApp Ordering (Zero Commission)";

    const meta = (name, content, property = false) => {
      const m = document.createElement("meta");
      if (property) m.setAttribute("property", name);
      else m.setAttribute("name", name);
      m.setAttribute("content", content);
      document.head.appendChild(m);
    };

    meta("description", "DineWire helps restaurants build their own website with WhatsApp ordering. Zero commission, full brand ownership, simple monthly pricing.");
    meta("keywords", "restaurant website, whatsapp ordering, zero commission, dinewire, food business website");

    // OpenGraph
    meta("og:title", "DineWire – Professional Websites for Restaurants", true);
    meta("og:description", "Build your own restaurant website with WhatsApp ordering. No commission. Full control.", true);
    meta("og:type", "website", true);
    meta("og:url", "https://dinewire.site", true);
    meta("og:image", "https://i.postimg.cc/XvZgy00y/brand-logo.jpg", true);

    // Twitter
    meta("twitter:card", "summary_large_image");
    meta("twitter:title", "DineWire – Restaurant Website Platform");
    meta("twitter:description", "Zero‑commission restaurant websites with WhatsApp ordering.");
    meta("twitter:image", "https://i.postimg.cc/XvZgy00y/brand-logo.jpg");

    // Schema.org JSON‑LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DineWire",
      url: "https://dinewire.site",
      logo: "https://i.postimg.cc/XvZgy00y/brand-logo.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8302718516",
        contactType: "customer support",
        email: "team@dinewire.site"
      }
    });
    document.head.appendChild(script);
  }, []);

  return (
  <Router base="/dinewire">
    <div className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="border-b border-orange-200 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://i.postimg.cc/XvZgy00y/brand-logo.jpg"
              className="h-14 w-14 rounded-full object-cover"
              alt="DineWire logo"
            />
            <span className="text-2xl font-extrabold tracking-tight text-orange-600">
              DineWire
            </span>
          </div>

          <nav className="flex gap-6 text-sm font-medium items-center">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>

      {/* ROUTES */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/about" component={About} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/terms-and-conditions" component={Terms} />
      </Switch>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 mt-24">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://i.postimg.cc/XvZgy00y/brand-logo.jpg"
              className="h-10 mb-2"
            />
            <p className="text-sm">
              Professional websites and WhatsApp ordering for restaurants.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <Link href="/about" className="block text-sm">About</Link>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <Link href="/privacy-policy" className="block text-sm">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="block text-sm">Terms & Conditions</Link>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p className="flex items-center gap-2 text-sm">
              <PhoneIcon className="h-4 w-4" /> +91 83027 18516
            </p>
            <p className="text-sm">{CONTACT_EMAIL}</p>
            <a href={WHATSAPP} className="text-sm text-orange-400">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center text-xs py-3">
          © {new Date().getFullYear()} DineWire. All rights reserved.
        </div>
      </footer>

    </div>
  </Router>
);
