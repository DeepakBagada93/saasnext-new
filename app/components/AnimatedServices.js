'use client';

import { useEffect, useRef, useState } from 'react';

const hooks = [
  'Unlock Growth with Custom Web Apps',
  'Targeted Leads for Real Estate Pros',
  'HIPAA-Compliant Healthcare Portals',
  'Enterprise Solutions That Scale',
  'Transforming Businesses Digitally',
  'Your Vision, Built for the Web',
  'Data-Driven Lead Generation',
  'Innovative Apps for Modern Problems',
  'Web Solutions That Convert',
];

const services = [
  { name: 'Next.js', gradient: 'bg-gradient-to-br from-gray-600 to-black' },
  { name: 'React', gradient: 'bg-gradient-to-r from-sky-400 to-blue-600' },
  { name: 'Laravel', gradient: 'bg-gradient-to-br from-orange-500 to-red-600' },
  { name: 'Nest.js', gradient: 'bg-gradient-to-r from-red-600 to-rose-900' },
  { name: 'Angular', gradient: 'bg-gradient-to-br from-red-500 to-red-800' },
  { name: 'Vue.js', gradient: 'bg-gradient-to-r from-emerald-400 to-teal-700' },
  { name: 'React', gradient: 'bg-gradient-to-r from-sky-400 to-blue-600' },
  { name: 'Next.js', gradient: 'bg-gradient-to-br from-gray-600 to-black' },
  { name: 'Laravel', gradient: 'bg-gradient-to-br from-orange-500 to-red-600' },
  { name: 'Vue.js', gradient: 'bg-gradient-to-r from-emerald-400 to-teal-700' },
  { name: 'Angular', gradient: 'bg-gradient-to-br from-red-500 to-red-800' },
  { name: 'Nest.js', gradient: 'bg-gradient-to-r from-red-600 to-rose-900' },
];

export default function AnimatedServices() {
  const containerRef = useRef(null);
  const centerTextRef = useRef(null);
  const [currentHookIndex, setCurrentHookIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHookIndex((prev) => (prev + 1) % hooks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const centerText = centerTextRef.current;

    if (!container || !centerText) return;

    const items = container.querySelectorAll('.service-item');
    const containerRect = container.getBoundingClientRect();

    const calculateSafeZone = () => {
      const centerRect = centerText.getBoundingClientRect();
      const centerBuffer = 1.5;
      return {
        top: centerRect.top - containerRect.top - (centerRect.height * (centerBuffer - 1)) / 2,
        bottom: centerRect.bottom - containerRect.top + (centerRect.height * (centerBuffer - 1)) / 2,
        left: centerRect.left - containerRect.left - (centerRect.width * (centerBuffer - 1)) / 2,
        right: centerRect.right - containerRect.left + (centerRect.width * (centerBuffer - 1)) / 2,
      };
    };

    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      let randomTop, randomLeft, isOverlapping;
      let attempts = 0;

      do {
        isOverlapping = false;
        const safeZone = calculateSafeZone();

        randomTop = Math.random() * (containerRect.height - itemRect.height);
        randomLeft = Math.random() * (containerRect.width - itemRect.width);

        if (
          randomTop < safeZone.bottom &&
          randomTop + itemRect.height > safeZone.top &&
          randomLeft < safeZone.right &&
          randomLeft + itemRect.width > safeZone.left
        ) {
          isOverlapping = true;
        }

        attempts++;
      } while (isOverlapping && attempts < 100);

      item.setAttribute(
        'style',
        `top:${randomTop}px; left:${randomLeft}px; opacity:0; transform:scale(0.5); animation:fadeInDriftOut 8s ease-in-out infinite; animation-delay:${Math.random() * 8}s`
      );
    });
  }, [currentHookIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#161E42' }}
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
        `}
      </style>

      <h1
        ref={centerTextRef}
        className="text-white font-bold text-3xl max-w-[90%] text-center z-10 transition-opacity duration-500"
      >
        {hooks[currentHookIndex]}
      </h1>

      {services.map((service, index) => (
        <div
          key={index}
          className={`service-item absolute text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md pointer-events-none ${service.gradient}`}
        >
          {service.name}
        </div>
      ))}
    </div>
  );
}
