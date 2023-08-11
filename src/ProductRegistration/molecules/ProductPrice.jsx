import React from 'react'
import GrayPriceBox from '../atoms/GrayPriceBox'
import FlexInputLayout from '../atoms/FlexInputLayout'
import ProductInputSmall from '../atoms/ProductInputSmall'
import GrayTitleText from '../atoms/GrayTitleText'

export default function ProductPrice() {
  return (
    <div>
    <GrayTitleText text = "판매가"/>
    <FlexInputLayout>
        <ProductInputSmall />
        <GrayPriceBox text = "원"/>
    </FlexInputLayout>
    </div>
  )
}
