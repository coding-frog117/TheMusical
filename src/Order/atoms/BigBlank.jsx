import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width : 800px;
    height : 40px;
    border : ${(props)=>props.theme.lightGray} 1px solid;
    display : block;
`

export default function BigBlank() {
  return (
    <Input />
  )
}
