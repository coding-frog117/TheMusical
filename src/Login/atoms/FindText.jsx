import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'

const FindTextCont = styled(Link)`
    font-size : ${(props)=>props.theme.sm};
    color : #333333;
`

export default function FindText(props) {
  return (
    <BrowserRouter>
        <FindTextCont>{props.text}</FindTextCont>
    </BrowserRouter>
  )
}
