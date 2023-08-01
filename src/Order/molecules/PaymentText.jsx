import React from 'react'
import styled from 'styled-components'
import InlineText from '../../Common/InlineText'

const Span = styled.span`
    display : flex;
    justify-content : space-between;
`
export default function PaymentText(props) {
  return (
    <Span>
        <InlineText text = {props.text1} fontSize = {(props)=>props.theme.sm}/> 
        <InlineText text = {props.text2} fontSize = {props.fontSize2 ? props.fontSize2 : (props)=>props.theme.sm} fontWeight={(props)=>props.theme.bold} color = {props.color2}/> 
    </Span>
  )
}
