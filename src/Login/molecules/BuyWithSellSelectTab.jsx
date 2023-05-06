import React from 'react'
import SelectTabLayout from '../../Common/Signup with Login/SelectTabLayout'
import SelectTab from '../../Common/Signup with Login/SelectTab'

export default function BuyWithSellSelectTab() {
  return (
    <SelectTabLayout>
        <SelectTab text="구매회원 로그인"/>
        <SelectTab text="판매회원 로그인"/>
    </SelectTabLayout>
  )
}
