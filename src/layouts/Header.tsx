// Updated Header component
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact", isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      {/* Top contact bar remains unchanged */}
      <div className="bg-gradient-to-b from-gray-900/95 to-gray-900/80 py-2 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-end items-center space-y-1 md:space-y-0 md:space-x-6">
          <a 
            href="tel:+233557596325" 
            className="text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center"
          >
            <Phone className="w-4 h-4 mr-1" />
            (+233) 557 596 325
          </a>
          <a 
            href="mailto:info@ijggtl.com" 
            className="text-sm text-gray-300 hover:text-blue-400 transition-colors flex items-center"
          >
            <Mail className="w-4 h-4 mr-1" />
            info@ijggtl.com
          </a>
        </div>
      </div>
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            SmartCity Solutions
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.isButton ? (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={link.path}
                      className="bg-blue-600 px-6 py-2 rounded-full text-white hover:bg-blue-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-gray-800/95 backdrop-blur-sm mt-[84px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="h-[calc(100vh-84px)] overflow-y-auto p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-3 px-4 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;