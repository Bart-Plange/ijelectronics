import { motion } from "framer-motion";
import { FaBuilding, FaCouch, FaTrafficLight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ValueProposition = () => {
  return (
    <div className="w-full px-4 py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 100px 0px" }}
        >
          <p className="text-white"><span className="text-blue-400">Smart Infrastructure</span> Solutions </p>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <ServiceCard
            id="buildings-industry"
            icon={<FaBuilding className="text-4xl" />}
            title="Buildings & Industry"
            content="Advanced solutions for commercial and industrial facilities including energy management systems, environmental controls, and UV-C disinfection technology."
          />
          <ServiceCard
            id="interior-spaces"
            icon={<FaCouch className="text-4xl" />}
            title="Smart Interior Spaces"
            content="Biophilic design integration with climate optimization and photocatalytic air purification for healthier living environments."
          />
          <ServiceCard 
            id="street-infrastructure"
            icon={<FaTrafficLight className="text-4xl" />}
            title="Urban Infrastructure"
            content="Smart urban infrastructure featuring adaptive LED networks, AI traffic optimization, and connected pedestrian safety solutions."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ id, icon, title, content }: { 
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px 100px 0px" }} // Changed from negative margin
    className="group relative bg-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 min-h-[400px] flex flex-col"
  >
    <Link 
      to={`/services#${id}`} 
      className="absolute inset-0 z-10"
      aria-label={`Learn more about ${title}`}
    />
    
    <div className="mb-6 flex justify-center">
      <span className="p-4 bg-gray-700 rounded-full text-blue-400 group-hover:bg-blue-900/20 transition-colors">
        {icon}
      </span>
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300 text-lg leading-relaxed flex-1">{content}</p>
    
    <div className="mt-6 flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
      <span className="font-semibold">Explore Solutions</span>
      <motion.span 
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
      >
        →
      </motion.span>
    </div>

    {/* Hover gradient effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
    </div>
  </motion.div>
);

export default ValueProposition;