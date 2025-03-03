import { motion } from "framer-motion";
import { FaLightbulb, FaChartLine, FaBuilding, FaLeaf } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Smart City Lighting",
      description: "IoT-enabled street lighting network with adaptive brightness and energy optimization",
      icon: <FaLightbulb className="w-8 h-8 text-blue-400" />,
      image: "/images/lighting.jpg",
      stats: "+45% efficiency",
      category: "Urban Infrastructure",
      className: "col-span-2 row-span-2"
    },
    {
      id: 2,
      title: "Green Office Spaces",
      description: "Biophilic design integration in corporate environments",
      icon: <FaLeaf className="w-8 h-8 text-blue-400" />,
      image: "/images/green-office.jpg",
      stats: "30% energy savings",
      category: "Interior Design",
      className: "col-span-1 row-span-1"
    },
    {
      id: 3,
      title: "Industrial Automation",
      description: "AI-driven manufacturing optimization systems",
      icon: <FaChartLine className="w-8 h-8 text-blue-400" />,
      image: "/images/industry.jpg",
      stats: "20% productivity boost",
      category: "Industry 4.0",
      className: "col-span-1 row-span-1"
    },
    {
      id: 4,
      title: "Smart Buildings",
      description: "Integrated building management systems",
      icon: <FaBuilding className="w-8 h-8 text-blue-400" />,
      image: "/images/smart-building.jpg",
      stats: "35% cost reduction",
      category: "Commercial",
      className: "col-span-2 row-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our innovative projects that blend cutting-edge technology with sustainable design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative group bg-gray-800 rounded-3xl overflow-hidden ${project.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-30 transition-opacity" 
                   style={{ backgroundImage: `url(${project.image})` }} />
              
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-400/80 transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-300 mb-2 group-hover:text-blue-400 transition-colors">
                    {project.category}
                  </div>
                  <div className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {project.stats}
                  </div>
                </div>
              </div>

              {/* Blue hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;