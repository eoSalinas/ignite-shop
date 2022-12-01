import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import useCart from '../../hooks/useCart'
import Cart from './components/Cart'
import { CartButton, HeaderContainer } from './style'

export default function Header() {
  const { cart } = useCart()

  const quantityItemsInCart = cart.length
  const isCartEmpty = !quantityItemsInCart

  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <CartButton>
            {!isCartEmpty && <span>{quantityItemsInCart}</span>}

            <Handbag weight="bold" size={24} />
          </CartButton>
        </Dialog.Trigger>

        <Cart />
      </Dialog.Root>
    </HeaderContainer>
  )
}
