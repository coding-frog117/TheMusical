import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    font-size : ${(props)=>props.fontSize};
    color : ${(props)=>props.color};
    font-weight : ${(props)=>props.fontWeight};
    margin : ${(props)=>props.margin};
    vertical-align :top;
    width : ${(props)=>props.width};
    
`

export default function InlineText(props) {
  return (
    <Span fontSize = {props.fontSize} color = {props.color} fontWeight = {props.fontWeight} margin = {props.margin} width = {props.width} >{props.text}</Span>
  )
}
