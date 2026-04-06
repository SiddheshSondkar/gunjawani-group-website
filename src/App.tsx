import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Leaf, 
  Tractor, 
  ShoppingBasket, 
  Factory, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  Sprout, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ChevronRight,
  Droplets,
  Building2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            {/* Logo Image Placeholder */}
            <img src="/logo.png" alt="Gunjawani Group Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-brand-green leading-tight tracking-tight">Gunjawani Group</span>
              <span className="text-xs text-brand-blue font-medium">गुंजवणी समूह</span>
            </div>
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-green-light' : 'text-slate-800 hover:text-brand-green-light'}`}>About</a>
            <a href="#businesses" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-green-light' : 'text-slate-800 hover:text-brand-green-light'}`}>Businesses</a>
            <a href="#vision" className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-green-light' : 'text-slate-800 hover:text-brand-green-light'}`}>Vision</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-green to-brand-blue text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md">
              Partner with Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-neutral pt-20">
    {/* Abstract Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-brand-green/5 to-transparent blur-3xl" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-t from-brand-blue/5 to-transparent blur-3xl" />
      
      {/* Abstract Flow Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,500 C300,600 600,200 1000,400 C1400,600 1800,300 2000,500" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M0,600 C400,700 800,300 1200,500 C1600,700 1900,400 2000,600" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Logo Image Placeholder */}
      <img src="/logo.png" alt="Gunjawani Group Logo" className="w-32 h-32 mx-auto mb-8 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" />
      <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-green tracking-tight mb-4">
        Gunjawani Group
      </h1>
      <h2 className="text-2xl md:text-3xl font-heading text-slate-500 mb-8">
        गुंजवणी समूह
      </h2>
      
      <div className="flex flex-col items-center gap-2 mb-12">
        <p className="text-xl md:text-2xl font-medium text-brand-blue">
          Rooted in Agriculture. Growing into Industries.
        </p>
        <p className="text-lg text-slate-500 font-medium">
          शेतीपासून उद्योगापर्यंत
        </p>
      </div>

      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#businesses" 
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-green to-brand-blue text-white font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl"
      >
        Explore Our Businesses
        <ArrowRight className="w-5 h-5" />
      </motion.a>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">About the Group</h3>
          <h2 className="text-4xl font-heading font-bold text-brand-green mb-6 leading-tight">
            Building an Integrated Value Chain for the Future.
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              The Gunjawani Group story begins with a profound respect for the land. Rooted deeply in the agricultural heritage of Maharashtra, we started with a vision to transform traditional farming into a scalable, modern enterprise.
            </p>
            <p>
              Today, we are evolving into a multi-sector corporate group. By controlling the entire value chain—from cultivation and processing to distribution and future industrial ventures—we ensure uncompromising quality, sustainability, and value creation at every step.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-4xl font-heading font-bold text-brand-green">End-to-End</span>
              <span className="text-sm text-slate-500 font-medium mt-1">Integration</span>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-heading font-bold text-brand-blue">Scalable</span>
              <span className="text-sm text-slate-500 font-medium mt-1">Vision</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-brand-neutral relative">
            <img 
              src="https://picsum.photos/seed/corporate-agri/800/800?blur=2" 
              alt="Abstract Corporate Growth" 
              className="object-cover w-full h-full opacity-90 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-green/20 mix-blend-overlay"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white rounded-full border-8 border-brand-neutral flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-green to-brand-blue opacity-10"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Businesses = () => {
  const businesses = [
    {
      title: "Gunjawani Agro",
      desc: "Modern farming & sustainable cultivation practices.",
      icon: <Tractor className="w-8 h-8" />,
      color: "text-brand-green",
      bg: "bg-brand-green/10"
    },
    {
      title: "Gunjawani Fresh",
      desc: "Direct farm-to-home delivery of premium produce.",
      icon: <ShoppingBasket className="w-8 h-8" />,
      color: "text-brand-green-light",
      bg: "bg-brand-green-light/10"
    },
    {
      title: "Gunjawani Foods",
      desc: "Advanced processing & value-added food products.",
      icon: <Factory className="w-8 h-8" />,
      color: "text-brand-blue-light",
      bg: "bg-brand-blue-light/10"
    },
    {
      title: "Future Ventures",
      desc: "Strategic expansion into diverse industrial sectors.",
      icon: <Building2 className="w-8 h-8" />,
      color: "text-brand-blue",
      bg: "bg-brand-blue/10"
    }
  ];

  return (
    <section id="businesses" className="py-24 bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Our Businesses</h3>
          <h2 className="text-4xl font-heading font-bold text-brand-green mb-6">
            A Diversified Ecosystem
          </h2>
          <p className="text-lg text-slate-600">
            From the soil to the consumer, and expanding into the industries of tomorrow. Our portfolio represents a commitment to quality and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((biz, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 border border-slate-100 hover:border-brand-green-light/30 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Subtle background gradient shift on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl ${biz.bg} ${biz.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-md`}>
                  {biz.icon}
                </div>
                <h4 className="text-xl font-heading font-bold text-brand-green mb-3 group-hover:text-brand-green-light transition-colors duration-300">{biz.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{biz.desc}</p>
                <div className="flex items-center text-sm font-medium text-brand-blue opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisionMission = () => (
  <section id="vision" className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand-neutral rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-brand-green" />
          </div>
          <h3 className="text-3xl font-heading font-bold text-brand-green mb-4">Our Vision</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            To build a complete, self-sustaining ecosystem that seamlessly bridges the gap from farm to industry, creating lasting value for our communities, partners, and consumers.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-neutral rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6 text-brand-blue" />
          </div>
          <h3 className="text-3xl font-heading font-bold text-brand-green mb-4">Our Mission</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            To deliver uncompromising quality through a direct value chain, championing sustainable practices while driving innovation and scalable industrial growth.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Growth = () => {
  const roadmap = [
    { title: "Dairy Processing", icon: <Droplets className="w-6 h-6" /> },
    { title: "Global Exports", icon: <Globe className="w-6 h-6" /> },
    { title: "Agri-Tech Solutions", icon: <Sprout className="w-6 h-6" /> },
    { title: "Industrial Manufacturing", icon: <Factory className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-brand-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h3 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Growth & Expansion</h3>
            <h2 className="text-4xl font-heading font-bold text-brand-green mb-6">
              Charting the Future.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our journey doesn't stop at agriculture. We are actively laying the groundwork for expansion into high-growth industrial sectors.
            </p>
          </motion.div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {roadmap.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-blue-light/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  {item.icon}
                </div>
                <h4 className="text-lg font-heading font-bold text-brand-green">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "End-to-End Control",
      desc: "Complete oversight from farm cultivation to consumer delivery and industrial processing, ensuring unmatched quality control.",
      color: "text-brand-green",
      bg: "bg-brand-green/10"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Practices",
      desc: "Deeply committed to environmentally responsible methods that protect our resources for future generations.",
      color: "text-brand-green-light",
      bg: "bg-brand-green-light/10"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Roots, Global Vision",
      desc: "Proudly based in Maharashtra with a scalable vision designed to compete and thrive in global markets.",
      color: "text-brand-blue",
      bg: "bg-brand-blue/10"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-brand-green mb-6">
            Why Gunjawani Group
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-brand-neutral p-10 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow duration-300 border border-slate-50"
            >
              <div className={`w-16 h-16 mx-auto ${reason.bg} rounded-2xl flex items-center justify-center ${reason.color} mb-6`}>
                {reason.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-brand-green mb-4">{reason.title}</h4>
              <p className="text-slate-600">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-brand-neutral">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-brand-green to-brand-blue rounded-3xl p-10 md:p-16 overflow-hidden relative shadow-2xl"
      >
        {/* Decorative circle */}
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-brand-green-light/20 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Grow Together?</h2>
            <p className="text-white/80 text-lg mb-8">
              Whether you're looking for partnership opportunities, investment, or simply want to learn more about our ventures, we'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-green-light" />
                </div>
                <span className="text-white/90">contact@gunjawanigroup.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-green-light" />
                </div>
                <span className="text-white/90">+91 (0) 20 1234 5678</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-green-light" />
                </div>
                <span className="text-white/90">Pune / PCMC, Maharashtra, India</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-white text-brand-green font-bold hover:bg-brand-neutral transition-colors shadow-lg"
            >
              Partner with Us
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-green text-white/70 py-12 border-t border-brand-green-light/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-1 md:col-span-2">
          <a href="#" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity w-fit">
            {/* Logo Image Placeholder */}
            <img src="/logo.png" alt="Gunjawani Group Logo" className="w-10 h-10 object-contain brightness-0 invert opacity-90" />
            <span className="font-heading font-bold text-xl text-white">Gunjawani Group</span>
          </a>
          <p className="max-w-sm text-white/80">
            Rooted in Agriculture. Growing into Industries.<br/>
            शेतीपासून उद्योगापर्यंत
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-brand-green-light transition-colors">About Us</a></li>
            <li><a href="#businesses" className="hover:text-brand-green-light transition-colors">Our Businesses</a></li>
            <li><a href="#vision" className="hover:text-brand-green-light transition-colors">Vision & Mission</a></li>
            <li><a href="#contact" className="hover:text-brand-green-light transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-heading font-bold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-brand-green-light transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-brand-green-light transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-brand-green-light transition-colors">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Gunjawani Group. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-neutral selection:bg-brand-green-light/20 selection:text-brand-green">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Businesses />
        <VisionMission />
        <Growth />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
