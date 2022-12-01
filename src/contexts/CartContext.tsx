import { createContext, ReactNode, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Product[]
  addProductInCart: (item: Product) => void
}
export const CartContext = createContext({} as CartContextType)

interface Product {
  id: string
  name: string
  price: string
  imageUrl: string
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  function addProductInCart(item: Product) {
    setCart((state) => [...state, item])
  }

  return (
    <CartContext.Provider value={{ cart, addProductInCart }}>
      {children}
    </CartContext.Provider>
  )
}
