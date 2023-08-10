import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width : 100%;
    height : 700px;
    background-color : ${(props)=>props.theme.whiteGray};
    text-align : center;
    color : ${(props)=>props.theme.lightGray};
    font-size : 48px;
    padding : 320px 544px;
`
export default function EditorBox(props) {
  return (
    <Div>{props.text}</Div>
  )
}
