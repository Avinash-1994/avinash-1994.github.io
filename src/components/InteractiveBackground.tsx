import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      alphaPhase: number;
      alphaSpeed: number;
    }> = [];

    // Scale particle count based on screen size
    const particleCount = Math.min(Math.floor((width * height) / 16000), 120);
    const connectionDistance = 110;
    const mouse = { x: -1000, y: -1000, active: false };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.5 + 0.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: radius,
        baseRadius: radius,
        alphaPhase: Math.random() * Math.PI * 2,
        alphaSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Check dark mode
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "99, 102, 241" : "79, 70, 229"; // Indigo-500 or Indigo-600

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Subtle radius pulsing
        p.alphaPhase += p.alphaSpeed;
        const pulse = Math.sin(p.alphaPhase) * 0.3;
        const currentRadius = Math.max(0.5, p.baseRadius + pulse);

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${isDark ? 0.3 : 0.18})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Connect to mouse cursor
        if (mouse.active) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance * 1.5) {
            const alpha = (1 - dist / (connectionDistance * 1.5)) * (isDark ? 0.22 : 0.14);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            
            // Draw a tiny highlight ring around particles near the cursor
            if (dist < 80) {
              ctx.beginPath();
              ctx.arc(p1.x, p1.y, p1.radius + 2, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(${color}, ${alpha * 0.4})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (isDark ? 0.14 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none"
    />
  );
};

export default InteractiveBackground;
