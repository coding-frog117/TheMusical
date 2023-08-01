import React from 'react'
import styled from 'styled-components'
import PaymentText from '../molecules/PaymentText'
import Border from '../atoms/Border'

const Div = styled.div`
    display : flex;
    flex-direction : column;
    gap : 15px;
    padding : 34px 30px 20px;
`

export default function PaymentTop() {
  return (
    <Div>
        <PaymentText text1 = "-상품금액" text2 = "46500원"/>
        <PaymentText text1 = "-할인금액" text2 = "0원"/>
        <PaymentText text1 = "-배송비" text2 = "0원"/>
        <Border margin = "0 0 10px 0" />
        <PaymentText text1 = "-결제금액" text2= "46500원" color2 = {(props)=>props.theme.red} fontSize2 = {(props)=>props.theme.xLg}/>
    </Div>
  )
}
