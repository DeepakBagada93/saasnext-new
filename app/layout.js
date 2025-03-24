import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SaasNext - Web App Development & Lead Generation",
  description:
    "SaaSNext builds high-performing web apps & drives leads. Expert development & marketing solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Using saasnexticon.jpg as the site icon */}
        <link rel="icon" href="/saasnexticon.jpg" type="image/jpeg" />
      </head>
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
