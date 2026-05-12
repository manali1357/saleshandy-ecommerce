"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Heart, Minus, Plus, ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react";

import { api } from "@/services/mockData";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const addItemToCart = useCartStore((state) => state.addItem);
  const { addItem: addWishlist, removeItem: removeWishlist, isInWishlist } = useWishlistStore();
  const { toast } = useToast();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => api.getProductById(id),
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <Skeleton className="aspect-square rounded-3xl" />
          <div className="space-y-6 pt-8">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-32 w-full mt-8" />
            <Skeleton className="h-16 w-full rounded-full mt-8" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push("/products")} className="rounded-full">
          Back to Products
        </Button>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity > 1 ? 'units' : 'unit'} of ${product.name} added to your cart.`,
    });
  };

  const toggleWishlist = () => {
    if (inWishlist) {
      removeWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed.`,
      });
    } else {
      addWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added.`,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <Button 
        variant="ghost" 
        className="mb-8 hover:bg-transparent pl-0 text-muted-foreground hover:text-foreground group"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back
      </Button>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="space-y-6 relative sticky top-24 h-fit">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-muted group cursor-zoom-in"
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-125"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all border-2",
                    activeImage === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={image} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col pt-4 md:pt-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              <Link href={`/categories/${product.category}`} className="hover:text-primary transition-colors">
                {product.category}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold">{product.rating}</span>
                <span className="text-xs text-muted-foreground font-medium">({product.reviews} reviews)</span>
              </div>
              {product.stock > 0 ? (
                <Badge variant="outline" className="text-emerald-500 border-emerald-200 bg-emerald-50 dark:bg-emerald-950/30">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>
          </div>

          <div className="text-4xl font-bold mb-8">
            ₹{product.price.toFixed(2)}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="space-y-4 mb-10">
            <h3 className="font-semibold text-lg">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t">
            <div className="flex items-center border rounded-full h-14 bg-background">
              <Button
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-l-full"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium text-lg">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-r-full"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <Button 
              size="lg" 
              className="flex-1 h-14 rounded-full text-lg gap-2"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "h-14 w-14 rounded-full border-2",
                inWishlist ? "border-red-200 bg-red-50 dark:bg-red-950/20" : ""
              )}
              onClick={toggleWishlist}
            >
              <Heart className={cn("h-6 w-6 transition-colors", inWishlist ? "fill-red-500 text-red-500" : "")} />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Truck className="h-6 w-6 shrink-0" />
              <span className="text-sm font-medium">Free shipping on orders over ₹4,000</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <ShieldCheck className="h-6 w-6 shrink-0" />
              <span className="text-sm font-medium">1-Year Premium Warranty included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
