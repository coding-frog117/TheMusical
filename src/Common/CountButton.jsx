import React from 'react'
import styled from 'styled-components'

export const CountButton = styled.button`
    width : 50px;
    height : 50px;
    margin : ${(props)=>props.margin};
    font-size :20px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    background-repeat : no-repeat;
    background-position : 50% 50%;
    vertical-align : top;
`

export default CountButton;