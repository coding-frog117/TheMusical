import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
    font-size : 12px;
    color : ${(props)=>props.theme.darkGray};
    display : block;

`
export default function IconText(props) {
  return (
    <Text>{props.text}</Text>
  )
}
