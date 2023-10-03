import React from 'react'
import styled from 'styled-components'

const Span = styled.div`
    display : block;
    font-size : ${(props)=>props.theme.sm};
    text-align : center;
    margin-top :${(props)=>props.mgTop};
`

export default function ModalText(props){
    return(
        <Span mgTop = {props.mgTop}>{props.text}</Span>
    )
}