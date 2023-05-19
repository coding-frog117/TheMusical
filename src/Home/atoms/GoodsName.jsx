import React from 'react'
import styled from 'styled-components'

const NameText = styled.span`
    margin-bottom : 10px;
    font-size : 22px;
    color : #000;
    display : block;
`

export default function GoodsName(props) {
  return (
    <NameText>{props.text}</NameText>
  )
}