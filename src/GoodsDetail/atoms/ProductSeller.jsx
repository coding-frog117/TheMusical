import React from 'react'
import styled from 'styled-components'

const Span= styled.span`
    color : ${(props)=>props.theme.darkGray};
    margin-bottom : 16px;
    font-size : 18px;
    display : block;
`

export default function ProductSeller(props) {
  return (
    <Span>{props.text}</Span>
  )
}
