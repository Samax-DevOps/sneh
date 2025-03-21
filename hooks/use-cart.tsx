"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product } from "@/types/product"

export interface CartItem extends Product {
  quantity: number
  selectedSize?: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
  updateQuantity: (item: CartItem, quantity: number) => void
  clearCart: () => void
}

// Create context with a default undefined value
const CartContext = createContext<CartContextType | undefined>(undefined)

// Export the provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Load cart from localStorage
    try {
      const storedCart = localStorage.getItem("cart")
      if (storedCart) {
        setCart(JSON.parse(storedCart))
      }
    } catch (e) {
      console.error("Failed to parse cart from localStorage")
      localStorage.removeItem("cart")
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    // Only save to localStorage after initial load
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, isInitialized])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // Check if item already exists in cart (with same ID and size)
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize,
      )

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += item.quantity
        return updatedCart
      } else {
        // Add new item to cart
        return [...prevCart, item]
      }
    })
  }

  const removeFromCart = (item: CartItem) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => !(cartItem.id === item.id && cartItem.selectedSize === item.selectedSize)),
    )
  }

  const updateQuantity = (item: CartItem, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id && cartItem.selectedSize === item.selectedSize ? { ...cartItem, quantity } : cartItem,
      ),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

// Export the hook to use the context
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

