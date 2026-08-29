import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
  spotlightColor?: string;
  onClick?: () => void;
  id?: string;
}

export const MagneticCard: React.FC<MagneticCardProps> = ({
  children,
  className = '',
  tiltStrength = 4,
  spotlightColor = 'rgba(37, 99, 235, 0.14)',
  onClick,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltStrength, -tiltStrength]), {
    damping: 20,
    stiffness: 220,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltStrength, tiltStrength]), {
    damping: 20,
    stiffness: 220,
  });

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden transition-all duration-200 ${className}`}
    >
      {/* Interactive Cursor Spotlight Radial Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${cursorPos.x}px ${cursorPos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-20 h-full w-full">{children}</div>
    </motion.div>
  );
};
