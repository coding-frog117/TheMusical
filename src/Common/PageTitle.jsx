import React from 'react'
import styled from 'styled-components'

export const Header = styled.h2`
    font-size : ${(props)=>props.theme.big};
    font-weight : ${(props)=>props.theme.bold};
    text-align : center;
    margin-top : 54px;
    margin-bottom : 52px;
`

export default function PageTitle(props) {
  return (
    <Header>{props.text}</Header>
  )
}
