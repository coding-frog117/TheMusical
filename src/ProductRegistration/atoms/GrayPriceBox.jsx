import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
    display : inline-block;
    width : 54px;
    height : 54px;
    background-color : ${(props)=>props.theme.lightGray};
    color : #fff;
    font-size : ${(props)=>props.theme.sm};
    text-align : center;
    padding : 18px;
    border-radius : 0 5px 5px 0;
    border : 1px solid ${(props)=>props.theme.lightGray};
`

export default function GrayPriceBox(props) {
  return (
    <Span>{props.text}</Span> 
  )
}
