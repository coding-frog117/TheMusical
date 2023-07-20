import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
    width : 50px;
    height : 50px;
    margin : ${(props)=>props.margin};
    font-size :20px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    background-image : url(${(props)=>props.bgImg});
    background-repeat : no-repeat;
    background-position : 50% 50%;
    vertical-align : top;
`

export default function CountButton(props) {
  return (
    <Button bgImg = {props.bgImg} margin = {props.margin}/>
  )
}
