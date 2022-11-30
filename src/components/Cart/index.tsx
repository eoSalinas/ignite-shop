import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CartItemList,
  CheckoutButton,
  CloseButton,
  Content,
  ImageContainer,
  Info,
  Summary,
} from './style'

import Image from 'next/image'
import tshirtExemplo from '../../assets/tshirt-1.png'

export default function Cart() {
  return (
    <Dialog.Portal>
      <Content>
        <CloseButton>
          <X weight="bold" size={24} />
        </CloseButton>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CartItemList>
          <section>
            <ImageContainer>
              <Image src={tshirtExemplo} width={100} height={100} alt="" />
            </ImageContainer>

            <Info>
              <h3>Camiseta Ignite Lab</h3>
              <strong>R$ 89,90</strong>
              <button>Remover</button>
            </Info>
          </section>
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
