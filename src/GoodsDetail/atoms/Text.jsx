import React from 'react'
import styled from 'styled-components'

export const Span = styled.span`
    color : ${(props) => props.color ? props.color : props.theme.darkGray};
    font-size : 18px;
    font-weight : ${(props) => props.fontweight ? props.fontweight : 400};
    vertical-align : top;
`

export default function Text(props) {
  return (
    <Span color = {props.color} fontweight = {props.fontweight}>{props.text}</Span> 
  )
}
