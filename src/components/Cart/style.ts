import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../styles'

// Keyframes
const TranslateIn = keyframes({
  '0%': { transform: 'translateX(110%)' },
  '100%': { transform: 'translateX(0%)' },
})

const TranslateOut = keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(110%)' },
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  width: '30rem',
  height: '100vh',
  inset: 0,
  left: 'auto',
  backgroundColor: '$gray800',
  padding: '4.5rem 3rem 3rem 3rem',
  display: 'flex',
  flexDirection: 'column',

  // Animations
  '&[data-state=closed]': {
    animation: `${TranslateOut} 200ms`,
  },

  '&[data-state=open]': {
    animation: `${TranslateIn} 200ms`,
  },

  h1: {
    fontSize: '$lg',
    color: '$gray100',
  },

  '> div': {},
})

export const CloseButton = styled(Dialog.Close, {
  lineHeight: 0,
  border: 0,
  background: 'transparent',
  color: '$gray500',
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',

  '&:hover': {
    cursor: 'pointer',
    opacity: 0.8,
  },
})

export const CartItemList = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  overflow: 'auto',
  scrollBehavior: 'smooth',
  marginBottom: '7rem',

  '&::-webkit-scrollbar': {
    width: '0.25rem',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '$gray900',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '2rem',
    backgroundColor: '$green300',
  },

  '>section': {
    display: 'flex',
    gap: '1.25rem',
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: 100,
  height: 100,
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const Info = styled('article', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  h3: {
    fontSize: '$md',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '$gray300',
  },

  strong: {
    fontSize: '$md',
    color: '$gray100',
    display: 'block',
  },

  button: {
    border: 0,
    background: 'transparent',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: 'auto',

    '&:hover': {
      cursor: 'pointer',
      color: '$green300',
      transition: 'color 0.2s',
    },
  },
})

export const Summary = styled('footer', {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',

  p: {
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: 1.6,
    color: '$gray100',

    span: {
      fontSize: '$md',
    },
  },

  h4: {
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: 1.6,
    color: '$gray100',
    fontSize: '$md',

    span: {
      fontSize: '$xl',
    },
  },
})

export const CheckoutButton = styled('button', {
  padding: '1.25rem 0',
  border: 0,
  backgroundColor: '$green500',
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: 1.6,
  borderRadius: 8,
  marginTop: '3.4375rem',

  '&:hover': {
    backgroundColor: '$green300',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
})
