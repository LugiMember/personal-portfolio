import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ioannis Magoulas | Software Engineer & AI Researcher",
  description:
    "Portfolio of Ioannis Magoulas — Computer Science & Business Information Systems student at the University of Maryland building full-stack software, AI-powered tools, and data systems.",
  keywords: [
    "Ioannis Magoulas",
    "Software Engineer",
    "AI Researcher",
    "Computer Science",
    "University of Maryland",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Ioannis Magoulas" }],
  openGraph: {
    title: "Ioannis Magoulas | Software Engineer & AI Researcher",
    description:
      "Building full-stack software, AI-powered tools, and data systems that make complex workflows easier to understand and act on.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
