"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { Zap, TrafficCone, LampCeiling, ShieldCheck, Smartphone } from "lucide-react";

export const StatesBanner = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const shadowOpacity = useMotionValue(0.1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const bounds = cardRef.current.getBoundingClientRect();
    
    // Smoother normalized mouse position
    let mouseX = (e.clientX - bounds.left) / bounds.width;
    let mouseY = (e.clientY - bounds.top) / bounds.height;
    mouseX = Math.min(1, Math.max(0, mouseX));
    mouseY = Math.min(1, Math.max(0, mouseY));

    // Gentle easing function
    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

    rotateX.set(-(mouseY - 0.5) * 4 * easeOutQuad(Math.abs(mouseY - 0.5) * 2));
    rotateY.set((mouseX - 0.5) * 4 * easeOutQuad(Math.abs(mouseX - 0.5) * 2));
    shadowOpacity.set(0.1 + mouseX * 0.1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    shadowOpacity.set(0.1);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          ref={cardRef}
          className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transition: "transform 0.4s cubic-bezier(0.17, 0.67, 0.35, 0.97)",
            filter: useMotionTemplate`drop-shadow(0 ${shadowOpacity}px 8px rgba(0,0,0,0.2))`
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTk5Ljk5IDBIMHYyMDBoMjAwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]" />

          {/* Content */}
          <div className="relative z-10 space-y-10 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full">
                <Smartphone className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Smart City Solutions</span>
              </div>
              <h2 className="text-5xl font-bold">
                Next-Gen Street Lighting<br />
                & Traffic Systems
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { 
                  icon: <LampCeiling className="w-8 h-8 text-blue-300" />,
                  title: "Adaptive Lighting",
                  text: "Smart LED systems that auto-adjust based on environment and usage patterns"
                },
                { 
                  icon: <TrafficCone className="w-8 h-8 text-blue-300" />,
                  title: "Traffic Management",
                  text: "Integrated smart traffic lights with real-time monitoring and control"
                },
                { 
                  icon: <Zap className="w-8 h-8 text-blue-300" />,
                  title: "Energy Efficient",
                  text: "Reduce municipal lighting costs by up to 65% with our smart grids"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <motion.button 
                className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-6 h-6" />
                Get Smart Lighting Quote
              </motion.button>
              
              <div className="flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-300" />
                  <span>Well Accredited</span>
                </div>
                <div className="h-4 w-px bg-white/30" />
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-300" />
                  <span>Well Experienced</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatesBanner;