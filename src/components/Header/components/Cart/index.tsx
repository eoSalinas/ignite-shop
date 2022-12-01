import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { Product } from '../../../../contexts/CartContext'
import {
  CartItemList,
  CheckoutButton,
  CloseButton,
  Content,
  ImageContainer,
  Info,
  Summary,
} from './style'

interface CartProps {
  cart: Product[]
  handleRemoveItemFromCart: (id: string) => void
}

export default function Cart({ cart, handleRemoveItemFromCart }: CartProps) {
  return (
    <Dialog.Portal>
      <Content>
        <CloseButton>
          <X weight="bold" size={24} />
        </CloseButton>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CartItemList>
          {cart.map((item) => {
            return (
              <section key={item.id}>
                <ImageContainer>
                  <Image src={item.imageUrl} width={100} height={100} alt="" />
                </ImageContainer>

                <Info>
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
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
            Quantidade <span>3 itens</span>
          </p>
          <h4>
            Valor total <span>R$ 270,00</span>
          </h4>

          <CheckoutButton>Finalizar compra</CheckoutButton>
        </Summary>
      </Content>
    </Dialog.Portal>
  )
}
