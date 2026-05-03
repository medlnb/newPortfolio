import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import SelfCard from "@/components/SelfCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lanabi Mohamed | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="max-w-[1140px] mx-auto p-6 md:p-10 bg-[#151312]">
        <main className="lg:flex items-start gap-20 pt-0 md:pt-30">
          <aside className="lg:sticky relative top-20 self-start">
            <SelfCard />
          </aside>
          <div className="flex-1 mt-26 lg:mt-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
