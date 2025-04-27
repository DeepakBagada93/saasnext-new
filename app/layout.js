import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SaasNext - Web Application Development Company in Junagadh | AI Solutions",
  description: "Leading web application development company in Junagadh offering custom web apps, AI solutions, and lead generation services. Expert SaaS development & digital marketing solutions for business growth.",
  icons: {
    icon: {
      url: "/saasicon.png",
      type: "image/png",
      sizes: "32x32 48x48 96x96"
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

