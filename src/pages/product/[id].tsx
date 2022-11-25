import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  // const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius
          tenetur officiis consequuntur dolorem quasi! Iste mollitia aliquid
          blanditiis cupiditate nemo fugiat eaque incidunt repellendus quas,
          exercitationem recusandae necessitatibus nesciunt.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
