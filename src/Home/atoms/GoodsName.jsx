import React from 'react'
import styled from 'styled-components'

const NameText = styled.span`
    margin-bottom : 10px;
    font-size :18px;
    display : block;
`

export default function GoodsName(props) {
  return (
    <NameText fontsize = {props.fontsize}>{props.text}</NameText>
  )
}