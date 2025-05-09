import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RSMT2D - Modern Next.js Application",
  description:
    "A modern, professional Next.js application with TypeScript and Tailwind CSS.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
          <nav className="container mx-auto flex h-16 items-center justify-between px-4">
            <a href="/" className="text-xl font-bold text-primary">
              RSMT2D
            </a>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm hover:text-primary">
                Features
              </a>
              <a href="#contact" className="text-sm hover:text-primary">
                Contact
              </a>
            </div>
          </nav>
        </header>
        <div className="pt-16">{children}</div>
        <footer className="border-t bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-600">
                © 2024 RSMT2D. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
