import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip"
import Background from "@/components/Background"
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bidyasagar Sahu | Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies. Building beautiful, responsive, and user-friendly web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Background />
          <Navbar />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
