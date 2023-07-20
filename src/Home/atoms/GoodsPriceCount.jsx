import React from 'react'
import styled from 'styled-components'

const CountText = styled.span`
    font-size : ${(props)=>props.theme.sm};
`

export default function GoodsPriceCount() {
  return (
    <CountText>원</CountText>
  )
}
