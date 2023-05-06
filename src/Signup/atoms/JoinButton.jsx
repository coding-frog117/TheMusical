import React from 'react'
import styled from 'styled-components'
import { CheckButton } from '../../Common/Signup with Login/Button'

const JoinButtonWidth = styled(CheckButton)`
    margin-top : 34px;
    width : 100%;
`

export default function JoinButton() {
  return (
    <JoinButtonWidth text = "로그인" />

  )
}
