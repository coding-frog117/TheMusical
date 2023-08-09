import React from 'react'
import ProductImage from '../molecules/ProductImage'
import ProductInfo from './ProductInfo'
import styled from 'styled-components'

const Div = styled.div`
    display : flex;
    gap : 40px;
`

export default function ProductImgAndInfo() {
  return (
    <Div>
        <ProductImage />
        <ProductInfo />
    </Div>
  )
}
