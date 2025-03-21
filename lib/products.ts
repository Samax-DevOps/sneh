import type { Product } from "@/types/product"

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    description: "A comfortable and versatile cotton t-shirt for everyday wear",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "men",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    rating: 4.5,
    reviewCount: 128,
    createdAt: "2023-01-15T00:00:00Z",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with a comfortable stretch",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "men",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    rating: 4.3,
    reviewCount: 95,
    createdAt: "2023-02-10T00:00:00Z",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    description: "Light and flowy summer dress with a beautiful floral pattern",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Pink", "Yellow"],
    rating: 4.7,
    reviewCount: 156,
    createdAt: "2023-03-05T00:00:00Z",
    isFeatured: true,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    description: "Stylish and practical leather crossbody bag for everyday use",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    colors: ["Black", "Brown", "Tan"],
    rating: 4.8,
    reviewCount: 112,
    createdAt: "2023-02-20T00:00:00Z",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Oversized Knit Sweater",
    description: "Cozy oversized knit sweater perfect for cooler weather",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "women",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Black"],
    rating: 4.6,
    reviewCount: 87,
    createdAt: "2023-01-25T00:00:00Z",
    isFeatured: false,
  },
  {
    id: "6",
    name: "Athletic Performance Shorts",
    description: "Lightweight and breathable shorts for all your athletic activities",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Blue"],
    rating: 4.4,
    reviewCount: 76,
    createdAt: "2023-03-15T00:00:00Z",
    isFeatured: false,
  },
  {
    id: "7",
    name: "Wireless Bluetooth Earbuds",
    description: "High-quality wireless earbuds with long battery life",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
    colors: ["Black", "White"],
    rating: 4.2,
    reviewCount: 203,
    createdAt: "2023-02-05T00:00:00Z",
    isFeatured: false,
  },
  {
    id: "8",
    name: "Casual Button-Up Shirt",
    description: "Versatile button-up shirt that can be dressed up or down",
    price: 44.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"],
    rating: 4.5,
    reviewCount: 68,
    createdAt: "2023-01-30T00:00:00Z",
    isFeatured: false,
  },
]

// Get all products
export function getProducts(): Product[] {
  return products
}

// Get featured products
export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured)
}

// Get product by ID
export function getProductById(id: string): Product | null {
  return products.find((product) => product.id === id) || null
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

