import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // 0.1 to 0.6 (default 0.3)
  className?: string;
  disabled?: boolean;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.3,
  className = '',
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
};
