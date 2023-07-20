import React from 'react'
import styled from 'styled-components'

export const SellerText = styled.span`
    display : block;
    font-size : 16px ;
    color : ${(props)=>props.theme.darkGray};
    margin-bottom : 10px;
`

export default function GoodsSeller(props) {
  return (
    <SellerText>{props.text}</SellerText>
  )
}
