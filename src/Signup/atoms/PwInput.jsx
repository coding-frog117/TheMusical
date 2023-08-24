import React from 'react'
import styled from 'styled-components'

export const PwInput = styled.input`
    width : 436px;
    height : 52px;
    line-height : 52px;
    font-size: ${(props) => props.theme.sm};
`

export default PwInput;