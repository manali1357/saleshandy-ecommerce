"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useWishlistStore } from "@/store/useWishlistStore";
import { ProductCard } from "@/components/shared/ProductCard";
import { buttonVariants } from "@/components/ui/button";

export default function WishlistPage() {
  const { items } = useWishlistStore();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Your Wishlist</h1>
        <p className="text-muted-foreground">Save your favorite items for later</p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 bg-red-50 dark:bg-red-950/20 rounded-full flex items-center justify-center mb-6">
            <Heart className="h-10 w-10 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground max-w-md mb-8">
            You haven&apos;t added any products to your wishlist yet. Explore our collection to find something you love.
          </p>
          <Link href="/products" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
            Explore Products
          </Link>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {items.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
