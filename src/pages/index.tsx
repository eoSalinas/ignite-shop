import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  border: 0,
  borderRadius: 4,
  padding: '4px 8px',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.9)',
  },
})

export default function Home() {
  return <Button>Hello World</Button>
}
