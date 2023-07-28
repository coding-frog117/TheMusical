import React from 'react'
import InlineText from '../../Common/InlineText'
import OrderTotalPriceBox from '../atoms/OrderTotalPriceBox'

export default function OrderPrice() {
  return (
    <OrderTotalPriceBox>
      <InlineText text = "총 주문금액 " fontSize = {(props)=>props.theme.md} fontWeight = "500"/>
      <InlineText text = "46,500원" color = {(props)=>props.theme.red} fontSize = {(props)=>props.theme.xLg} fontWeight = {(props)=> props.theme.bold}/>
    </OrderTotalPriceBox>
  )
}
