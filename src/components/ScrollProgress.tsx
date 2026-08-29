import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-transparent"
    >
      <motion.div
        id="scroll-progress-bar"
        className="h-full w-full bg-gradient-to-r from-red-600 via-[#EF4444] to-red-400 origin-left shadow-[0_0_10px_rgba(239,68,68,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
