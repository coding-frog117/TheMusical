import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    font-size : ${(props)=>props.theme.sm};

`

export default function PayButton() {
  return (
    <Input type = "radio" />
  )
}
