import { motion } from "framer-motion";
import { FaStreetView, FaTrafficLight, FaIndustry } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ValueProposition = () => {
  return (
    <section className="w-full px-4 py-24 bg-gray-900" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2 
          id="services-heading"
          className="text-4xl md:text-5xl font-bold text-center mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 100px 0px" }}
        >
          <span className="sr-only">IJ Global Green Technology - </span>
          <p className="text-white"><span className="text-blue-400">Smart Infrastructure</span> Solutions</p>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <ServiceCard
            id="street-lighting"
            icon={<FaStreetView className="text-4xl" aria-hidden="true" />}
            title="Smart Street Lighting Systems"
            content="Energy-efficient LED solutions for highways & public roads with IoT-enabled monitoring and maintenance services across Ghana and Central Europe."
            keywords={["highway lighting", "public road lighting", "LED solutions", "IoT maintenance"]}
          />
          <ServiceCard
            id="traffic-lights"
            icon={<FaTrafficLight className="text-4xl" aria-hidden="true" />}
            title="Intelligent Traffic Management"
            content="AI-powered traffic signal systems with real-time optimization and 24/7 emergency support for urban and intercity networks."
            keywords={["AI traffic systems", "real-time optimization", "emergency support"]}
          />
          <ServiceCard 
            id="industrial-lighting"
            icon={<FaIndustry className="text-4xl" aria-hidden="true" />}
            title="Industrial LED Solutions"
            content="Hazard-rated lighting installations with energy consumption analytics and predictive maintenance for manufacturing facilities."
            keywords={["industrial LED", "energy analytics", "predictive maintenance"]}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ id, icon, title, content, keywords }: { 
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
  keywords?: string[];
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px 50px 0px" }}
    className="group relative bg-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 min-h-[400px] flex flex-col"
    itemScope
    itemType="https://schema.org/Service"
  >
    <Link 
      to={`/services#${id}`} 
      className="absolute inset-0 z-10"
      aria-label={`Explore ${title} service details`}
      itemProp="url"
    />
    
    <div className="mb-6 flex justify-center" itemProp="provider" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="IJ Global Green Technology Limited" />
      <span className="p-4 bg-gray-700 rounded-full text-blue-400 group-hover:bg-blue-900/20 transition-colors">
        {icon}
      </span>
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-4" itemProp="name">{title}</h3>
    <p className="text-gray-300 text-lg leading-relaxed flex-1" itemProp="description">
      {content}
      {keywords && (
        <meta itemProp="keywords" content={keywords.join(", ")} />
      )}
    </p>
    
    <div className="mt-6 flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
      <span className="font-semibold">Explore Solutions</span>
      <motion.span 
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        aria-hidden="true"
      >
        →
      </motion.span>
    </div>

    {/* Structured Data */}
    <div itemScope itemType="https://schema.org/OfferCatalog">
      <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="category" content={title} />
        <meta itemProp="description" content={content} />
      </div>
    </div>

    {/* Hover gradient effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
    </div>
  </motion.article>
);

export default ValueProposition;