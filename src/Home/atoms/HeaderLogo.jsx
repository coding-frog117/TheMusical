import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/Logo-hodu.png'

const HeaderLogoCont = styled.img`
    width : 124px;
    height : 38px;
    margin-right : 30px;
    position : relative;
    top : 7px;
`

export default function HeaderLogo() {
  return (
    <HeaderLogoCont src={Logo} />
  )
}
