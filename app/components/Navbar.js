"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Users, Zap, Phone, Rocket } from "lucide-react";

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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  // Navigation items
  const navItems = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/about-us", label: "About Us", icon: <Users size={20} /> },
    { href: "/services", label: "Services", icon: <Zap size={20} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={20} /> },
  ];

  const speedItem = { href: "/pagespeed", label: "Speed Insights", icon: <Rocket size={20} /> };

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-[#1A234C]/90 via-[#1F2A56]/90 to-[#1A234C]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <Image
                src="/logo2.png"
                alt="SaaSNext Logo"
                width={160}
                height={40}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-2 font-medium text-sm py-2 relative transition-all duration-300 ${
                    pathname === item.href
                      ? "text-white scale-105"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span
                    className={`p-1 rounded-full transition-colors duration-300 ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                        : "hover:bg-gray-700 text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full transition-all duration-500 ${
                      pathname === item.href ? "w-full" : "group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}

              {/* Speed Button */}
              <Link
                href={speedItem.href}
                className="group relative ml-6 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-30 transition-opacity"></span>
                <span className="relative animate-pulse">{speedItem.icon}</span>
                <span>{speedItem.label}</span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-[#1F2A56]/90 hover:bg-[#2A3670] border border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 relative overflow-hidden group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              {isMenuOpen ? (
                <X size={24} className="text-orange-400 relative z-10 transition-transform rotate-90 group-hover:rotate-0" />
              ) : (
                <Menu size={24} className="text-gray-300 relative z-10 transition-transform group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-gradient-to-b from-[#171F3F] to-[#0F1A3D] shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-700/30">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo2.png" alt="Logo" width={180} height={40} />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[#2A3670]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <X size={24} className="text-gray-300" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-4">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-white shadow-inner"
                    : "text-gray-300 hover:text-white hover:bg-[#2A3670]/40"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span
                  className={`p-2 rounded-lg ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-cyan-500/30 to-blue-600/30 text-cyan-400"
                      : "bg-[#1F2A56]/50 text-gray-400"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="text-base font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Speed Insight Button */}
          <div className="p-6 border-t border-gray-700/30">
            <Link
              href={speedItem.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 text-center text-base font-medium bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <span className="animate-pulse">{speedItem.icon}</span>
              <span>{speedItem.label}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Gradient Divider */}
      <div
        className={`w-full h-[2px] transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
            : "bg-transparent"
        }`}
      ></div>

      {/* Global Keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}