import React from 'react'
import styled from 'styled-components'
import InlineText from '../../Common/InlineText'

const Div = styled.div`
    width : 500px;
    display : flex;
    flex-direction : column;
    gap : 10px;
    margin-left : 30px;
    margin-right : 267px;
`

export default function SellingItemName(props) {
  return (
    <Div>
        <InlineText text = {props.text} fontSize = {(props)=>props.theme.md} />
        <InlineText text = {`재고 : ${props.count}개`} color = {(props)=>props.theme.darkGray} fontSize = {(props)=>props.theme.sm}/>
    </Div>
  )
}
