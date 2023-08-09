import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width : 1720px;
    height : 700px;
    background-color : ${(props)=>props.theme.whiteGray};
    text-align : center;
    color : ${(props)=>props.theme.lightGray};
    font-size : 48px;
    padding : 544px 320px;
`
export default function EditorBox() {
  return (
    <Div>에디터영역</Div>
  )
}
