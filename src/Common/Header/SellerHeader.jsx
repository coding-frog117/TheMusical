import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    width : 100%;
    height : 90px;
    padding : 26px 0;
    font-size : 30px;
    font-weight : 500;
    box-shadow : 4px 0 5px gray;
`

export default function SellerHeader() {
  return (
    <H1>판매자 센터</H1>
  )
}
