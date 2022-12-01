import Link from 'next/link'
import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem', don't use gap, use spacing at useKeenSlider 'config'
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem', this bug the border in the last slide
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    '>footer': {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const PriceTag = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },
})

export const AddToCartButton = styled('button', {
  border: 0,
  lineHeight: 0,
  padding: '0.75rem',
  borderRadius: 6,
  backgroundColor: '$green500',
  color: '$white',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$green300',
    transition: 'background-color 0.2s',
  },
})
