import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  glowColor?: string;
  particleCount?: number;
  interactiveRadius?: number;
  maxDistance?: number;
  fixed?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  currentAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  origVx: number;
  origVy: number;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = '',
  particleColor = 'rgba(239, 68, 68, 0.65)',
  lineColor = 'rgba(239, 68, 68, 0.15)',
  glowColor = 'rgba(239, 68, 68, 0.4)',
  particleCount,
  interactiveRadius = 160,
  maxDistance = 125,
  fixed = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let particles: Particle[] = [];

    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      isActive: false,
    };

    const calculateParticleCount = (w: number, h: number) => {
      if (particleCount !== undefined) return particleCount;
      const area = w * h;
      if (w < 640) {
        return Math.floor(Math.min(35, Math.max(22, area / 28000)));
      } else if (w < 1024) {
        return Math.floor(Math.min(55, Math.max(35, area / 24000)));
      } else {
        return Math.floor(Math.min(90, Math.max(50, area / 20000)));
      }
    };

    const initCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      const count = calculateParticleCount(width, height);
      particles = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const speed = Math.random() * 0.35 + 0.15;
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        particles.push({
          x,
          y,
          vx,
          vy,
          origVx: vx,
          origVy: vy,
          size: Math.random() * 1.5 + 1.1,
          baseAlpha: Math.random() * 0.4 + 0.3,
          currentAlpha: Math.random() * 0.4 + 0.3,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initCanvas();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initCanvas();
      }, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isActive = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('touchend', handleMouseLeave, { passive: true });

    let time = 0;
    const maxDistSq = maxDistance * maxDistance;
    const interactiveRadiusSq = interactiveRadius * interactiveRadius;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Smooth mouse interpolation (LERP)
      if (mouse.isActive) {
        if (mouse.x === -9999) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.12;
          mouse.y += (mouse.targetY - mouse.y) * 0.12;
        }
      } else {
        mouse.x += (-9999 - mouse.x) * 0.1;
        mouse.y += (-9999 - mouse.y) * 0.1;
      }

      const pCount = particles.length;

      // Update positions & physics
      for (let i = 0; i < pCount; i++) {
        const p = particles[i];

        // Organic floating pulsation
        p.currentAlpha =
          p.baseAlpha + Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.18;
        if (p.currentAlpha < 0.15) p.currentAlpha = 0.15;
        if (p.currentAlpha > 0.9) p.currentAlpha = 0.9;

        // Base drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries with soft padding for continuous flow
        if (p.x < -15) p.x = width + 15;
        else if (p.x > width + 15) p.x = -15;

        if (p.y < -15) p.y = height + 15;
        else if (p.y > height + 15) p.y = -15;

        // Mouse interaction: subtle repulsion with smooth dampening
        if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < interactiveRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (interactiveRadius - dist) / interactiveRadius;
            const normX = dx / dist;
            const normY = dy / dist;

            // Gentle push away
            p.x += normX * force * 2.2;
            p.y += normY * force * 2.2;

            // Slightly increase brightness when near cursor
            p.currentAlpha = Math.min(1, p.currentAlpha + force * 0.4);
          }
        }
      }

      // Draw constellation connections between particles
      for (let i = 0; i < pCount; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < pCount; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / maxDistance;
            const alpha = factor * 0.22;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha.toFixed(3)})`;
            ctx.lineWidth = factor * 0.9 + 0.3;
            ctx.stroke();
          }
        }

        // Draw connections to mouse cursor when close
        if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
          const dxMouse = p1.x - mouse.x;
          const dyMouse = p1.y - mouse.y;
          const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
          const mouseConnectionRadius = interactiveRadius * 0.9;
          const mouseConnRadSq = mouseConnectionRadius * mouseConnectionRadius;

          if (distMouseSq < mouseConnRadSq) {
            const distMouse = Math.sqrt(distMouseSq);
            const factor = 1 - distMouse / mouseConnectionRadius;
            const alpha = factor * 0.32;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha.toFixed(3)})`;
            ctx.lineWidth = factor * 1.1 + 0.4;
            ctx.stroke();
          }
        }
      }

      // Draw glowing crimson particles
      for (let i = 0; i < pCount; i++) {
        const p = particles[i];

        // Soft ambient red particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${p.currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Subtle soft outer glow for slightly larger particles
        if (p.size > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(239, 68, 68, ${(p.currentAlpha * 0.18).toFixed(3)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
    };
  }, [particleColor, lineColor, glowColor, particleCount, interactiveRadius, maxDistance]);

  return (
    <canvas
      ref={canvasRef}
      id="portfolio-particle-network"
      aria-hidden="true"
      className={`pointer-events-none ${
        fixed ? 'fixed inset-0' : 'absolute inset-0'
      } z-0 overflow-hidden ${className}`}
      style={{
        width: '100vw',
        height: '100vh',
        opacity: 0.85,
      }}
    />
  );
};
