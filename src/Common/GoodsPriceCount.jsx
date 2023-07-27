import React from 'react'
import styled from 'styled-components'

const CountText = styled.span`
    font-size : ${(props)=>props.theme.sm};
    color : ${(props)=>props.color};
`

export default function GoodsPriceCount(props) {
  return (
    <CountText color = {props.color} fontSize= {props.fontSize}>원</CountText>
  )
}
