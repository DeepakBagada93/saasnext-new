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
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#161E42]/95 backdrop-blur-xl shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative group">
              <Image
                src="/newsaasnext.png"
                alt="SaaSNext Logo"
                width={160}
                height={50}
                priority
                className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-3 bg-[#1F2A56]/40 p-2 rounded-full backdrop-blur-sm">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 relative group
                    ${pathname === item.href
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* PageSpeed Button */}
              <Link
                href={pageSpeedItem.href}
                className={`px-5 py-2 rounded-full transition-all duration-300 
                  bg-gradient-to-r from-orange-500 to-orange-600 
                  text-white font-medium shadow-lg 
                  hover:shadow-orange-500/20 hover:scale-105 
                  flex items-center gap-2`}
              >
                <span>{pageSpeedItem.icon}</span>
                <span>{pageSpeedItem.label}</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2.5 rounded-full bg-[#1F2A56]/40 hover:bg-[#1F2A56]/60 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={22} className="text-orange-400" />
              ) : (
                <Menu size={22} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Circular Layout */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#1F2A56] z-50 md:hidden">
            <div className="flex items-center justify-center min-h-screen px-6">
              <div className="relative w-64 h-64">
                {/* Circular Menu Items */}
                {menuItems.map((item, index) => {
                  const angle = (index * 360) / menuItems.length;
                  const radius = 120; // Distance from center
                  const left = `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`;
                  const top = `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 
                        flex flex-col items-center gap-2 transition-all duration-300
                        ${pathname === item.href
                          ? "scale-110"
                          : "hover:scale-110"
                        }`}
                      style={{ left, top }}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center
                        transition-all duration-300 text-2xl
                        ${pathname === item.href
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20"
                          : "bg-[#252F5E] hover:bg-[#2A3569]"
                        }`}>
                        {item.icon}
                      </div>
                      <span className="text-white text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}

                {/* Center Speed Insights Button */}
                <Link
                  href={pageSpeedItem.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    flex flex-col items-center gap-2"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 
                    flex items-center justify-center text-3xl shadow-lg shadow-orange-500/20
                    hover:scale-110 transition-all duration-300">
                    {pageSpeedItem.icon}
                  </div>
                  <span className="text-white text-sm font-medium">{pageSpeedItem.label}</span>
                </Link>
              </div>
            </div>

            {/* Close Button with Enhanced Styling */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full 
                bg-[#252F5E] hover:bg-[#2A3569]
                transition-all duration-300 group
                ring-2 ring-orange-500/50"
              aria-label="Close menu"
            >
              <X 
                size={24} 
                className="text-white group-hover:text-orange-400 transition-colors duration-300" 
              />
            </button>
          </div>
        )}
      </nav>

      {/* Gradient Divider */}
      <div
        className={`w-full h-[2px] transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-transparent via-orange-500/40 to-transparent shadow-sm"
            : "bg-transparent"
        }`}
      ></div>
    </>
  );
}