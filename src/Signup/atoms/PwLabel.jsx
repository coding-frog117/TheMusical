import React from 'react'
import styled from 'styled-components'

const PwLabel = styled.label`
    display : block;
    width : 100%;
    height : 54px;
    border : 1px solid #C4C4C4;
    border-radius : ${(props)=> props.theme.radius};
    margin : 10px 0;
`

export default PwLabel;