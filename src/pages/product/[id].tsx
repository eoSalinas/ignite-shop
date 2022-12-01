import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'
import useCart from '../../hooks/useCart'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { currencyFormatter } from '../../utils/formatter'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    priceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductInCart } = useCart()

  function handlePutItInTheBag() {
    const newItem = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      priceId: product.priceId,
    }

    addProductInCart(newItem)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{currencyFormatter.format(product.price)}</span>
          <p>{product.description}</p>

          <button onClick={handlePutItInTheBag}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_MqqTU3XSD2VT0Z' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  // Estava dando erro no params da const productId
  // Poderiamos resolver fazendo essa validação (if abaixo) ou colocando stric: false no tsconfig.json
  if (!params) {
    return {
      notFound: true,
    }
  }

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: price.unit_amount! / 100,
        priceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
