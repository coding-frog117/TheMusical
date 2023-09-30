import React from 'react'
import ProductLayout from '../atoms/ProductLayout'
import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton'
import GetButton from '../atoms/GetButton'

export default function Buttons() {
  return (
    <ProductLayout gap = "14px">
      <JoinWithSignupButton>바로 구매</JoinWithSignupButton>
      <GetButton text = "장바구니" />
    </ProductLayout>
  )
}
