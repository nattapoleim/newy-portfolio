import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// components
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nattpol.",
  description: "Nattapol's Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} text-dark`}>
        <div className="container">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
