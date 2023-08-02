import React from 'react'
import OrderInputBox from '../atoms/OrderInputBox'
import OrderInputTitle from '../atoms/OrderInputTitle'
import BigBlank from '../atoms/BigBlank'

export default function DeliveryMessage() {
  return (
    <OrderInputBox>
      <OrderInputTitle text = "배송 메세지" />
      <BigBlank />
    </OrderInputBox>
  )
}
