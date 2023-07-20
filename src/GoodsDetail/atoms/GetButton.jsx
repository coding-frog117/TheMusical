import React from 'react'
import styled from 'styled-components'
import { CheckButton } from '../../Common/Signup with Login/Button'

const Button = styled(CheckButton)`
    width : 200px;
    height : 60px;
    flex-shrink : 0;
    background-color : ${(props)=>props.theme.darkGray};
`

export default function GetButton(props) {
  return (
    <Button>{props.text}</Button>
  )
}
