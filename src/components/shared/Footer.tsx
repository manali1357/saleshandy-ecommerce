import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tight mb-4 inline-block">
              Saleshandy<span className="text-primary">Cart</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Premium modern e-commerce experience. Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="h-5 w-5" />
                <span className="sr-only">Location</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">All Products</Link></li>
              <li><Link href="/categories/fashion" className="text-muted-foreground hover:text-primary text-sm transition-colors">Fashion</Link></li>
              <li><Link href="/categories/electronics" className="text-muted-foreground hover:text-primary text-sm transition-colors">Electronics</Link></li>
              <li><Link href="/categories/beauty" className="text-muted-foreground hover:text-primary text-sm transition-colors">Beauty & Personal Care</Link></li>
              <li><Link href="/categories/home-kitchen" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home & Kitchen</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">FAQs</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SaleshandyCart. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built for SDE-2 Assignment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
