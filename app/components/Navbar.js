"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Keeping the original menu items without submenus
  const menuItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about-us", label: "About Us", icon: "👥" },
    { href: "/services", label: "Services", icon: "⚡" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ];

  const pageSpeedItem = { href: "/pagespeed", label: "Speed Insights", icon: "🚀" };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-[#1F2A56]/95 backdrop-blur-md shadow-lg" 
            : "bg-gradient-to-b from-[#1F2A56]/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <div className="overflow-hidden">
                <Image
                  src="/logo2.png"
                  alt="SaaSNext Logo"
                  width={200}
                  height={50}
                  priority
                  className="w-[160px] h-auto md:w-[200px] transition-all duration-300 group-hover:scale-105"
                />
              </div>
              {isScrolled && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              )}
            </Link>

            {/* Desktop Navigation - Mac Dock Inspired */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[#171F3F]/50 rounded-full p-1.5 backdrop-blur-sm border border-gray-700/30">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-full text-sm font-medium flex flex-col items-center gap-1 transition-all duration-300 mx-1 group
                      ${pathname === item.href
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md scale-110"
                        : "text-gray-300 hover:text-white hover:bg-[#2A3670]/70 hover:scale-110"
                      }`}
                  >
                    <span className="transform group-hover:scale-125 transition-transform duration-200 text-xl">
                      {item.icon}
                    </span>
                    <span className="text-xs">{item.label}</span>
                    
                    {/* Subtle dot indicator for active page */}
                    {pathname === item.href && (
                      <span className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full"></span>
                    )}
                  </Link>
                ))}
              </div>

              {/* PageSpeed Button */}
              <Link
                href={pageSpeedItem.href}
                className="ml-2 px-4 py-2 rounded-full text-sm font-medium
                  bg-gradient-to-r from-green-500 to-emerald-600 
                  text-white shadow-md 
                  hover:shadow-green-500/20 hover:scale-110 
                  flex flex-col items-center gap-1 transition-all duration-300"
              >
                <span className="text-xl">{pageSpeedItem.icon}</span>
                <span className="text-xs">{pageSpeedItem.label}</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-[#1F2A56]/90 hover:bg-[#1F2A56] transition-colors duration-300 border border-gray-700/30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="text-orange-400" />
              ) : (
                <Menu size={20} className="text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide-in Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-72 bg-[#171F3F] shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/30">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo2.png"
                alt="SaaSNext Logo"
                width={150}
                height={40}
                className="w-[150px] h-auto"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-[#2A3670]/50 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-300" />
            </button>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-white border-l-2 border-cyan-400"
                      : "text-gray-300 hover:bg-[#2A3670]/30 hover:text-white"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* PageSpeed Button at Bottom */}
          <div className="p-4 border-t border-gray-700/30">
            <Link
              href={pageSpeedItem.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-3 text-center text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-green-500/20"
            >
              <span className="text-xl">{pageSpeedItem.icon}</span>
              <span>{pageSpeedItem.label}</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Gradient Divider */}
      <div
        className={`w-full h-[1px] transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            : "bg-transparent"
        }`}
      ></div>
    </>
  );
}