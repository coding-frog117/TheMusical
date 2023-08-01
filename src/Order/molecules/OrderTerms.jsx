import React from 'react'
import {TermsInp} from '../../Common/Terms'
import InlineText from '../../Common/InlineText'
import styled from 'styled-components'
import AddressLayout from '../atoms/FlexLayout'

const Div = styled(AddressLayout)`
    margin : 0 0 30px;
`

export default function OrderTerms() {
  return (
    <Div>
        <TermsInp />
        <InlineText text = "주문 내용을 확인하였고 동의합니다." fontSize = "16px" />
    </Div>
  )
}
