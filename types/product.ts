export interface Product {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  originalPrice?: number
  image: string
  category: string
  sizes?: string[]
  colors?: string[]
  material?: string
  rating: number
  reviewCount: number
  createdAt: string
  isFeatured?: boolean
}

