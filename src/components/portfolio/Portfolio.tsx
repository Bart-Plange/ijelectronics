import { motion } from "framer-motion";
import { FaLightbulb, FaChartLine, FaBuilding, FaLeaf } from "react-icons/fa";
import { JSX, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
  stats: string;
  category: string;
  className: string;
  alt: string;
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart City Lighting",
      description: "IoT-enabled street lighting network with adaptive brightness and energy optimization",
      icon: <FaLightbulb className="w-8 h-8 text-blue-400" aria-hidden="true" />,
      image: "/images/lighting.jpg",
      stats: "+45% efficiency",
      category: "Urban Infrastructure",
      className: "col-span-2 row-span-2",
      alt: "Smart city street lighting installation"
    },
    {
      id: 2,
      title: "Green Office Spaces",
      description: "Biophilic design integration in corporate environments",
      icon: <FaLeaf className="w-8 h-8 text-blue-400" aria-hidden="true" />,
      image: "/images/green-office.jpg",
      stats: "30% energy savings",
      category: "Interior Design",
      className: "col-span-1 row-span-1",
      alt: "Eco-friendly office space design"
    },
    {
      id: 3,
      title: "Industrial Automation",
      description: "AI-driven manufacturing optimization systems",
      icon: <FaChartLine className="w-8 h-8 text-blue-400" aria-hidden="true" />,
      image: "/images/industry.jpg",
      stats: "20% productivity boost",
      category: "Industry 4.0",
      className: "col-span-1 row-span-1",
      alt: "Automated industrial manufacturing system"
    },
    {
      id: 4,
      title: "Smart Buildings",
      description: "Integrated building management systems",
      icon: <FaBuilding className="w-8 h-8 text-blue-400" aria-hidden="true" />,
      image: "/images/smart-building.jpg",
      stats: "35% cost reduction",
      category: "Commercial",
      className: "col-span-2 row-span-1",
      alt: "Modern smart building infrastructure"
    }
  ];

  // Meta tag management
  const addMetaTag = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  useEffect(() => {
    // Set page metadata
    const pageTitle = "Our Portfolio | IJ Global Green Technology Limited";
    const pageDescription = "Explore our innovative projects in smart city solutions, green office spaces, industrial automation, and smart building technologies.";
    
    document.title = pageTitle;
    addMetaTag('description', pageDescription);
    addMetaTag('keywords', 'smart city, green technology, industrial automation, smart buildings, sustainable solutions');

    // Cleanup function
    return () => {
      document.title = 'IJ Global Green Technology Limited'; // Reset default title
      document.querySelectorAll('meta[name="description"], meta[name="keywords"]')
        .forEach(meta => meta.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our innovative projects that blend cutting-edge technology with sustainable design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`relative group bg-gray-800 rounded-3xl overflow-hidden ${project.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-opacity" 
                style={{ backgroundImage: `url(${project.image})` }}
                role="img"
                aria-label={project.alt}
              />
              
              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    {project.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors" itemProp="name">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 group-hover:text-blue-400/80 transition-colors" itemProp="description">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-300 mb-2 group-hover:text-blue-400 transition-colors" itemProp="genre">
                    {project.category}
                  </div>
                  <div className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors" itemProp="award">
                    {project.stats}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;