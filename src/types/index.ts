export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  features: string[];
  rating: number;
  reviews: number;
  stock: number;
  isTrending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
