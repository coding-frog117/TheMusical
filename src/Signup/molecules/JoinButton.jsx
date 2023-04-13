import React from 'react'
import styled from 'styled-components'
import { CheckButton } from '../../Common/Signup with Login/Button'

const ButtonCont = styled(CheckButton)`
    width: 100%;
`

export default function JoinButton(props) {
  return (
    <ButtonCont type="submit">
        {props.text}
    </ButtonCont>
  )
}