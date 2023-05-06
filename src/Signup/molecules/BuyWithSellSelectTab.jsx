import React from 'react'
import SelectTabLayout from '../../Common/Signup with Login/SelectTabLayout'
import BuyingSelectTab from '../atoms/BuyingSelectTab'
import SellingSelectTab from '../atoms/SellingSelectTab'

export default function BuyWithSellSelectTab() {
  return (
    <SelectTabLayout>
        <BuyingSelectTab />
        <SellingSelectTab />
    </SelectTabLayout>
  )
}
