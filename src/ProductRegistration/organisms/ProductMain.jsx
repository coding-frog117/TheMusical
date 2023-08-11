import React from 'react'
import ProductImgAndInfo from './ProductImgAndInfo'
import ProductDetail from '../molecules/ProductDetail'
import SaveAndCancelBtn from '../molecules/SaveAndCancelBtn'
import styled from 'styled-components'

const Section = styled.section`
  margin : 0 auto;
`
export default function ProductMain() {
  return (
    <Section>
        <ProductImgAndInfo />
        <ProductDetail />
        <SaveAndCancelBtn />
    </Section>
  )
}
