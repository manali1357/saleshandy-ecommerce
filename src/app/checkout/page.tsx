"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, ChevronRight, CreditCard, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCartStore } from "@/store/useCartStore";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CheckoutStep = "shipping" | "payment" | "success";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const [step, setStep] = useState<CheckoutStep>("shipping");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    clearCart();
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="h-12 w-12" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-xl text-muted-foreground max-w-md mb-8">
          Thank you for your purchase. Your order #ORD-{Math.floor(Math.random() * 100000)} has been received and is being processed.
        </p>
        <Link href="/products" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-muted-foreground mb-8">Your cart is empty. Please add items to checkout.</p>
        <Button onClick={() => router.push("/products")} className="rounded-full">
          Browse Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="flex items-center gap-2 mb-12 text-sm font-medium">
        <span className={step === "shipping" ? "text-primary font-bold" : "text-muted-foreground"}>
          Shipping
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className={step === "payment" ? "text-primary font-bold" : "text-muted-foreground"}>
          Payment
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">Confirmation</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === "shipping" && (
              <motion.form
                key="shipping"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleShippingSubmit}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Contact Information</h2>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="h-12 rounded-xl" />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h2 className="text-2xl font-semibold">Shipping Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="h-12 rounded-xl" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="h-12 rounded-xl" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required className="h-12 rounded-xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required className="h-12 rounded-xl" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" required className="h-12 rounded-xl" />
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-full text-lg mt-8">
                  Continue to Payment
                </Button>
              </motion.form>
            )}

            {step === "payment" && (
              <motion.form
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handlePaymentSubmit}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Payment Method</h2>
                  <Button variant="ghost" size="sm" type="button" onClick={() => setStep("shipping")}>
                    Edit Shipping
                  </Button>
                </div>

                <div className="border rounded-2xl p-6 bg-card">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <span className="font-medium text-lg">Credit Card</span>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" required className="h-12 rounded-xl font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry">Expiration Date (MM/YY)</Label>
                        <Input id="expiry" placeholder="MM/YY" required className="h-12 rounded-xl font-mono" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required className="h-12 rounded-xl font-mono" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" required className="h-12 rounded-xl" />
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-full text-lg mt-8" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay $${cartTotal.toFixed(2)}`}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-muted/50 rounded-3xl p-6 md:p-8 sticky top-24 border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" /> Order Summary
            </h3>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                    <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-sm flex items-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between pt-4 border-t text-lg font-bold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
