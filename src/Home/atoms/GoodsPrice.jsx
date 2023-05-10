import React from 'react'
import styled from 'styled-components'

const PriceText = styled.span`
    font-size : 24px;
    font-weight : 700;
`

export default function GoodsPrice(props) {
  return (
    <PriceText>{props.text}</PriceText>
  )
}
