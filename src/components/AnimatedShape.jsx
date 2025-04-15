import { useEffect, useRef } from "react";

const AnimatedShape = ({ className, scale = 1 }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: null, y: null };

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouseRef.current = { x: mouse.x, y: mouse.y };
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouseRef.current = { x: null, y: null };
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const getGradientColor = (pos) => {
      const startColor = { r: 255, g: 0, b: 255 };
      const endColor = { r: 75, g: 0, b: 130 };

      const adjustedPos = Math.pow(pos, 0.8);
      const r = Math.round(
        startColor.r + (endColor.r - startColor.r) * adjustedPos
      );
      const g = Math.round(
        startColor.g + (endColor.g - startColor.g) * adjustedPos
      );
      const b = Math.round(
        startColor.b + (endColor.b - startColor.b) * adjustedPos
      );

      return `rgba(${r}, ${g}, ${b}, 0.9)`;
    };

    const isInsideRoundedRect = (x, y, width, height, radius) => {
      const halfWidth = width / 2;
      const halfHeight = height / 2;

      if (x >= halfWidth - radius) return Math.abs(y) <= halfHeight;
      if (x <= -(halfWidth - radius)) {
        const centerX = -(halfWidth - radius);
        const dx = x - centerX;
        const dy = y;
        return dx * dx + dy * dy <= radius * radius;
      }
      return Math.abs(x) <= halfWidth && Math.abs(y) <= halfHeight;
    };

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = 3;
        this.density = Math.random() * 5 + 1;
        this.color = color;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (mouse.x === null || mouse.y === null) {
          this.x -= (this.x - this.baseX) / 5;
          this.y -= (this.y - this.baseY) / 5;
          return;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const directionX = (dx / distance) * force * this.density;
          const directionY = (dy / distance) * force * this.density;
          this.x -= directionX;
          this.y -= directionY;
        } else {
          this.x -= (this.x - this.baseX) / 10;
          this.y -= (this.y - this.baseY) / 10;
        }
      }
    }

    const initParticles = () => {
      const particles = [];

      // Responsive shape center
      const screenWidth = window.innerWidth;
      let centerX, centerY;

      if (screenWidth < 768) {
        centerX = canvas.width / 2.2;
        centerY = canvas.height / 3.2;
      } else if (screenWidth < 1024) {
        centerX = canvas.width / 2.2;
        centerY = canvas.height / 3.8; // moved higher on iPad size
      } else {
        centerX = canvas.width / 2.2;
        centerY = canvas.height / 3.2;
      }

      const shapeWidth = canvas.width * scale;
      const shapeHeight = shapeWidth * 0.5;
      const radius = shapeHeight / 2;

      const angle = -Math.PI / 2.9;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const spacing = 2.5;
      for (let x = -shapeWidth / 2; x < shapeWidth / 2; x += spacing) {
        for (let y = -shapeHeight / 2; y < shapeHeight / 2; y += spacing) {
          const rotatedX = x * cos - y * sin;
          const rotatedY = x * sin + y * cos;

          if (isInsideRoundedRect(x, y, shapeWidth, shapeHeight, radius)) {
            const gradientPos = (x + shapeWidth / 2) / shapeWidth;
            particles.push(
              new Particle(
                centerX + rotatedX,
                centerY + rotatedY,
                getGradientColor(gradientPos)
              )
            );
          }
        }
      }

      return particles;
    };

    const animate = (particles) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(() => animate(particles));
    };

    const particles = initParticles();
    animate(particles);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [scale]);

  return (
    <div className={`relative shape-wrapper ${className}`}>
      <canvas
        className="absolute w-full h-full"
        ref={canvasRef}
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default AnimatedShape;
