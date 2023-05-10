import React from 'react'
import styled from 'styled-components'

const NameText = styled.span`
    font-size : 22px;
    color : #000;
`

export default function GoodsName(props) {
  return (
    <NameText>{props.text}</NameText>
  )
}
