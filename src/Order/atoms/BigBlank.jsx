import React from 'react'
import styled from 'styled-components'
import MiddleBlank from './MiddleBlank'

const Input = styled.input`
    width : 800px;
    height : 40px;
    border : ${(props)=>props.theme.lightGray} 1px solid;
`

export default function BigBlank() {
  return (
    <Input />
  )
}
