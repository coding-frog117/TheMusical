import React from 'react'
import ProductImage from '../molecules/ProductImage'
import ProductInfo from './ProductInfo'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

const Div = styled.div`
    display : flex;
    gap : 40px;
`

export default function ProductImgAndInfo(props) {
  
  return (
    <Div>
        <ProductImage image = {props.image} setImage = {props.setImage}/>
        <ProductInfo />
    </Div>
  )
}
