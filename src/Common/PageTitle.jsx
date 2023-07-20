import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
    font-size : 36px;
    font-weight : 700;
    text-align : center;
    margin-top : 54px;
    margin-bottom : 52px;
`

export default function PageTitle(props) {
  return (
    <Header>{props.text}</Header>
  )
}
