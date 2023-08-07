import React from 'react'
import styled from 'styled-components'
import {Header} from '../../Common/PageTitle'

const H2 = styled(Header)`
    margin-top : 0;
    margin-bottom : 42px;
    text-align : initial;
    margin : 0 auto;
`    

export default function RegistrationHeader() {
  return (
    <H2>
        상품등록
    </H2>
  )
}
