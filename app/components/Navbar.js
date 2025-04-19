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

  // Handle scroll effect with enhanced threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about-us", label: "About Us", icon: "👥" },
    { href: "/services", label: "Services", icon: "⚡" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ];

  const pageSpeedItem = { href: "/pagespeed", label: "Speed Insights", icon: "🚀" };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#161E42]/95 backdrop-blur-md shadow-2xl py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with enhanced hover effect */}
            <Link href="/" className="relative group">
              <Image
                src="/newsaasnext.png"
                alt="SaaSNext Logo"
                width={160}
                height={50}
                priority
                className="h-12 w-auto md:h-14 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Desktop Menu - Dock Style */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[#1F2A56]/50 backdrop-blur-md rounded-full p-2 mx-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                      pathname === item.href
                        ? "bg-orange-500 text-white shadow-lg"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <span className="transform group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* PageSpeed Button with enhanced styling */}
              <Link
                href={pageSpeedItem.href}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg hover:shadow-orange-500/20 hover:scale-105 flex items-center space-x-2 ${
                  pathname === pageSpeedItem.href ? "ring-2 ring-orange-400" : ""
                }`}
              >
                <span>{pageSpeedItem.icon}</span>
                <span>{pageSpeedItem.label}</span>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-orange-400" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#161E42]/98 backdrop-blur-lg z-50 md:hidden">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-4 rounded-xl text-xl font-medium flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 ${
                    pathname === item.href
                      ? "bg-orange-500 text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                href={pageSpeedItem.href}
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <span className="text-2xl">{pageSpeedItem.icon}</span>
                <span>{pageSpeedItem.label}</span>
              </Link>
            </div>

            {/* Enhanced Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
              aria-label="Close menu"
            >
              <X size={28} className="text-orange-400" />
            </button>
          </div>
        )}
      </nav>

       {/* Gradient Divider Below Navbar */}
       <div
        className={`w-full h-[2px] transition-all duration-500 ${
          isScrolled 
            ? "bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-lg shadow-orange-500/20" 
            : "bg-transparent"
        }`}
      ></div>
    </>
  );
}