import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import TextLayout from '../atoms/TextLayout'
import Text from '../atoms/Text'
import BoldText from '../atoms/BoldText'
import DivideBar from '../../Common/DivideBar'
import ProductPriceCount from '../atoms/ProductPriceCount'
import styled from 'styled-components'

const Div = styled.div`
  display : flex;
`

export default function ProductPriceInfo(props) {

  return (
    <TextLayout>
      <Text text = "총 상품금액" color ="#000" fontweight = "500"/>
      
      <Div>
        <Text text = "총 수량"/>
        <BoldText text ={props.count} color = "#21BF48" fontsize = "18px"/>
        <Text text = "개"/>
        <DivideBar color = "#C4C4C4" margin = "11px" fontsize = "18px"/>
        <BoldText text ={props.data.price * props.count} color = "#21BF48" fontsize = "36px"/>
        <ProductPriceCount />
      </Div>
    </TextLayout>
  )
}
