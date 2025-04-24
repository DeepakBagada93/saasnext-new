"use client";

import { useEffect, useRef, useState } from "react";

const hooks = [
  "🚀 Unlock Growth with <b>Custom Web Apps</b>",
  "🎯 Targeted Leads for <b>Real Estate Pros</b>",
  "🔒 HIPAA-Compliant <b>Healthcare Portals</b>",
  "📈 Enterprise Solutions That <b>Scale</b>",
  "💡 Transforming Businesses <b>Digitally</b>",
  "🌐 Your Vision, Built for the <b>Web</b>",
  "📊 Data-Driven <b>Lead Generation</b>",
  "🛠️ Innovative Apps for <b>Modern Problems</b>",
  "🔥 Web Solutions That <b>Convert</b>",
];

const services = [
  { name: "Next.js", gradient: "bg-gradient-to-br from-gray-600 to-black" },
  { name: "React", gradient: "bg-gradient-to-r from-sky-400 to-blue-600" },
  { name: "Laravel", gradient: "bg-gradient-to-br from-orange-500 to-red-600" },
  { name: "Nest.js", gradient: "bg-gradient-to-r from-red-600 to-rose-900" },
  { name: "Angular", gradient: "bg-gradient-to-br from-red-500 to-red-800" },
  { name: "Vue.js", gradient: "bg-gradient-to-r from-emerald-400 to-teal-700" },
];

const ads = [
  { name: "Google Ads", gradient: "bg-gradient-to-br from-yellow-400 to-red-600" },
  { name: "Meta Ads", gradient: "bg-gradient-to-br from-blue-500 to-indigo-700" },
  { name: "X Ads", gradient: "bg-gradient-to-br from-cyan-400 to-blue-600" },
  { name: "Amazon Ads", gradient: "bg-gradient-to-br from-orange-400 to-yellow-600" },
];

export default function AnimatedServices() {
  const containerRef = useRef(null);
  const [currentHookIndex, setCurrentHookIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Hook rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHookIndex((prev) => (prev + 1) % hooks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrame;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const items = container.querySelectorAll(".service-item");

    // Neural Network Animation
    const canvas = document.createElement("canvas");
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 0.5s ease-in";
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d", { alpha: true });

    canvas.width = containerRect.width;
    canvas.height = containerRect.height;

    const nodes = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));

    const drawNeuralNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nodes
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
          }
        }
      }
      ctx.stroke();

      // Draw nodes
      ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;

        if (node.x < 0 || node.x > canvas.width) node.speedX *= -1;
        if (node.y < 0 || node.y > canvas.height) node.speedY *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(drawNeuralNetwork);
    };

    // Position service items
    const positionItems = () => {
      const positions = [];
      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        let randomTop, randomLeft, isOverlapping;
        let attempts = 0;

        do {
          isOverlapping = false;
          randomTop = Math.random() * (containerRect.height - itemRect.height);
          randomLeft = Math.random() * (containerRect.width - itemRect.width);

          const centerX = containerRect.width / 2;
          const centerY = containerRect.height / 2;
          const centerBuffer = 200;

          if (
            randomTop < centerY + centerBuffer &&
            randomTop + itemRect.height > centerY - centerBuffer &&
            randomLeft < centerX + centerBuffer &&
            randomLeft + itemRect.width > centerX - centerBuffer
          ) {
            isOverlapping = true;
          }

          // Check collision with other items
          for (const pos of positions) {
            if (
              randomLeft < pos.left + pos.width + 20 &&
              randomLeft + itemRect.width > pos.left - 20 &&
              randomTop < pos.top + pos.height + 20 &&
              randomTop + itemRect.height > pos.top - 20
            ) {
              isOverlapping = true;
              break;
            }
          }

          attempts++;
        } while (isOverlapping && attempts < 100);

        positions.push({
          left: randomLeft,
          top: randomTop,
          width: itemRect.width,
          height: itemRect.height,
        });

        item.style.cssText = `
          top: ${randomTop}px;
          left: ${randomLeft}px;
          opacity: 0;
          transform: scale(0.5);
          animation: fadeInDriftOut 8s ease-in-out infinite;
          animation-delay: ${Math.random() * 8}s;
        `;
      });
    };

    // Initialize animations
    setTimeout(() => {
      canvas.style.opacity = "1";
      drawNeuralNetwork();
      positionItems();
      setIsLoading(false);
    }, 100);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeChild(canvas);
    };
  }, [currentHookIndex]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center w-full h-screen overflow-hidden transition-opacity duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundColor: "#161E42" }}
    >
      <style>
        {`
          @keyframes fadeInDriftOut {
            0% {
              opacity: 0;
              transform: scale(0.5) translateY(0px);
            }
            15% {
              opacity: 0.9;
              transform: scale(1) translateY(0px);
            }
            85% {
              opacity: 0.9;
              transform: scale(1) translateY(-10px);
            }
            100% {
              opacity: 0;
              transform: scale(0.5) translateY(-10px);
            }
          }
          .pulsate {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
            }
            50% {
              box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
            }
          }
          /* Hook-specific animations */
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Central Tagline */}
      <h1
        className="absolute text-white font-extrabold text-5xl md:text-6xl lg:text-7xl max-w-[80%] text-center z-20 transition-all duration-1000 animate-fadeIn"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${isLoading ? 0.9 : 1})`,
          opacity: isLoading ? 0 : 1,
        }}
        dangerouslySetInnerHTML={{ __html: hooks[currentHookIndex] }}
      />

      {/* Render Development Services */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-item absolute text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md pointer-events-none ${service.gradient}`}
          style={{
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {service.name}
        </div>
      ))}

      {/* Render Ad Platforms */}
      {ads.map((ad, index) => (
        <a
          key={index}
          href={`https://${ad.name.toLowerCase().replace(" ", "")}.com`}
          target="_blank"
          rel="noopener noreferrer"
          className={`service-item absolute text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md pulsate pointer-events-auto ${ad.gradient}`}
          aria-label={`Visit ${ad.name}`}
        >
          {ad.name}
        </a>
      ))}
    </div>
  );
}