import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    font-size : ${(props)=>props.fontSize};
    color : ${(props)=>props.color};
    font-weight : ${(props)=>props.fontWeight};
    display : block;
    margin : ${(props)=>props.margin};
`
export default function Text(props) {
  return (
    <Span fontSize={props.fontSize} color = {props.color} fontWeight={props.fontWeight} margin= {props.margin}>{props.text} </Span>
  )
}
