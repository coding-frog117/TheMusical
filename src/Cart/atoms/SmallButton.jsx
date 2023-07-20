import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width : 130px;
    height : ${(props)=>props.height};
    color : #fff;
    background-color : ${(props)=>props.bgColor};
    font-size : ${(props)=>props.theme.sm};
    font-weight : 500;
    border-radius: ${(props)=>props.theme.radius};
`
export default function SmallButton(props) {
  return (
    <Button height = {props.height} bgColor = {props.bgColor}>{props.text}</Button>
  )
}
