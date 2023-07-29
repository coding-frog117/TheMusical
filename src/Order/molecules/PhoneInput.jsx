import React from 'react'
import styled from 'styled-components'
import Text from '../../Cart/atoms/Text'
import SmallBlank from '../atoms/SmallBlank'
import InlineText from '../../Common/InlineText'
import OrderInputBox from '../atoms/OrderInputBox'
import OrderInputTitle from '../atoms/OrderInputTitle'

export default function PhoneInput() {
  return (
    <OrderInputBox>
    <OrderInputTitle text = "휴대폰"/>
    <span>
    <SmallBlank />
    <InlineText text ="-" margin = "0 10px"/>
    <SmallBlank />
    <InlineText text ="-" margin = "0 10px"/>
    <SmallBlank />
    </span>
    </OrderInputBox>
  )
}
