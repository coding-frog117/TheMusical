import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    font-weight : 700;
    color : ${(props)=> props.color};
    font-size : ${(props)=>props.fontsize};
`

export default function BoldText(props) {
  return (
    <Span color = {props.color} fontsize = {props.fontsize} fontweight = {props.fontweight}>{props.text}</Span>
  )
}
