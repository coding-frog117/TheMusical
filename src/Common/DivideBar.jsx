import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    color : ${(props) => props.color};
    margin : 0 ${(props)=> props.margin};
    font-size : ${(props)=>props.fontsize};
    vertical-align : top;
`

export default function DivideBar(props) {
  return (
    <Span color = {props.color} margin = {props.margin} fontsize = {props.fontsize}>|</Span>
  )
}
