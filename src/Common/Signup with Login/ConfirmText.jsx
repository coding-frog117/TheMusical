import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    color : ${(props) => props.theme.mainColor};
    font-size : ${(props) => props.theme.sm};
    margin-bottom: 12px;
`
export default function ConfirmText(props) {
  return (
    <Text>{props.text}</Text>
  )
}
