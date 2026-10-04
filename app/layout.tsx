import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyansh Rathore | Senior Analyst | Backend & Automation",
  description:
    "Professional portfolio for Divyansh Rathore, Senior Analyst focused on backend engineering, automation, and reliable software systems.",
  keywords: [
    "Divyansh Rathore",
    "Senior Analyst",
    "Backend Developer",
    "Automation Engineer",
    "Software Engineer",
  ],
  openGraph: {
    title: "Divyansh Rathore | Senior Analyst | Backend & Automation",
    description:
      "Software professional focused on backend engineering, automation, reliable systems, and practical digital solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyansh Rathore | Senior Analyst | Backend & Automation",
    description:
      "Software professional focused on backend engineering, automation, reliable systems, and practical digital solutions.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#F7F7F5] text-[#171717]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
