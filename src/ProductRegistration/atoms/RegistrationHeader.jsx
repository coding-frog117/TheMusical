import React from 'react'
import styled from 'styled-components'
import {Header} from '../../Common/PageTitle'

const H2 = styled(Header)`
    width : 100%;
    text-align : initial;
    margin-top : 0;
    margin-bottom : 42px;
`    

export default function RegistrationHeader() {
  return (
    <H2>
        상품등록
    </H2>
  )
}
