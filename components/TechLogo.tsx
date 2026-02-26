"use client";
import React, { useRef, useEffect } from 'react';

const TechLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, radius: 80 }; // Radius thora barhaya taake lambe naam par sahi interact kare

    // Canvas size (Larger for full text)
    canvas.width = 600; 
    canvas.height = 120;

    class Particle {
      x: number; y: number; baseX: number; baseY: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 25) + 5;
      }

      draw() {
        ctx!.fillStyle = 'rgba(0, 255, 255, 0.9)'; // Electric Cyan
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
        ctx!.closePath();
        ctx!.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }

    function init() {
      particles = [];
      ctx!.fillStyle = 'white';
      // Futuristic looking font weight
      ctx!.font = 'bold 75px sans-serif'; 
      ctx!.textAlign = 'center';
      ctx!.fillText('TECHROLLIN', canvas!.width / 2, 85);
      
      const data = ctx!.getImageData(0, 0, canvas!.width, canvas!.height);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Gap 5 pixels ka rakha hai performance ke liye
      for (let y = 0; y < data.height; y += 5) {
        for (let x = 0; x < data.width; x += 5) {
          if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
            particles.push(new Particle(x, y));
          }
        }
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Neural connections logic
        for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 18) {
              ctx!.strokeStyle = 'rgba(0, 255, 255, 0.12)';
              ctx!.lineWidth = 0.4;
              ctx!.beginPath();
              ctx!.moveTo(particles[i].x, particles[i].y);
              ctx!.lineTo(particles[j].x, particles[j].y);
              ctx!.stroke();
            }
        }
      }
      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height);
    };

    const handleMouseOut = () => {
      mouse.x = 0;
      mouse.y = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);
    init();
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseout', handleMouseOut);
    }
  }, []);

  return (
    <div className="flex items-center justify-center py-2">
      <canvas 
        ref={canvasRef} 
        className="transition-all duration-500 ease-in-out"
        style={{ width: '220px', height: '45px', cursor: 'crosshair' }} 
      />
    </div>
  );
};

export default TechLogo;