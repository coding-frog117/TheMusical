import React from 'react'
import MiddleBlank from '../atoms/MiddleBlank'
import OrderInputTitle from '../atoms/OrderInputTitle'
import OrderInputBox from '../atoms/OrderInputBox'

export default function OrderEmailInput() {
  return (
    <OrderInputBox>
        <OrderInputTitle text = "이메일"/>
        <MiddleBlank />
    </OrderInputBox>
  )
}
