import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CartButton = styled('button', {
  lineHeight: '0', // Make button height the same as icon
  padding: '0.75rem',
  border: 0,
  borderRadius: 6,
  backgroundColor: '$gray800',
  color: '$gray500',

  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  },

  span: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: '$green500',
    borderRadius: 9999,
    marginTop: 'calc(-27px - -7px)',
    marginLeft: 'calc(27px - 7px)', // (heigh + outline) - difference from radio(7px)
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: '3px solid $gray900',
    fontWeight: 'bold',
  },
})
