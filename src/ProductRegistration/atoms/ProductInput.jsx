import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width : ${(props)=>props.width};
    height : 54px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    border-radius : ${(props)=>props.theme.radius};
    font-size : ${(props)=>props.theme.sm};
`

export default function ProductInput(props) {
  return (
    <Input width={props.width} radius={props.radius} onChange={(e)=>{props.setCount(e.target.value.length)}}/>
  )
}
