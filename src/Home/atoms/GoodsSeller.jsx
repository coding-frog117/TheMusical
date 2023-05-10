import React from 'react'
import styled from 'styled-components'

const SellerText = styled.span`
    font-size : ${(props)=>props.theme.sm};
    color : ${(props)=>props.theme.darkGray};

`
export default function GoodsSeller(props) {
  return (
    <SellerText>{props.text}</SellerText>
  )
}
