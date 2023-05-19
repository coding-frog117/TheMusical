import React from 'react'
import styled from 'styled-components'

const Address = styled.address` 
    font-size : 14px;
    font-weight : ${(props) => props.theme.bold};
`
export default function FooterTextBold(props) {
  return (
    <Address>{props.text}</Address>
  )
}
