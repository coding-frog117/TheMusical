import React from 'react'
import styled from 'styled-components'
import Icon from '../../assets/icon-shopping-cart-2.svg'

const Cart = styled.img`
    width : 46px;
    height : 36px; 
    margin-right : 26px;
    position :relative;
    left : 10px;
`

export default function CartOff() {
  return (
    <Cart src={Icon}/>
  )
}