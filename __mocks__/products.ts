import { ProductsDTo } from "@/types/product";

const products: ProductsDTo = {
  limit: 5,
  products: [
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      description: "Description for product 1",
      category: "Category 1",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      rating: 4.5,
      brand: "Brand 1",
      tags: ["tag1", "tag2"],
    },
    {
      id: 2,
      title: "Product 2",
      price: 49.99,
      description: "Description for product 2",
      category: "Category 2",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      rating: 4.0,
      brand: "Brand 2",
      tags: ["tag3", "tag4"],
    },
    {
      id: 3,
      title: "Product 3",
      price: 19.99,
      description: "Description for product 3",
      category: "Category 3",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      rating: 3.5,
      brand: "Brand 3",
      tags: ["tag5", "tag6"],
    },
    {
      id: 4,
      title: "Product 4",
      price: 99.99,
      description: "Description for product 4",
      category: "Category 4",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      rating: 5.0,
      brand: "Brand 4",
      tags: ["tag7", "tag8"],
    },
    {
      id: 5,
      title: "Product 5",
      price: 9.99,
      description: "Description for product 5",
      category: "Category 5",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      rating: 3.0,
      brand: "Brand 5",
      tags: ["tag9", "tag10"],
    },
  ],
  skips: 0,
  total: 5,
};

export default products;
