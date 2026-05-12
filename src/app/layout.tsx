import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/providers/query-provider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Saleshandy-Cart",
  description: "Modern E-commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <Navbar />
            <main className="pt-16 min-h-[calc(100vh-4rem)]">
              {children}
            </main>
            <Footer />
          </QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
