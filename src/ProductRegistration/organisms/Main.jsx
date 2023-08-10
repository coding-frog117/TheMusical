import React from 'react'
import styled from 'styled-components'
import ProductMain from './ProductMain'
import Caution from '../molecules/Caution'

const Div = styled.main`
    width : 100%;
    margin : 0 auto;
    display : flex;
    gap : 80px;
`

export default function Main() {
  return (
    <Div>
        <Caution />
        <ProductMain />
    </Div>
  )
}
