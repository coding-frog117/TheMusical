import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    font-size : 36px;
    font-weight : 700;
    display : inline-block;
    vertical-align : top;
`

export default function ProductPrice(props) {
  return (
    <Span>{props.text}</Span>
  )
}
