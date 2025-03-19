import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function DockMenu() {
  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto bg-gray-900 px-6 py-3 rounded-3xl shadow-lg flex items-center space-x-6 sm:space-x-8 md:space-x-10">
      
      {/* Facebook */}
      <Link href="#" className="group flex flex-col items-center space-y-1">
        <FaFacebook className="w-6 h-6 text-white group-hover:text-orange-500 transition-all transform group-hover:scale-110" />
        <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-all">Facebook</span>
      </Link>
      
      {/* Instagram */}
      <Link href="#" className="group flex flex-col items-center space-y-1">
        <FaInstagram className="w-6 h-6 text-white group-hover:text-orange-500 transition-all transform group-hover:scale-110" />
        <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-all">Instagram</span>
      </Link>
      
      {/* LinkedIn */}
      <Link href="#" className="group flex flex-col items-center space-y-1">
        <FaLinkedin className="w-6 h-6 text-white group-hover:text-orange-500 transition-all transform group-hover:scale-110" />
        <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-all">LinkedIn</span>
      </Link>
      
      {/* X (Twitter) */}
      <Link href="#" className="group flex flex-col items-center space-y-1">
        <FaXTwitter className="w-6 h-6 text-white group-hover:text-orange-500 transition-all transform group-hover:scale-110" />
        <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-all">X</span>
      </Link>
    </footer>
  );
}