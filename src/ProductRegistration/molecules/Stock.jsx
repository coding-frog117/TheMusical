import React from 'react'
import GrayTitleText from '../atoms/GrayTitleText'
import FlexInputLayout from '../atoms/FlexInputLayout'
import ProductInputSmall from '../atoms/ProductInputSmall'
import GrayPriceBox from '../atoms/GrayPriceBox'

export default function Stock() {
  return (
    <div>
    <GrayTitleText text = "재고"/>
    <FlexInputLayout>
        <ProductInputSmall />
        <GrayPriceBox text = "개"/>
    </FlexInputLayout>
    </div>
  )
}
