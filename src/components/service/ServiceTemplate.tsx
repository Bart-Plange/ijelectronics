import { useParams } from "react-router-dom";
import { FaShieldAlt, FaSun, FaChartLine } from "react-icons/fa";

export const ServiceTemplate = () => {
  const { serviceId } = useParams<{ serviceId: ServiceKey }>();
  
  if (!serviceId || !servicesData[serviceId]) {
    return <div>Service not found</div>;
  }

  const service = servicesData[serviceId];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="p-4 bg-gray-700 rounded-full">{service.icon}</span>
          <h1 className="text-3xl font-bold text-blue-400">{service.title}</h1>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-100">Key Features</h2>
            <ul className="space-y-4">
              {service.content.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <FaShieldAlt className="flex-shrink-0 mt-1 text-blue-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Technical Specifications</h2>
            <div className="space-y-4 text-gray-300">
              {Object.entries(service.content.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span>{key}</span>
                  <span className="text-blue-400">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4">Implementation Process</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-100">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaSun className="text-yellow-400" />
                <span className="font-semibold">Site Assessment</span>
              </div>
              <p className="text-sm">Comprehensive energy audit and thermal imaging</p>
            </div>
            {/* Add other process steps */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;