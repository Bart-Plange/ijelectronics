import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Map } from "../components";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Theme */}
      <div className="bg-gray-900 text-gray-100 relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-blue-400 mb-4">Get in Touch</h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <FaBolt className="w-8 h-8 text-yellow-400 animate-pulse" />
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with our team to discuss your smart city solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <FaBolt className="w-5 h-5 text-yellow-400" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-400">Office Address</h3>
                    <p className="text-gray-300">123 Smart City Blvd<br/>Tech Valley, SC 54321</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mb-6">
                  {/* Phone Numbers */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-400">Phone Number</h3>
                      <p className="text-gray-300">(+233) 557 596 325</p>
                    </div>
                  </div>

                  {/* WhatsApp Contact */}
                  <div className="flex items-start space-x-4">
                    <FaWhatsapp className="text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-400">WhatsApp</h3>
                      <a 
                        href="https://wa.me/420605894986" 
                        className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span>(+420) 605 894 986</span>
                       
                      </a>
                    </div>
                  </div>
                </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-400">Email Address</h3>
                    <p className="text-gray-300">info@ijggtl.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Connect With Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">
                    <FaFacebook className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">
                    <FaTwitter className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-yellow-400 transition-colors">
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Full-width Map Component */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-700">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;