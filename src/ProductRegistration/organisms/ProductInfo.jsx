import React from 'react'
import ProductName from '../molecules/ProductName'
import ProductPrice from '../molecules/ProductPrice'
import ProductDetail from '../molecules/ProductDetail'
import DeliveryFee from '../molecules/DeliveryFee'
import DeliveryOptions from '../molecules/DeliveryOptions'
import Stock from '../molecules/Stock'
import styled from 'styled-components'

const Div = styled.div`
    display : flex;
    flex-direction : column;
    gap : 16px;
`

export default function ProductInfo() {
  return (
    <Div>
    <ProductName />
    <ProductPrice />
    <DeliveryOptions />
    <DeliveryFee />
    <Stock />
    </Div>
  )
}
