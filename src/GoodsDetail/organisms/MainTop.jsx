import React from 'react'
import ProductImg from '../atoms/ProductImg'
import ProductLayout from '../atoms/ProductLayout'
import ProductInformation from '../molecules/ProductInformation'
import CountControllButton from '../molecules/CountcontrollButton'
import ProductPriceInfo from '../molecules/ProductPriceInfo'
import Buttons from '../molecules/Buttons'


export default function MainTop() {
  return (
    <ProductLayout>
        <div>
        <ProductImg />
        </div>
        <div>
            <ProductInformation />
            <CountControllButton />
            <ProductPriceInfo />
            <Buttons />
        </div>
    </ProductLayout>
  )
}
