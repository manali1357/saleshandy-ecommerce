"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import { api } from "@/services/mockData";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesPage() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.getCategories(),
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Shop by Category</h1>
        <p className="text-lg text-muted-foreground">
          Explore our curated selection of premium products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-2xl" />
            ))
          : categories?.map((category, i) => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                    <span className="text-white/80 font-medium flex items-center group-hover:text-primary transition-colors">
                      View Products <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
      </div>
    </div>
  );
}
