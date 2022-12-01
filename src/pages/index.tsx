import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { MouseEvent } from 'react'
import Stripe from 'stripe'
import { Product } from '../contexts/CartContext'
import useCart from '../hooks/useCart'
import { stripe } from '../lib/stripe'
import {
  AddToCartButton,
  HomeContainer,
  PriceTag,
  ProductContainer,
} from '../styles/pages/home'
import { currencyFormatter } from '../utils/formatter'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    priceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addProductInCart } = useCart()
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  function handleAddItemInCart(
    e: MouseEvent<HTMLButtonElement>,
    product: Product
  ) {
    e.preventDefault()
    addProductInCart(product)
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <ProductContainer
              key={product.id}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <PriceTag>
                <div>
                  <strong>{product.name}</strong>
                  <span>{currencyFormatter.format(product.price)}</span>
                </div>
                <AddToCartButton
                  onClick={(e) => handleAddItemInCart(e, product)}
                >
                  <Handbag weight="bold" size={32} />
                </AddToCartButton>
              </PriceTag>
            </ProductContainer>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
      priceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
