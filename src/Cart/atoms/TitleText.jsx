import React from 'react'
import styled from 'styled-components'
import { Span } from '../../GoodsDetail/atoms/Text'

const TextSpan = styled(Span)`
    color : #000;
    margin-left : ${(props)=>props.marginLt};
    margin-right : ${(props)=>props.marginRt};
`

export default function TitleText(props) {
  return (
    <TextSpan fontsize = {props.fontsize} marginLt = {props.marginLt} marginRt = {props.marginRt}>{props.text}</TextSpan>
  )
}
