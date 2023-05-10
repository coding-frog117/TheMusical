import React from 'react'
import { IconLayout } from '../atoms/IconLayout'
import CartOff from '../atoms/CartOff'
import IconText from '../atoms/IconText'

export default function CartButton() {
  return (
    <IconLayout>
        <CartOff />
        <IconText text="장바구니"/>
    </IconLayout>
  )
}
