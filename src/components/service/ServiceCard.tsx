// Updated ServiceCard component
const ServiceCard = ({ id, icon, title, content }: { 
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div id={id} className="bg-gray-800 shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 min-h-[300px]">
    <div className="mb-6 flex justify-center">
      <span className="p-4 bg-gray-700 rounded-full text-green-400">{icon}</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
    <p className="text-gray-300 text-lg leading-relaxed text-center">{content}</p>
  </div>
);

export default ServiceCard;