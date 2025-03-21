"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import type { Product } from "@/types/product"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart({
      ...product,
      quantity: 1,
      selectedSize: product.sizes?.[0] || "",
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    })
  }

  return (
    <Link href={`/shop/${product.id}`} className="group">
      <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=400"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full" onClick={handleAddToWishlist}>
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

