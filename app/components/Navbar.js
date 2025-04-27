"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Home, Users, Phone, Rocket } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const pathname = usePathname();

  // Handle scroll effect with enhanced behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active item based on current path
  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation menu items with enhanced icons
  const menuItems = [
    { href: "/", label: "Home", icon: <Home size={18} className="transition-transform group-hover:scale-110" /> },
    { href: "/about-us", label: "About Us", icon: <Users size={18} className="transition-transform group-hover:scale-110" /> },
    { href: "/services", label: "Services", icon: <Zap size={18} className="transition-transform group-hover:scale-110" /> },
    { href: "/contact", label: "Contact", icon: <Phone size={18} className="transition-transform group-hover:scale-110" /> },
  ];

  const pageSpeedItem = { 
    href: "/pagespeed", 
    label: "Speed Insights", 
    icon: <Rocket size={18} className="transition-transform group-hover:scale-110" /> 
  };

  return (
    <>
      {/* Navbar with enhanced glassmorphism effect */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-[#1F2A56]/85 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Simple Logo */}
            <Link href="/" className="relative">
              <Image
                src="/logo2.png"
                alt="SaaSNext Logo"
                width={160}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation with enhanced hover effects */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium relative group flex items-center gap-2 py-2 transition-all duration-300 ${
                    pathname === item.href
                      ? "text-white scale-105"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className={`transition-colors duration-300 ${
                    pathname === item.href ? "text-cyan-400" : "text-gray-400 group-hover:text-cyan-400"
                  }`}>
                    {item.icon}
                  </span>
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full transition-all duration-500 ${
                      pathname === item.href ? "w-full" : "group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}

              {/* PageSpeed Button with enhanced animation */}
              <Link
                href={pageSpeedItem.href}
                className="group relative overflow-hidden ml-4 px-5 py-2.5 rounded-full text-base font-medium bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-md hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <span className="animate-pulse">{pageSpeedItem.icon}</span>
                  {pageSpeedItem.label}
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button with enhanced animation */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2.5 rounded-lg bg-[#1F2A56]/90 hover:bg-[#2A3670] transition-all duration-300 border border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 relative overflow-hidden group"
              aria-label="Toggle menu"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              ></div>
              {isMenuOpen ? (
                <X size={24} className="text-orange-400 relative z-10 transition-transform duration-300 rotate-90 group-hover:rotate-0" />
              ) : (
                <Menu size={24} className="text-gray-300 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with enhanced animations and transitions */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-gradient-to-b from-[#171F3F] to-[#0F1A3D] shadow-2xl transform transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-700/30">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo2.png"
                alt="SaaSNext Logo"
                width={250}
                height={40}
                className="w-[250px] h-auto"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-[#2A3670]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 relative overflow-hidden group"
              aria-label="Close menu"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              ></div>
              <X size={24} className="text-gray-300 relative z-10 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          {/* Mobile Menu Items with staggered animation */}
          <div className="flex-1 overflow-y-auto py-8 px-6">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-white shadow-inner"
                      : "text-gray-300 hover:text-white hover:bg-[#2A3670]/40"
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? "fadeIn 0.5s ease forwards" : "none" 
                  }}
                >
                  <span className={`p-2 rounded-lg ${
                    pathname === item.href 
                    ? "bg-gradient-to-r from-cyan-500/30 to-blue-600/30 text-cyan-400" 
                    : "bg-[#1F2A56]/50 text-gray-400"
                  }`}>
                    {item.icon}
                  </span>
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* PageSpeed Button at Bottom with enhanced design */}
          <div className="p-6 border-t border-gray-700/30">
            <Link
              href={pageSpeedItem.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 text-center text-base font-medium bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                <span className="animate-pulse">{pageSpeedItem.icon}</span>
                <span>{pageSpeedItem.label}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Overlay for Mobile Menu with blur effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden transition-all duration-500"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Enhanced Gradient Divider */}
      <div
        className={`w-full h-[2px] transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
            : "bg-transparent"
        }`}
      ></div>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
