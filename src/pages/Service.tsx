// pages/Services.tsx
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
  // const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "street-lighting",
      title: "Smart Street Lighting Systems",
      icon: <FaStreetView className="text-6xl" aria-hidden="true" />, 
      content: "Complete **LED street lighting solutions** for highways & urban roads with **IoT-enabled monitoring** and maintenance across Ghana and Central Europe.",
      details: "Detailed specifications for Smart Street Lighting include IoT sensors, remote monitoring, automated dimming, and high-efficiency LED components.",
      image: "/services/stlight.webp",
      imageSide: "right"
    },
    {
      id: "traffic-lights",
      title: "Intelligent Traffic Management",
      icon: <FaTrafficLight className="text-6xl" aria-hidden="true" />,
      content: "AI-powered **traffic signal systems** with real-time optimization and **24/7 emergency support** for urban networks.",
      image: "/services/traffic.webp",
      imageSide: "left"
    },
    {
      id: "industrial-lighting",
      title: "Industrial LED Solutions",
      icon: <FaIndustry className="text-6xl" aria-hidden="true" />,
      content: "Hazard-rated **industrial lighting installations** with energy analytics and **predictive maintenance** services.",
      image: "/services/led.webp",
      imageSide: "right"
    },
    {
      id: "thermal-insulation",
      title: "Thermal Insulation Coating",
      icon: <FaThermometerHalf className="text-6xl" aria-hidden="true" />,
      content: "Advanced **nano-technology coatings** for buildings and industrial equipment with **10-year durability guarantee**.",
      image: "/services/coating.webp",
      imageSide: "left"
    },
    {
      id: "photocatalytic-coating",
      title: "Photocatalytic Coating",
      icon: <FaLeaf className="text-6xl" aria-hidden="true" />,
      content: "UV-activated **air-purifying coatings** reducing pollutants by up to **60% in urban areas**.",
      image: "/services/photcoat.webp",
      imageSide: "right"
    },
    {
      id: "air-sensors",
      title: "Air Quality Monitoring",
      icon: <FaCloud className="text-6xl" aria-hidden="true" />,
      content: "Real-time **pollution tracking systems** with **government-certified sensors** and data analysis.",
      image: "/services/airmonitoring.webp",
      imageSide: "left"
    },
    {
      id: "ecological-construction",
      title: "Green Construction",
      icon: <FaTree className="text-6xl" aria-hidden="true" />,
      content: "Sustainable infrastructure development using **recycled materials** and **energy-efficient designs**.",
      image: "/services/green.webp",
      imageSide: "right"
    },
    {
      id: "general-services",
      title: "Maintenance Solutions",
      icon: <FaTools className="text-6xl" aria-hidden="true" />,
      content: "Comprehensive **preventive maintenance programs** for urban and industrial infrastructure.",
      image: "/services/maintenance.webp",
      imageSide: "left"
    }
  ];

  return (
    <main className="bg-gray-900 overflow-x-hidden">
      <ServicesHero />
      
      <section
        id="services"  
        className="max-w-6xl mx-auto py-20 px-4 space-y-24"
        itemScope
        itemType="https://schema.org/ItemList"
        aria-label="Our Services"
      >
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.content.replace(/\*\*/g, ''),
                "image": service.image,
                "serviceType": "Electrical/Construction",
                "areaServed": ["Ghana", "Czech Republic"],
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceUrl": `https://ijggtl.com/services#${service.id}`
                }
              }
            }))
          })}
        </script>
      </section>
    </main>
  );
};

const ServiceSection = ({ service, index }: { service: any; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [0, 5]);
  const rotateY = useTransform(x, [0, 1], [0, -5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const xValue = (e.clientX - rect.left) / rect.width;
      const yValue = (e.clientY - rect.top) / rect.height;
      x.set(xValue);
      y.set(yValue);
    }
  };

  const parseHighlightedText = (text: string) => {
    return text.split('**').map((part, i) => 
      i % 2 === 0 ? part : (
        <motion.span
          key={i}
          className="text-green-400 font-semibold"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {part}
        </motion.span>
      )
    );
  };

  return (
    <motion.article
      ref={containerRef}
      id={service.id}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`flex flex-col md:flex-row items-center gap-12 ${
        service.imageSide === "left" ? "md:flex-row-reverse" : ""
      }`}
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby={`${service.id}-title`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="flex-1 space-y-6"
      >
        <div className="text-green-400" aria-hidden="true">
          {service.icon}
        </div>
        <h2 
          id={`${service.id}-title`}
          className="text-4xl font-bold text-white"
          itemProp="name"
        >
          {service.title}
        </h2>
        <p 
          className="text-xl text-gray-300 leading-relaxed"
          itemProp="description"
        >
          {parseHighlightedText(service.content)}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 px-8 py-3 rounded-full text-white hover:bg-green-700 transition-colors"
          aria-label={`Learn more about ${service.title}`}
        >
          Detailed Specifications
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000
        }}
        className="flex-1 relative group w-full"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-600/20 to-yellow-600/20 p-1">
          <div className="bg-gray-800 rounded-2xl p-4 min-h-[400px] flex items-center justify-center">
            <img
              src={service.image}
              alt={`${service.title} implementation example`}
              loading="lazy"
              className="object-cover w-full h-full rounded-xl"
              width={800}
              height={384}
              itemProp="image"
            />
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default Services;
