import React from 'react'
import styled from 'styled-components'

const Address = styled.address`
    color : ${(props)=>props.theme.darkGray};
    font-size : 14px;
    
`

export default function FooterBottomText(props) {
  return (
    <Address>{props.text}</Address>
  )
}
