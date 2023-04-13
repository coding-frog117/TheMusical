import React from 'react'
import styled from 'styled-components'

const InputWidth = styled.input`
    font-size: ${(props) => props.theme.sm};
    border : 1px solid #C4C4C4;
    border-radius : ${(props)=> props.theme.radius};
    width: 100%;
    height : 54px;
    margin : 10px 0;
    background-image : ${(props)=>props.src};
`
export default function InputBox(props) {
  
  return (
    <InputWidth />
  )
}