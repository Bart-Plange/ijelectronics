"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { Zap as LightningBolt } from "lucide-react";

export const StatsBanner = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const shadowOpacity = useMotionValue(0.1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const bounds = cardRef.current.getBoundingClientRect();
    
    // Ensure mouse positions are within valid bounds
    let mouseX = (e.clientX - bounds.left) / bounds.width;
    let mouseY = (e.clientY - bounds.top) / bounds.height;
    mouseX = Math.min(1, Math.max(0, mouseX));
    mouseY = Math.min(1, Math.max(0, mouseY));

    // Smooth easing function for better responsiveness
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

    rotateX.set(-(mouseY - 0.5) * 10 * easeOutQuint(Math.abs(mouseY - 0.5) * 2));
    rotateY.set((mouseX - 0.5) * 10 * easeOutQuint(Math.abs(mouseX - 0.5) * 2));
    shadowOpacity.set(0.15 + mouseX * 0.15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    shadowOpacity.set(0.1);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          ref={cardRef}
          className="bg-gradient-to-br from-indigo-600/90 to-violet-600/90 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transition: "transform 0.4s cubic-bezier(0.17, 0.67, 0.35, 0.97)",
            filter: useMotionTemplate`drop-shadow(0 ${shadowOpacity}px 10px rgba(0,0,0,0.2))`
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Electric pulse effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 pointer-events-none animate-pulse-slow" />

          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgMTZIMHYxNmgxNnYxNmgxNlYzMkg2NFYxNkg0OFYwaC0xNnYxNnptNDggNDhoMTZ2MTZINjRWMzJoMTZ2MzJ6TTAgNDh2MTZoMTZWMzJIMFY0OHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-center gap-4">
              <LightningBolt className="w-12 h-12 text-yellow-400" />
              <div className="text-6xl font-bold">60%</div>
            </div>

            <p className="text-xl text-center max-w-2xl mx-auto">
              Energy efficiency improvement in smart grid systems through our AI-powered 
              electrical load monitoring solutions.
            </p>

            <div className="flex flex-col items-center space-y-4">
              <motion.button 
                className="bg-white/90 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all backdrop-blur-sm flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <LightningBolt className="w-5 h-5" />
                View Energy Analytics
              </motion.button>
              
              <div className="text-sm text-white/80">
                Real-time voltage monitoring • Smart circuit protection • Automated load balancing
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsBanner;
