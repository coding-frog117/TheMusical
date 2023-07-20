import React from 'react'
import styled from 'styled-components'
import { CheckButton } from '../../Common/Signup with Login/Button'

const Button = styled(CheckButton)`
    height : 54px;
    flex-shrink : 0;
    margin : 10px 0;
`
export default function ConfirmButton(props) {
  return (
    <Button>{props.text}</Button>
  )
}
