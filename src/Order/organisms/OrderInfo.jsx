import React from 'react'
import OrderTItleBox from '../molecules/OrderTItleBox'
import OrderList from './OrderList'
import OrderTotalPrice from '../molecules/OrderTotalPrice'

export default function OrderInfo() {
  return (
    <>
    <OrderTItleBox />
    <OrderList />
    <OrderTotalPrice />
    </>
  )
}
