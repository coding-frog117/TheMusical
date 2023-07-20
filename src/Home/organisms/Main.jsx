import React from 'react'
import GoodsLayout from '../atoms/GoodsLayout'
import Goods from '../molecules/Goods'
import { HomeLayout } from '../../Common/HomeLayout'
export default function Main() {
  return (
    <HomeLayout>
      <GoodsLayout>
        <Goods />
      </GoodsLayout>
    </HomeLayout>
  )
}
