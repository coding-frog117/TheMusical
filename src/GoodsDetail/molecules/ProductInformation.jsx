import React from 'react'
import ProductSeller from '../atoms/ProductSeller'
import ProductName from '../atoms/ProductName'
import ProductPrice from '../atoms/ProductPrice'
import ProductPriceCount from '../atoms/ProductPriceCount'
import ProductText from '../atoms/ProductText'

export default function ProductInformation() {
  return (
    <>
        <ProductSeller text = "백엔드 글로벌" />
        <ProductName text="개구리 슬리퍼" />
        <ProductPrice text="17,500" />
        <ProductPriceCount />
        <ProductText text = "택배배송 / 무료배송" fontsize = {(props)=>props.theme.sm}/>
    </>
  )
}
