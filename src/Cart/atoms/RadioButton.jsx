import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    appearance : none;
    border : 2px solid ${(props)=>props.theme.mainColor};
    border-radius : 50%;
    width : 20px;
    height : 20px;
    vertical-align : top;
    

    &:focus-visible{
        outline-offset: 2px;
        outline: 2px dotted ${(props)=>props.theme.mainColor};
    }

    &:hover{
        cursor: pointer;
        box-shadow : 0 0 0 4px lightgray;
    }

    &:checked{
        outline : 2px solid ${(props)=>props.theme.mainColor};
        border : 3px solid #fff;
        background-color : ${(props)=>props.theme.mainColor};
    }
`

export default function RadioButton(props) {
  return (
    <label id = "check">
        <Input type = "radio" for = "check" />
    </label>
  )
}
