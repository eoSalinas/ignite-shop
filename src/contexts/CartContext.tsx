import { createContext, ReactNode } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {}

export const CartContext = createContext({} as CartContextType)

export default function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
