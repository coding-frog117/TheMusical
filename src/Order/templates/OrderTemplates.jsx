import React from 'react'
import { HomeLayout } from '../../Common/HomeLayout'
import PageTitle from '../../Common/PageTitle'
import OrderInfo from '../organisms/OrderInfo'
import DeliveryInfo from '../organisms/DeliveryInfo'
import Payment from '../organisms/Payment'

export default function OrderTemplates() {
  return (
    <HomeLayout>
        <PageTitle text = "주문/결제하기"/>
        <OrderInfo />
        <DeliveryInfo />
        <Payment />
    </HomeLayout>
  )
}
