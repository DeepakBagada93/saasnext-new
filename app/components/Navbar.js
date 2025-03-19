"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const pageSpeedItem = { href: "/pagespeed", label: "Speed Insights" };

  return (
    <nav className="bg-[#161E42] shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src="/newsaasnext.png"
            alt="SaaSNext Logo"
            width={160}
            height={50}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white hover:text-gray-300 transition-colors ${
                pathname === item.href ? "border-b-2 border-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* PageSpeed Button */}
          <Link
            href={pageSpeedItem.href}
            className={`bg-white text-[#161E42] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-semibold ${
              pathname === pageSpeedItem.href ? "bg-gray-100" : ""
            }`}
          >
            {pageSpeedItem.label}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#161E42] flex flex-col items-center justify-center space-y-6 text-lg text-white font-medium transition-all">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-gray-300 transition-colors ${
                pathname === item.href ? "border-b-2 border-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* PageSpeed Button (Mobile) */}
          <Link
            href={pageSpeedItem.href}
            onClick={() => setIsMenuOpen(false)}
            className={`bg-white text-[#161E42] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors font-semibold ${
              pathname === pageSpeedItem.href ? "bg-gray-100" : ""
            }`}
          >
            {pageSpeedItem.label}
          </Link>

          {/* Close Modal */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-6 text-white"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
}
