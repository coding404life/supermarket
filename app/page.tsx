"use client";

import { ProductsDTo } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumb";

async function fetchProducts(): Promise<ProductsDTo> {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export default function ProductListing() {
  const { data, isLoading, isError, error } = useQuery<ProductsDTo, Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const breadcrumbItems = [{ label: "Home", href: "/" }];

  const [search, setSearch] = useState<string>("");

  const filteredProducts = data?.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded text-black"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts?.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={400}
              height={400}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link
              href={`/product/${product.id}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
