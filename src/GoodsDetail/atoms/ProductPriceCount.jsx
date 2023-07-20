import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    font-size : ${(props)=>props.theme.md};
    position : relative;
    top : 15px;
`

export default function ProductPriceCount() {
  return (
    <Span>원</Span>
  )
}
