import React from 'react'
import styled from 'styled-components'

const InputWidth = styled.input`
    width : 100%;
    height : 60px;
    border-bottom : 1px solid #C4C4C4;
    color : ${(props)=>props.theme.darkgray};
    font-size : ${(props)=>props.theme.sm};
`

export default function InputBox(props) {
  return (
    <InputWidth placeholder = {props.text}/>
  )
}
