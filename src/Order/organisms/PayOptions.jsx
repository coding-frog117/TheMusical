import React from 'react'
import Text from '../../Cart/atoms/Text'
import PaymentList from './PaymentList'

export default function PayOptions() {
  return (
   <span>
    <Text text="결제수단" fontSize= {(props)=>props.theme.xLg} fontWeight = "500" />
    <PaymentList />
   </span>
  )
}
