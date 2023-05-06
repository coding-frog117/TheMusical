import React from 'react'
import styled from 'styled-components'

const TextBox = styled.div`
    width : 100%;
    font-size : ${(props)=>props.theme.sm};
    color : #EB5757;
    margin : 26px 0;
`

export default function WarningText(props) {
  return (
    <TextBox>{props.text}</TextBox>
  )
}
