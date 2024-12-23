export interface Product {
  description: string;
  images: string[];
  price: number;
  rating: number;
  title: string;
  category: string;
  brand: string;
  tags: string[];
  id: number;
}
export interface ProductsDTo {
  limit: number;
  products: Product[];
  skips: number;
  total: number;
}
