import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'hovered' | 'card' | 'text' | 'clicking'>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring with responsive spring physics
  const springConfig = { damping: 26, stiffness: 350, mass: 0.2 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // Dot spring (faster response)
  const dotSpringConfig = { damping: 35, stiffness: 900, mass: 0.05 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Ambient soft glow spring (heavy fluid trailing)
  const glowSpringConfig = { damping: 40, stiffness: 180, mass: 0.6 };
  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  useEffect(() => {
    // Detect touch-only screen
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

    const handleMouseDown = () => {
      setCursorState('clicking');
    };

    const handleMouseUp = () => {
      setCursorState('default');
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, input, textarea, [role="button"], [data-cursor], .magnetic-target'
      ) as HTMLElement | null;

      if (interactiveEl) {
        const customText = interactiveEl.getAttribute('data-cursor-text');
        const customType = interactiveEl.getAttribute('data-cursor');

        if (customText) {
          setCursorText(customText);
          setCursorState('text');
        } else if (customType === 'card') {
          setCursorText('');
          setCursorState('card');
        } else {
          setCursorText('');
          setCursorState('hovered');
        }
      } else {
        setCursorText('');
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  // Don't render custom cursor on touch devices to ensure native mobile ergonomics
  if (isTouchDevice) return null;

  // Variants for the outer magnetic ring
  const getRingSize = () => {
    if (cursorState === 'clicking') return { width: 28, height: 28, scale: 0.85 };
    if (cursorState === 'text') return { width: 68, height: 68, scale: 1 };
    if (cursorState === 'card') return { width: 52, height: 52, scale: 1 };
    if (cursorState === 'hovered') return { width: 44, height: 44, scale: 1 };
    return { width: 32, height: 32, scale: 1 };
  };

  const ringDimensions = getRingSize();

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* 1. Ambient Trailing Glow / Spotlight */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? (cursorState === 'card' ? 0.35 : 0.18) : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,#EF4444_0%,rgba(239,68,68,0)_70%)] blur-2xl"
      />

      {/* 2. Magnetic Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: ringDimensions.width,
          height: ringDimensions.height,
          scale: ringDimensions.scale,
          borderColor: cursorState === 'hovered' || cursorState === 'text' ? 'rgba(239, 68, 68, 0.8)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: cursorState === 'hovered' ? 'rgba(239, 68, 68, 0.12)' : cursorState === 'text' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(255, 255, 255, 0.02)',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
        className="fixed top-0 left-0 rounded-full border backdrop-blur-[1px] flex items-center justify-center transition-colors"
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-white">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* 3. High-Precision Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? (cursorState === 'text' ? 0 : 1) : 0,
          scale: cursorState === 'clicking' ? 0.6 : cursorState === 'hovered' ? 1.4 : 1,
          backgroundColor: cursorState === 'hovered' ? '#EF4444' : '#FFFFFF',
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
      />
    </div>
  );
};
