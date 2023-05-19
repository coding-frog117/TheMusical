import React from 'react'
import CartOff from '../atoms/CartOff'
import IconText from '../atoms/IconText'

export default function CartButton() {
  return (
    <button>
      <CartOff />
      <IconText text="장바구니"/>
    </button>
  )
}
