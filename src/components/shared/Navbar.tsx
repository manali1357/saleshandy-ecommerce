"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { CartDrawer } from "./CartDrawer";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const wishlistItemsCount = useWishlistStore((state) => state.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Saleshandy<span className="text-primary">Cart</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  pathname === link.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <ThemeToggle />

          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Heart className="h-5 w-5" />
              {wishlistItemsCount > 0 && (
                <span className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>

          <CartDrawer />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b bg-background overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.path ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
