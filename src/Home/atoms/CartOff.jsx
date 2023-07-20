import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../../assets/icon-shopping-cart.svg'
import IconOn from '../../assets/icon-shopping-cart-2.svg'

const Cart = styled.img`
    width : 46px;
    height : 36px; 
    position : relative;
    right : 2px;
`

export default function CartOff() {
  const [IconSrc, setIconSrc] = useState(false);

  return (
    <Cart src={IconSrc === false ? Icon : IconOn} onClick={()=>{setIconSrc(IconSrc === false ? true : false)}}/>
  )
}