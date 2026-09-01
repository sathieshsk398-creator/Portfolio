import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth fluid spring physics for glowing light trail
  const springConfig = { damping: 28, stiffness: 220, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsTouchDevice(isTouch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'button, a, input, textarea, [role="button"], [data-cursor], .magnetic-target'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  // Don't render on touch screens to ensure mobile performance
  if (isTouchDevice) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Primary Ambient Cursor Light / Spotlight Effect (No dots or circles) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? (isHovered ? 0.38 : 0.22) : 0,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.45)_0%,rgba(239,68,68,0.15)_35%,rgba(239,68,68,0)_70%)] blur-2xl"
      />

      {/* Secondary Soft Core Glow for extra radiance */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? (isHovered ? 0.28 : 0.15) : 0,
          scale: isHovered ? 1.2 : 0.9,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,90,90,0.5)_0%,rgba(239,68,68,0)_75%)] blur-xl"
      />
    </div>
  );
};
