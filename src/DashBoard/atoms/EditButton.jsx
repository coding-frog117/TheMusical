import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width : 80px;
    height : 40px;
    color : white;
    background-color : ${(props)=>props.theme.mainColor};
    border-radius : ${(props)=>props.theme.radius};
    margin-right : 60px;
    font-size : ${(props)=>props.theme.sm};
    cursor : point;

    &:hover{
      border : 2px solid ${((props)=>props.theme.darkGray)};
      color : black;
    }
`

export default function EditButton(props) {
  return (
    <Button onMouseOver={()=>{}}>{props.text}</Button>  
  )
}
