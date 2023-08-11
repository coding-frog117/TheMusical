import React from 'react'
import ProductImg from '../atoms/ProductImg'
import ImgButton from '../atoms/ImgButton'
import InlineText from '../../Common/InlineText'
import GrayTitleText from '../atoms/GrayTitleText'

export default function ProductImage() {
  return (
    <div>
    <GrayTitleText text = "상품 이미지"/>
    <ProductImg>
      <ImgButton />
    </ProductImg>
    </div>
  )
}
