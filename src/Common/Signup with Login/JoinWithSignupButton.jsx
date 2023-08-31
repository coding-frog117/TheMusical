import React from 'react'
import styled from 'styled-components'
import { CheckButton } from './Button'

const JoinWithSignupButton = styled(CheckButton)`
    width: 100%;
    font-size : ${(props)=>props.theme.md};
`

export default JoinWithSignupButton;