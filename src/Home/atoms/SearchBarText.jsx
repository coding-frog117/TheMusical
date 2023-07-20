import React from 'react'
import styled from 'styled-components'

const Text = styled.input`
    font-size : ${(props)=>props.theme.sm};
    color : ${(props)=>props.theme.darkGray};
    outline : none;
    margin-left : 22px;
    height : 42px;
    line-height : 42px;
`
export default function SearchBarText(props) {
  return (
    <Text placeholder={props.text}/>
  )
}
