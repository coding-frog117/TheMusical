import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width : 334px;
    height : 40px;
    border : ${(props)=>props.theme.lightGray} 1px solid;
`

export default function MiddleBlank(props) {
  return (
    <Input />
  )
}
