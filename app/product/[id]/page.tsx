import Breadcrumbs from "@/components/Breadcrumb";
import { Product } from "@/types/product";
import Image from "next/image";

// Fetch a single product by ID
async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return {
    title: `${product.title} - Buy Now`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      url: `product/${id}`,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = await params;
  const product = await fetchProductById(id);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product.title, href: `/product/${id}` },
  ];

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="border rounded shadow p-4">
        <div className="flex items-center justify-center">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={600}
            height={600}
            className="object-cover w-96 h-full rounded"
          />
        </div>

        <h1 className="text-2xl font-semibold mt-4">{product.title}</h1>
        <p className="mt-4">{product.description}</p>
        <p className="text-gray-600 mt-2">Brand: {product.brand}</p>
        <p className="text-gray-600 mt-2">Category: {product.category}</p>
        <p className="text-gray-600 mt-2">Rating: {product.rating} ⭐</p>
        <p className="text-gray-800 font-semibold mt-4">${product.price}</p>
      </div>
    </div>
  );
}
