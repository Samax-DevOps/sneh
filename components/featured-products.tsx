"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/product-card"
import type { Product } from "@/types/product"
import { getFeaturedProducts } from "@/lib/products"

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // In a real app, this would fetch from an API
    const fetchedProducts = getFeaturedProducts()
    setProducts(fetchedProducts)
  }, [])

  if (products.length === 0) {
    return <div className="text-center py-8">Loading products...</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

