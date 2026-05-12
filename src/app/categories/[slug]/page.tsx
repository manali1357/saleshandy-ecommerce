"use client";

import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

import { api } from "@/services/mockData";
import { ProductCard } from "@/components/shared/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryProductsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.getCategories(),
  });

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", "category", slug],
    queryFn: () => api.getProductsByCategory(slug),
  });

  const category = categories?.find((c) => c.slug === slug);

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

  const filteredProducts = products || [];
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
    <div className="container mx-auto px-4 md:px-6 py-12 min-h-[60vh]">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight capitalize mb-4">
          {category ? category.name : slug}
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover our exclusive collection of {category?.name.toLowerCase() || slug} essentials.
        </p>
      </div>

      {isLoading ? (
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
        <div className="text-center py-24">
          <h2 className="text-2xl font-semibold mb-2">No products found</h2>
          <p className="text-muted-foreground">We couldn&apos;t find any products in this category.</p>
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
