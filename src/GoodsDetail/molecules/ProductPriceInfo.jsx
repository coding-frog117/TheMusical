import React from 'react'
import TextLayout from '../atoms/TextLayout'
import Text from '../atoms/Text'
import BoldText from '../atoms/BoldText'
import DivideBar from '../../Common/DivideBar'
import ProductPriceCount from '../atoms/ProductPriceCount'

export default function ProductPriceInfo() {
  return (
    <TextLayout>
      <div>
      <Text text = "총 상품금액" color ="#000" fontweight = "500"/>
      </div>
      
      <div>
      <Text text = "총 수량"/>
      <BoldText text = " 1" color = "#21BF48" fontsize = "18px"/>
      <Text text = "개"/>
      <DivideBar color = "#C4C4C4" margin = "11px" fontsize = "18px"/>
      <BoldText text = "17,500" color = "#21BF48" fontsize = "36px"/>
      <ProductPriceCount />

      </div>
    </TextLayout>
  )
}
