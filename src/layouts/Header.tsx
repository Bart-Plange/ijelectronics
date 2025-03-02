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
      <div className="bg-gradient-to-b from-gray-900/95 to-gray-900/80 py-2 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-end items-center space-y-1 md:space-y-0 md:space-x-6">
          <a href="tel:+233557596325" className="text-sm text-gray-300 hover:text-blue-400 flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            (+233) 557 596 325
          </a>
          <a href="mailto:info@ijggtl.com" className="text-sm text-gray-300 hover:text-blue-400 flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            info@ijggtl.com
          </a>
        </div>
      </div>
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400">
            SmartCity Solutions
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.isButton ? (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to={link.path} className="bg-blue-600 px-6 py-2 rounded-full text-white hover:bg-blue-700">
                      {link.label}
                    </Link>
                  </motion.div>
                ) : (
                  <Link to={link.path} className="text-gray-300 hover:text-blue-400 text-lg">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 rounded-lg text-white hover:bg-gray-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 backdrop-blur-sm mt-[84px]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          >
            <div className="h-[calc(100vh-84px)] overflow-y-auto p-4 relative">
              {/* Close Button Inside Menu */}
              <button className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </button>

              {/* Updated background for all links */}
              <div className="bg-gray-900/100 rounded-lg p-2 space-y-2">
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
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
