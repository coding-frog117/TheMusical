import React from 'react'
import styled from 'styled-components'
import { CheckButton } from './Button'

const ButtonCont = styled(CheckButton)`
    width: 100%;
`

export default function JoinWithSignupButton(props) {
  return (
    <ButtonCont type="submit">
        {props.text}
    </ButtonCont>
  )
}