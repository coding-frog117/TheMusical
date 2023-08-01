import React from 'react'
import OrderInputBox from '../atoms/OrderInputBox'
import MiddleBlank from '../atoms/MiddleBlank'
import OrderInputTitle from '../atoms/OrderInputTitle'

export default function OrderNameInput() {
  return (
    <OrderInputBox>
        <OrderInputTitle text = "이름"/>
        <MiddleBlank />
    </OrderInputBox>
  )
}