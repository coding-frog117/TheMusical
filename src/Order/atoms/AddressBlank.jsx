import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width : 170px;
    height : 40px;
    border : ${(props)=>props.theme.lightGray} 1px solid;
    margin-right : 10px
`

export default function AddressBlank() {
  return (
    <Input />
  )
}
