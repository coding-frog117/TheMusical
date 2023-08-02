import React, { useState } from 'react'
import styled from 'styled-components'

export const Li = styled.li`
    width : 250px;
    height : 50px;
    padding : 15px 20px;
    font-size : 16px;
    list-style : none
    background-color : ${(props)=>props.backGroundColor}
`

export default function Category(props) {
    return (
        <Li backGroundColor = {props.bgColor} onClick={props.setBgColor("#21BF48")}>{props.text}</Li>
  )
}
