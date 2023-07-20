import React from 'react'
import styled from 'styled-components'

const Span= styled.span`
    color : ${(props)=>props.theme.darkGray};
    font-size : ${((props)=>props.fontsize)};
    display : block;
    margin : 138px 0 20px;
`

export default function ProductText(props) {
  return (
    <Span fontsize = {props.fontsize}>{props.text}</Span>
  )
}
