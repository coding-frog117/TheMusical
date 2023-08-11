import React from 'react'
import GrayTitleText from '../atoms/GrayTitleText'
import ProductInputSmall from '../atoms/ProductInputSmall'
import FlexInputLayout from '../atoms/FlexInputLayout'
import GrayPriceBox from '../atoms/GrayPriceBox'

export default function DeliveryFee() {
  return (
    <div>
    <GrayTitleText text = "기본 배송비"/>
    <FlexInputLayout>
        <ProductInputSmall />
        <GrayPriceBox text = "원"/>
    </FlexInputLayout>
    </div>
  )
}
