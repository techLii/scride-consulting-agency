// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Banner from "@/components/Banner";
import { Suspense } from "react";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Inter({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "SCRIDE Consulting Agency - Your Excellent Support",
  description: "SCRIDE Consulting Agency website.",
  openGraph: {
    title: "SCRIDE Consulting Agency - Your Excellent Support",
    description: "SCRIDE Consulting Agency website.",
    
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} font-sans md:p-0 bg-white dark:bg-black h-dvh w-full`}
      >
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              <Banner />
              <Header />
              {children}
            </div>
            <Footer />
            <TailwindIndicator />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
