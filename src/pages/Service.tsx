// ServicesPage.tsx
// ServicesPage.tsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { 
  FaStreetView, 
  FaTrafficLight, 
  FaIndustry,
  FaThermometerHalf,
  FaLeaf,
  FaCloud,
  FaTree,
  FaTools
} from "react-icons/fa";
import { useRef } from "react";
import { ServicesHero } from "../components";

const Services = () => {
  const services = [
    {
      id: "street-lighting",
      title: "Street Lighting Solutions",
      icon: <FaStreetView className="text-6xl" />,
      content: "**Supply and installation** of modern street lighting systems for **all road types** including highways and public thoroughfares. Comprehensive maintenance and servicing programs.",
      imageSide: "right"
    },
    {
      id: "traffic-lights",
      title: "Traffic Light Systems",
      icon: <FaTrafficLight className="text-6xl" />,
      content: "Full-cycle solutions for **traffic signal systems** including **installation, maintenance**, and smart optimization technologies for improved traffic flow.",
      imageSide: "left"
    },
    {
      id: "industrial-lighting",
      title: "Industrial Lighting",
      icon: <FaIndustry className="text-6xl" />,
      content: "Specialized **high-bay LED solutions** for industrial facilities with **energy monitoring** and predictive maintenance services.",
      imageSide: "right"
    },
    {
      id: "thermal-insulation",
      title: "Thermal Insulation Coating",
      icon: <FaThermometerHalf className="text-6xl" />,
      content: "Advanced **thermal insulation solutions** application services for buildings and industrial equipment using **nano-technology coatings**.",
      imageSide: "left"
    },
    {
      id: "photocatalytic-coating",
      title: "Photocatalytic Coating",
      icon: <FaLeaf className="text-6xl" />,
      content: "Environmentally-friendly **patented coatings** for air purification and surface protection using **UV-activated photocatalytic technology**.",
      imageSide: "right"
    },
    {
      id: "air-sensors",
      title: "Air Quality Sensors",
      icon: <FaCloud className="text-6xl" />,
      content: "Supply and integration of **specialized sensors** for real-time **air pollution monitoring** and data analysis systems.",
      imageSide: "left"
    },
    {
      id: "ecological-construction",
      title: "Ecological Construction",
      icon: <FaTree className="text-6xl" />,
      content: "Sustainable construction services focusing on **green building materials** and **energy-efficient infrastructure** development.",
      imageSide: "right"
    },
    {
      id: "general-services",
      title: "General Services",
      icon: <FaTools className="text-6xl" />,
      content: "Comprehensive **maintenance and support** services for urban infrastructure and industrial facilities.",
      imageSide: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <ServicesHero />
      
      <div className="max-w-7xl mx-auto py-20 px-4 space-y-24">
        {services.map((service, index) => (
          <ServiceSection key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

const ServiceSection = ({ service, index }: { service: any; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [0, 5]);
  const rotateY = useTransform(x, [0, 1], [0, -5]);

  const parseHighlightedText = (text: string) => {
    return text.split('**').map((part, i) => 
      i % 2 === 0 ? (
        part
      ) : (
        <motion.span
          key={i}
          className="text-blue-400"
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {part}
        </motion.span>
      )
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const xValue = (e.clientX - rect.left) / rect.width;
      const yValue = (e.clientY - rect.top) / rect.height;
      x.set(xValue);
      y.set(yValue);
    }
  };

  return (
    <motion.div
  ref={containerRef}
  id={service.id} // Add this line for anchor linking
  onMouseMove={handleMouseMove}
  onMouseLeave={() => {
    x.set(0);
    y.set(0);
  }}
  className={`flex flex-col md:flex-row items-center gap-12 ${
    service.imageSide === "left" ? "md:flex-row-reverse" : ""
  }`}
>
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="flex-1 space-y-6"
      >
        <motion.div 
          className="text-blue-400"
          whileHover={{ scale: 1.05 }}
        >
          {service.icon}
        </motion.div>
        <h2 className="text-4xl font-bold text-white">
          {service.title.split(' ').map((word: string, i: number) => (
            <motion.span
              key={i}
              className="mr-2 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          {parseHighlightedText(service.content)}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 px-8 py-3 rounded-full text-white hover:bg-blue-700 transition-colors"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Image/Graphic Section */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000
        }}
        className="flex-1 relative group"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1">
          <div className="bg-gray-800 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div 
              className="text-blue-400 scale-150 transform"
              whileHover={{ scale: 1.2 }}
            >
              {service.icon}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;