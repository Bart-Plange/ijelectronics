import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Map } from "../components";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-gray-100 relative overflow-hidden">
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
            <h1 className="text-4xl font-bold text-green-400 mb-4">
              Contact IJ Global Green Technology
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <FaBolt className="w-8 h-8 text-yellow-400 animate-pulse" aria-hidden="true" />
              <div className="h-1 w-12 bg-green-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with our electrical engineering experts for smart city solutions, 
              industrial lighting systems, and sustainable infrastructure projects.
            </p>
            
            {/* Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "IJ Global Green Technology Limited",
                "image": "/logo.webp",
                "email": "info@ijggtl.com",
                "telephone": ["+233557596325", "+420605894986"],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Accra",
                  "addressRegion": "Greater Accra",
                  "addressCountry": "GH"
                },
                "sameAs": [
                  "https://www.facebook.com/ijggtl",
                  "https://twitter.com/ijggtl",
                  "https://www.linkedin.com/company/ijggtl"
                ]
              })}
            </script>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-green-400 mb-6">Send us a message</h2>

              <form className="space-y-6" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-100"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                  aria-label="Submit contact form"
                >
                  <FaBolt className="w-5 h-5 text-yellow-400" aria-hidden="true" />
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
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-green-400">Office Locations</h3>
                    <div className="text-gray-300 space-y-4">
                      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <p itemProp="addressLocality">Accra</p>
                        <p itemProp="addressRegion">Greater Accra Region</p>
                        <p itemProp="addressCountry">Ghana</p>
                      </div>
                      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <p itemProp="addressLocality">Prague</p>
                        <p itemProp="addressRegion">Central Bohemian Region</p>
                        <p itemProp="addressCountry">Czech Republic</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-green-400">Phone Numbers</h3>
                      <div className="text-gray-300 space-y-2">
                        <a href="tel:+233557596325" className="block hover:text-yellow-400 transition-colors">
                          GH: +233 557 596 325
                        </a>
                        <a href="tel:+420733114209" className="block hover:text-yellow-400 transition-colors">
                          CZ: +420 733 114 209
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FaWhatsapp className="text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-green-400">WhatsApp</h3>
                      <a 
                        href="https://wa.me/420605894986" 
                        className="text-gray-300 hover:text-yellow-400 transition-colors block"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                      >
                        (+420) 605 894 986
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-green-400">Email Address</h3>
                      <a 
                        href="mailto:info@ijggtl.com" 
                        className="text-gray-300 hover:text-yellow-400 transition-colors block"
                        aria-label="Send email to info@ijggtl.com"
                      >
                        info@ijggtl.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-green-400 mb-4">Follow Our Work</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.facebook.com/ijggtl" 
                    className="text-green-400 hover:text-yellow-400 transition-colors"
                    aria-label="Visit our Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://twitter.com/ijggtl" 
                    className="text-green-400 hover:text-yellow-400 transition-colors"
                    aria-label="Follow us on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/ijggtl" 
                    className="text-green-400 hover:text-yellow-400 transition-colors"
                    aria-label="Connect on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-700">
            <div className="aspect-video">
              <Map 
                aria-label="Company locations map" 
                title="IJ Global Green Technology Office Locations"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

