import React from 'react'
import styled from 'styled-components'

const Address = styled.address` 
    font-size : 14px;
`

export default function FooterText(props) {
  return (
    <Address>{props.text}</Address>
  )
}
