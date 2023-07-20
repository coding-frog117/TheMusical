import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    font-size : 36px;
    margin-bottom : 20px;
    display : block;
`

export default function ProductName(props) {
  return (
    <Span>{props.text}</Span>
  )
}
