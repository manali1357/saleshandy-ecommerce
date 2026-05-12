"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/useCartStore";

export function CartDrawer() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <motion.span
              key={itemCount}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center"
            >
              {itemCount}
            </motion.span>
          )}
          <span className="sr-only">Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col pt-10">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" /> Your Cart ({itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6 pr-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Your cart is empty</h3>
              <p className="text-muted-foreground max-w-xs">
                Looks like you haven&apos;t added any premium items to your cart yet.
              </p>
              <Link href="/products" className={buttonVariants({ className: "mt-4 rounded-full" })} onClick={() => setIsOpen(false)}>
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4 border-b pb-6"
                  >
                    <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold line-clamp-1">{item.name}</h4>
                          <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                        </div>
                        <p className="font-bold whitespace-nowrap ml-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border rounded-full">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-l-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-r-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-full"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="flex-col sm:flex-col gap-4 pt-6 border-t mt-auto">
            <div className="flex items-center justify-between w-full">
              <span className="font-semibold text-lg">Subtotal</span>
              <span className="font-bold text-xl">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground w-full">
              Shipping and taxes calculated at checkout.
            </p>
            <Link href="/checkout" className={buttonVariants({ className: "w-full h-14 rounded-full text-lg" })} onClick={() => setIsOpen(false)}>
              Proceed to Checkout
            </Link>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
