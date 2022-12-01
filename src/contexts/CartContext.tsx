import { createContext, ReactNode, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Product[]
}
export const CartContext = createContext({} as CartContextType)

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  )
}
