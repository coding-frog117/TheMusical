import React from 'react'
import IconLayout from '../atoms/IconLayout'
import CartButton from './CartButton'
import MyPageButton from './MyPageButton'

export default function Buttons() {
  return (
    <IconLayout>
        <CartButton />
        <MyPageButton />
    </IconLayout>
  )
}
