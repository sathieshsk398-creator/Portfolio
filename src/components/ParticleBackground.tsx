import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  particleCount?: number;
  interactiveRadius?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  alpha: number;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = '',
  particleColor = 'rgba(59, 130, 246, 0.45)', // subtle electric blue
  lineColor = 'rgba(59, 130, 246, 0.12)',
  particleCount = 45,
  interactiveRadius = 130,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null; isHovering: boolean }>({
    x: null,
    y: null,
    isHovering: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const initParticles = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;

      // Adjust particle count dynamically based on container area
      const calculatedCount = Math.min(
        particleCount,
        Math.floor((width * height) / 14000)
      );

      particles = [];
      for (let i = 0; i < Math.max(calculatedCount, 25); i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: Math.random() * 1.6 + 0.8,
          baseX: x,
          baseY: y,
          density: Math.random() * 18 + 2,
          alpha: Math.random() * 0.5 + 0.25,
        });
      }
    };

    initParticles();

    // Resize observer to handle fluid responsiveness smoothly
    const resizeObserver = new ResizeObserver(() => {
      initParticles();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Base ambient floating drift
        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive mouse physics with spring return
        if (mouse.isHovering && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < interactiveRadius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = interactiveRadius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * p.density * 0.4;
            const directionY = forceDirectionY * force * p.density * 0.4;

            // Push particles away subtly from cursor
            p.x -= directionX;
            p.y -= directionY;
          }
        }

        // Draw particle dot with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Connect nearby particles with subtle constellations
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = (1 - dist / 85) * 0.75;
            ctx.stroke();
          }
        }

        // Connect particles to mouse cursor when nearby
        if (mouse.isHovering && mouse.x !== null && mouse.y !== null) {
          const dxMouse = p.x - mouse.x;
          const dyMouse = p.y - mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < interactiveRadius * 0.8) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
            ctx.lineWidth = (1 - distMouse / (interactiveRadius * 0.8)) * 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [particleColor, lineColor, particleCount, interactiveRadius]);

  return (
    <canvas
      ref={canvasRef}
      id="hero-particle-canvas"
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
    />
  );
};
