"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Button, buttonVariants } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/ProductCard";
import { api } from "@/services/mockData";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products", "trending"],
    queryFn: () => api.getProducts(),
  });

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.getCategories(),
  });

  const trendingProducts = products?.filter((p) => p.isTrending) || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] lg:h-[90vh] min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background border-b">
        {/* Animated ambient blob backdrops */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1], 
              x: [0, 40, 0], 
              y: [0, -40, 0],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.25, 1], 
              x: [0, -50, 0], 
              y: [0, 30, 0],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex flex-col lg:flex-row items-center gap-16 py-20 lg:py-0">
          
          {/* Left Column: Premium Typography & Actions */}
          <div className="flex-1 text-left space-y-6 max-w-2xl mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-muted/60 backdrop-blur-sm text-sm font-medium"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              SDE-2 Final Showcase Build
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none"
            >
              Design your life with{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent block mt-2">
                Premium Essentials
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Discover our curated collection of high-end tech, accessories, and lifestyle products designed for the modern professional.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link href="/products" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto rounded-full h-14 px-8 text-base gap-2 group shadow-lg shadow-primary/20" })}>
                <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" />
                Shop Collection
              </Link>
              <Link href="/categories" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto rounded-full h-14 px-8 text-base bg-background/40 backdrop-blur-sm" })}>
                Explore Categories
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Glassmorphic Cards Stack */}
          <div className="flex-1 w-full relative h-[450px] flex items-center justify-center">
            {/* Background glowing circle behind cards */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-primary/30 to-indigo-500/10 rounded-full blur-3xl" />

            {/* Card 1: Bottom Layer (Fashion Card) */}
            <motion.div
              animate={{ 
                y: [15, -15, 15], 
                rotate: [-6, -10, -6] 
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, zIndex: 40, transition: { duration: 0.3 } }}
              className="absolute left-6 md:left-12 bottom-6 w-60 md:w-64 p-4 rounded-3xl bg-card/50 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-2xl cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=400&auto=format&fit=crop" 
                  alt="Minimalist Chronograph Watch" 
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-2 left-2 bg-background/80 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
                  Fashion
                </span>
              </div>
              <h3 className="font-bold text-sm">Minimalist Chronograph</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-semibold text-primary">₹120.00</span>
                <span className="text-[10px] text-muted-foreground">★ 4.9 (84)</span>
              </div>
            </motion.div>

            {/* Card 2: Middle Layer (Electronics Card) */}
            <motion.div
              animate={{ 
                y: [-15, 15, -15], 
                rotate: [8, 12, 8] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 40, transition: { duration: 0.3 } }}
              className="absolute right-6 md:right-12 top-6 w-60 md:w-64 p-4 rounded-3xl bg-card/50 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-2xl cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop" 
                  alt="Wireless ANC Headphones" 
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-2 left-2 bg-background/80 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
                  Electronics
                </span>
              </div>
              <h3 className="font-bold text-sm">Pro ANC Headphones</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-sm font-semibold text-primary">₹299.99</span>
                <span className="text-[10px] text-muted-foreground">★ 4.8 (512)</span>
              </div>
            </motion.div>

            {/* Card 3: Top/Front Layer (Beauty/Home Card) */}
            <motion.div
              animate={{ 
                y: [10, -10, 10], 
                rotate: [-2, 2, -2] 
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05, zIndex: 40, transition: { duration: 0.3 } }}
              className="absolute z-20 w-64 md:w-72 p-4 rounded-3xl bg-card/80 backdrop-blur-xl border-2 border-primary/20 dark:border-primary/10 shadow-[0_20px_50px_rgba(var(--primary-rgb),0.15)] cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop" 
                  alt="Hyaluronic Acid Serum" 
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Trending
                </span>
              </div>
              <h3 className="font-bold text-base">Hyaluronic Acid Serum</h3>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">Visibly plumps skin, minimizes fine lines.</p>
              <div className="flex items-center justify-between mt-2 pt-2 border-t">
                <span className="text-base font-bold text-primary">₹22.00</span>
                <span className="text-xs font-medium text-muted-foreground">★ 4.7 (340 reviews)</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Shop by Category</h2>
              <p className="text-muted-foreground">Find exactly what you're looking for</p>
            </div>
            <Link href="/categories" className="hidden sm:flex items-center text-primary hover:underline font-medium">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-64 rounded-2xl" />
                ))
              : categories?.map((category, i) => (
                  <Link key={category.id} href={`/categories/${category.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                        <span className="text-white/80 text-sm flex items-center group-hover:text-primary transition-colors">
                          Explore <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Trending Now</h2>
              <p className="text-muted-foreground">Our most popular premium products</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center text-primary hover:underline font-medium">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-[300px] w-full rounded-2xl" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))
              : trendingProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
