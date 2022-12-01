import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/image'
import { SmileySad, X } from 'phosphor-react'
import { useState } from 'react'
import { Product } from '../../../../contexts/CartContext'
import { currencyFormatter } from '../../../../utils/formatter'
import {
  CartItemList,
  CheckoutButton,
  CloseButton,
  Content,
  EmptyCart,
  ImageContainer,
  Info,
  Summary,
} from './style'

interface CartProps {
  cart: Product[]
  handleRemoveItemFromCart: (id: string) => void
}

export default function Cart({ cart, handleRemoveItemFromCart }: CartProps) {
  const quantityItemsInCart = cart.length
  const isCartEmpty = !quantityItemsInCart

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const summary = cart.reduce(
    (acc, product) => {
      acc.purchaseTotal += product.price
      return acc
    },
    {
      purchaseTotal: 0,
    }
  )

  async function handleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cart,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      // Conectar com uma ferramenta de obeservalidade (Datadog/Sentry)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <Content>
        <CloseButton>
          <X weight="bold" size={24} />
        </CloseButton>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        {isCartEmpty && (
          <EmptyCart>
            <SmileySad size={50} />
            <p>Poxa sua sacola está vazia... adicione algo aí!</p>
          </EmptyCart>
        )}

        <CartItemList>
          {cart.map((item) => {
            return (
              <section key={item.id}>
                <ImageContainer>
                  <Image src={item.imageUrl} width={100} height={100} alt="" />
                </ImageContainer>

                <Info>
                  <h3>{item.name}</h3>
                  <strong>{currencyFormatter.format(item.price)}</strong>
                  <button onClick={() => handleRemoveItemFromCart(item.id)}>
                    Remover
                  </button>
                </Info>
              </section>
            )
          })}
        </CartItemList>

        <Summary>
          <p>
            Quantidade{' '}
            <span>
              {quantityItemsInCart === 1
                ? `${quantityItemsInCart} item`
                : `${quantityItemsInCart} itens`}
            </span>
          </p>
          <h4>
            Valor total{' '}
            <span>{currencyFormatter.format(summary.purchaseTotal)}</span>
          </h4>

          <CheckoutButton
            disabled={isCreatingCheckoutSession || quantityItemsInCart <= 0}
            onClick={handleBuyProducts}
          >
            Finalizar compra
          </CheckoutButton>
        </Summary>
      </Content>
    </Dialog.Portal>
  )
}
