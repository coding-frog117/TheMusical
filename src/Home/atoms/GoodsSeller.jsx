import React from 'react'
import styled from 'styled-components'

const SellerText = styled.span`
    display : block;
    font-size : ${(props)=>props.theme.sm};
    color : ${(props)=>props.theme.darkGray};
    margin-bottom : 10px;
`
export default function GoodsSeller(props) {
  return (
    <SellerText>{props.text}</SellerText>
  )
}
