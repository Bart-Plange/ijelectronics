// components/ServicesHero.tsx
import { motion } from "framer-motion";
import { Bolt } from "lucide-react";

export const ServicesHero = () => {
  return (
    <header className="relative -mt-[8.5rem] pt-[6.5rem] min-h-[800px] bg-gray-900 text-white pb-16 px-6 overflow-hidden">
      {/* Gradient overlay for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-900 to-transparent z-10" />

      {/* Text Container - Positioned at bottom left */}
      <div className="absolute bottom-0 left-0 z-20 w-full max-w-2xl mx-auto md:mx-0 md:ml-12 lg:ml-24 flex flex-col items-start pb-24 pl-6">
        <motion.p 
          className="text-sm text-green-400 mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smart Electrical and electronic Experts
        </motion.p>
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Smart Infrastructure<br className="hidden md:block"/> 
          <span className="text-green-400"> <br className="md:hidden"/>Lightening Services</span>
        </motion.h1>
        
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-gray-300 text-lg max-w-xl mb-6">
            Explore our curated services just perfect for industries and homes.
            Smart city technologies, and environmental management systems.
          </p>
          <a href="#services">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 transition-all px-8 py-2 text-lg font-semibold rounded-full flex items-center gap-2 shadow-xl"
              aria-label="Explore our sustainable infrastructure services"
            >
              <Bolt className="w-5 h-5" />
              Discover Sustainable Systems
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "IJ Global Green Technology Limited",
          "image": "/logo.webp",
          "description": "Provider of smart infrastructure solutions including energy-efficient lighting systems, traffic management technologies, and environmental monitoring services.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra",
            "addressCountry": "GH"
          },
          "serviceArea": ["Ghana", "Central Europe"]
        })}
      </script>

      {/* Streetlight and Illumination Effect */}
      {/* Hide this decoration on screens smaller than md */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/3">
        {/* Light Beam with mobile opacity */}
        <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/20 to-transparent w-full h-full pointer-events-none opacity-50" />
        
        {/* Streetlight Pole */}
        <div className="absolute md:right-24 right-4 h-full w-2 bg-gray-300 opacity-50">
          {/* Light Fixture */}
          <div className="absolute top-1/4 -right-4 w-12 h-24 bg-gray-400 rounded-t-full flex items-end justify-center pb-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full animate-glow shadow-glow" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-20 top-1/3 w-32 h-32 bg-green-600/20 rounded-full blur-xl opacity-50" />
        <div className="absolute right-32 top-1/2 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl opacity-50" />
      </div>

      {/* Animated Sparks */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
            style={{
              filter: "blur(2px)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default ServicesHero;
