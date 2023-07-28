import React from 'react'
import OrderItemText from '../molecules/OrderItemText'
import GoodsImg from '../../Common/GoodsImg'
import OrderPriceBox from '../atoms/OrderPriceBox'
import InlineText from '../../Common/InlineText'
import OrderListMainBox from '../atoms/OrderListMainBox'
import OrderListBox from '../atoms/OrderListBox'

export default function OrderList() {
    const arr2 = [1,2,3];

    return (
    <OrderListBox>
    {
        arr2.map((a,i)=>(
        
        <OrderListMainBox>
            <GoodsImg size = "104px" margin = "0 36px 0 0"/>
            <OrderItemText />
            <OrderPriceBox>
                <InlineText text= "-"/>
            </OrderPriceBox>

            <OrderPriceBox>
                <InlineText text= "2500원" color = {(props)=>props.theme.darkGray} fontSize = {(props)=>props.theme.md}/>
            </OrderPriceBox>

            <OrderPriceBox>
                <InlineText text= "17,500원" fontWeight = {(props)=>props.theme.bold} fontSize = {(props)=>props.theme.md}/>
            </OrderPriceBox>
        </OrderListMainBox>
    
  ))}
  </OrderListBox>
  )
}
