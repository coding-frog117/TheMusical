import React, { useState } from 'react'
import styled from 'styled-components'

export const Li = styled.li`
    width : 250px;
    height : 50px;
    padding : 15px 20px;
    font-size : 16px;
    list-style : none;
    border-radius : ${(props)=>props.theme.radius};
    color : #fff;
    background-color : ${(props)=>props.backgroundColor == false ?  'white' : (props)=>props.theme.mainColor};
`

export default function Category(props) {
    const [bgColor , setBgColor] = useState(false);

    return (
        <Li backgroundColor = {bgColor} onClick={()=>{setBgColor(true);
        console.log(bgColor)}}>{props.text}</Li>
  )
}
