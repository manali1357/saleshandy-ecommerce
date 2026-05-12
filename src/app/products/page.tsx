"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { SlidersHorizontal, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

import { api } from "@/services/mockData";
import { ProductCard } from "@/components/shared/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getProducts(),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.getCategories(),
  });

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  }) || [];

  const parentRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1280) setColumnCount(4);
      else if (width >= 1024) setColumnCount(3);
      else if (width >= 640) setColumnCount(2);
      else setColumnCount(1);
    };
    
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const rows: typeof filteredProducts[] = [];
  for (let i = 0; i < filteredProducts.length; i += columnCount) {
    rows.push(filteredProducts.slice(i, i + columnCount));
  }

  const virtualizer = useWindowVirtualizer({
    count: rows.length,
    estimateSize: () => 480,
    overscan: 3,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">All Products</h1>
          <p className="text-muted-foreground">Discover our premium collection</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-9 rounded-full bg-muted/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 rounded-full">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <Accordion type="single" collapsible defaultValue="categories">
                  <AccordionItem value="categories">
                    <AccordionTrigger>Categories</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <Button
                          variant={selectedCategory === null ? "default" : "ghost"}
                          className="w-full justify-start rounded-xl"
                          onClick={() => setSelectedCategory(null)}
                        >
                          All Categories
                        </Button>
                        {categories?.map((category) => (
                          <Button
                            key={category.id}
                            variant={selectedCategory === category.slug ? "default" : "ghost"}
                            className="w-full justify-start rounded-xl"
                            onClick={() => setSelectedCategory(category.slug)}
                          >
                            {category.name}
                          </Button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Reset Filters */}
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    className="w-full rounded-xl"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {productsLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-[300px] w-full rounded-2xl" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No products found</h2>
          <p className="text-muted-foreground max-w-md">
            We couldn't find anything matching "{searchQuery}". Try adjusting your search or filters.
          </p>
          <Button 
            className="mt-6 rounded-full" 
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div ref={parentRef} className="w-full">
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => {
              const rowProducts = rows[virtualRow.index];
              return (
                <div
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start - virtualizer.options.scrollMargin}px)`,
                    display: "grid",
                    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                    gap: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  {rowProducts.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={virtualRow.index * columnCount + i}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
