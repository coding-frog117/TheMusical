import React from 'react'
import ProductImg from '../atoms/ProductImg'
import ProductLayout from '../atoms/ProductLayout'
import ProductInformation from '../molecules/ProductInformation'
import CountControllButton from '../../Common/CountcontrollButton'
import ProductPriceInfo from '../molecules/ProductPriceInfo'
import Buttons from '../molecules/Buttons'
import BorderLine from '../atoms/BorderLine'


export default function MainTop() {
  return (
    <ProductLayout>
        <div>
        <ProductImg />
        </div>
        <div>
            <ProductInformation />
            <BorderLine margin ="0 0 30px"/>
            <CountControllButton />
            <BorderLine margin = "30px 0 0"/>
            <ProductPriceInfo />
            <Buttons />
        </div>
    </ProductLayout>
  )
}
