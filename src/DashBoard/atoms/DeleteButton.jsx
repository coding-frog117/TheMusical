import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width : 80px;
    height : 40px;
    border-radius : ${(props)=>props.theme.radius};
    border : 1px solid ${(props)=>props.theme.lightGray};
    font-size : ${(props)=>props.theme.sm};
    cursor : point;

    &:hover{
      border : 2px solid ${((props)=>props.theme.darkGray)};
      color : black;
    }

`
export default function DeleteButton(props) {
  return (
    <Button>{props.text}</Button>
  )
}
