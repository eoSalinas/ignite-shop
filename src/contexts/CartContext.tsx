import { createContext, ReactNode, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Product[]
  addProductInCart: (item: Product) => void
  removeProductFromCart: (id: string) => void
}
export const CartContext = createContext({} as CartContextType)

export interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  function addProductInCart(item: Product) {
    const hasAlreadyThisItem = cart.some((product) => product.id === item.id)
    if (!hasAlreadyThisItem) {
      setCart((state) => [...state, item])
    } else {
      alert('Você só pode adicionar uma camiseta dessa edição')
    }
  }

  function removeProductFromCart(id: string) {
    setCart((state) => state.filter((product) => product.id !== id))
  }

  return (
    <CartContext.Provider
      value={{ cart, addProductInCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
