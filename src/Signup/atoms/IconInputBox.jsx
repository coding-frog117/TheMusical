import React from 'react'
import styled from 'styled-components'
import IconCheckOff from '../../assets/icon-check-off.svg'

export const  IconInputBox = styled.input`
    font-size: ${(props) => props.theme.sm};
    border : 1px solid #C4C4C4;
    border-radius : ${(props)=> props.theme.radius};
    width : 100%;
    height : 54px;
    margin : 10px 0;
    padding-right : 12%;
    background: url(${IconCheckOff});
    background-repeat : no-repeat;
    background-color: #fff;
    background-position : 96% center;
`

export default IconInputBox;
