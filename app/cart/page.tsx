"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState("")

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-gray-400" />
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4">Product</th>
                  <th className="text-center p-4 hidden sm:table-cell">Price</th>
                  <th className="text-center p-4">Quantity</th>
                  <th className="text-right p-4 hidden sm:table-cell">Total</th>
                  <th className="p-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {cart.map((item) => (
                  <tr key={`${item.id}-${item.selectedSize}`}>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 mr-4 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg?height=64&width=64"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <Link href={`/shop/${item.id}`} className="hover:underline">
                              {item.name}
                            </Link>
                          </h3>
                          {item.selectedSize && <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>}
                          <p className="text-sm text-gray-500 sm:hidden">{formatPrice(item.price)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center hidden sm:table-cell">{formatPrice(item.price)}</td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <div className="flex items-center border rounded-md">
                          <button
                            className="px-3 py-1 border-r"
                            onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            className="px-3 py-1 border-l"
                            onClick={() => updateQuantity(item, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-right font-medium hidden sm:table-cell">
                      {formatPrice(item.price * item.quantity)}
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
            <Link href="/shop">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && <p className="text-sm text-gray-500">Free shipping on orders over $100</p>}
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex gap-2">
                <Input placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                <Button variant="outline">Apply</Button>
              </div>
            </div>

            <Button className="w-full">
              Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

