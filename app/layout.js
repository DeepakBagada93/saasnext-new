import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SaasNext - Web App Development & Lead Generation",
  description:
    "SaaSNext builds high-performing web apps & drives leads. Expert development & marketing solutions.",
  icons: {
    icon: {
      url: "/saasicon.png",
      type: "image/png",
      sizes: "32x32 48x48 96x96"  // Multiple sizes for better display
    },
    shortcut: { url: "/saasicon.png", type: "image/png" },
    apple: { url: "/saasicon.png", type: "image/png" }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
