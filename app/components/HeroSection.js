"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();
  // State for managing the current slide in the dashboard slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of service data (title, description, relevant SVG component)
  const services = [
    {
      title: "Lead Generation",
      description: "Capture and nurture leads to grow your business.",
      svg: (
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Funnel Shape */}
          <path
            d="M10 20 L190 20 L160 180 L40 180 Z"
            fill="#4f46e5"
            stroke="#fff"
            strokeWidth="3"
          />
          {/* Dots Animation */}
          <circle cx="100" cy="50" r="5" fill="#fff">
            <animate
              attributeName="cy"
              values="50;150;50"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="100" cy="80" r="5" fill="#fff">
            <animate
              attributeName="cy"
              values="80;160;80"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      ),
    },
    {
      title: "Email Marketing",
      description: "Boost your campaigns with targeted strategies.",
      svg: (
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Envelope */}
          <rect x="40" y="40" width="120" height="100" rx="10" fill="#9333ea" />
          <path
            d="M40 40 L100 100 L160 40 Z"
            fill="#6366f1"
            stroke="#fff"
            strokeWidth="2"
          />
          {/* Pulse Animation */}
          <circle cx="100" cy="70" r="5" fill="#fff">
            <animate
              attributeName="r"
              values="5;10;5"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      ),
    },
    {
      title: "Web Development",
      description: "Build scalable web applications tailored to your needs.",
      svg: (
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Laptop */}
          <rect x="30" y="50" width="140" height="90" rx="10" fill="#3b82f6" />
          <rect x="40" y="140" width="120" height="10" rx="5" fill="#fff" />
          {/* Rotating Gear */}
          <circle cx="100" cy="100" r="20" fill="#fff">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      ),
    },
  ];

  // Function to handle slide change
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden bg-[#161E42] text-white">
      {/* Glowing Backgrounds - Updated colors */}
      <div className="glow-bg absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500 to-orange-600 blur-[150px] opacity-15 top-[-100px] right-[-100px] z-[1]" />
      <div className="glow-bg-2 absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#2B3765] to-orange-500 blur-[120px] opacity-10 bottom-[-100px] left-[-100px] z-[1]" />

      <div className="container max-w-[1200px] mx-auto px-5 relative z-[2] py-[100px] w-full">
        <div className="hero-grid grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="hero-text">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent mb-5">
              SaaSNext - Business Growth Solutions
            </h1>
            <p className="text-lg text-orange-200 opacity-80 leading-relaxed mb-8">
              Accelerate your success with modern tools designed for the next generation of business leaders.
            </p>

            {/* Benefits */}
            <div className="benefits-list grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              <div className="benefit-item flex items-center gap-3">
                <div className="benefit-icon w-10 h-10 rounded-full bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center text-orange-500 text-xl">
                  🚀
                </div>
                <div className="benefit-text text-base text-gray-300">
                  Boost your productivity
                </div>
              </div>

              <div className="benefit-item flex items-center gap-3">
                <div className="benefit-icon w-10 h-10 rounded-full bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] flex items-center justify-center text-orange-500 text-xl">
                  📈
                </div>
                <div className="benefit-text text-base text-gray-300">
                  Grow faster with insights
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons flex gap-5 mt-10">
              <button 
                onClick={() => router.push('/contact')}
                className="btn btn-primary px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
              >
                Get Started
              </button>
              <button 
                onClick={() => router.push('/contact')}
                className="btn btn-secondary px-6 py-3 rounded-lg bg-[rgba(255,255,255,0.1)] border border-orange-500/20 text-white hover:bg-orange-500/10 hover:border-orange-500/30 font-semibold transition"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Dashboard Visual with Slider */}
          <div className="dashboard-visual relative perspective-[1000px]">
            {/* Service Slider */}
            <div className="slider-container bg-[#2B3765] backdrop-blur-md rounded-xl shadow-2xl p-6 transform rotate-y-[-15deg] rotate-x-[10deg] transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] hover:translate-z-5">
              {/* Panel Header */}
              <div className="panel-header flex justify-between items-center mb-5">
                <div className="panel-title text-lg font-semibold">
                  {services[currentSlide].title}
                </div>
                <div className="panel-actions flex gap-2">
                  <span className="action-dot dot-red w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="action-dot dot-yellow w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="action-dot dot-green w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Animated SVG */}
              <div className="slider-svg w-full h-[300px] rounded-lg overflow-hidden mb-5">
                {services[currentSlide].svg}
              </div>

              {/* Description */}
              <p className="text-sm text-[#94a3b8] opacity-80">
                {services[currentSlide].description}
              </p>

              {/* Slider Controls */}
              <div className="slider-controls flex justify-center gap-3 mt-5">
                <button
                  onClick={prevSlide}
                  className="slider-control-btn bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="slider-control-btn bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition"
                >
                  →
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="floating-badge absolute top-5 right-[-10px] bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-full text-sm font-semibold shadow-lg rotate-[5deg] animate-float z-10">
              New!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;