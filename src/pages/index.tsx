import Image from 'next/image'

import camiseta1 from '../assets/camisetas/shirt1.png'
import camiseta2 from '../assets/camisetas/shirt2.png'
import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product href="">
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product href="">
        <Image src={camiseta2} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
