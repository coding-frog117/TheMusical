import React, { useEffect, useState } from 'react'
import ProductSeller from '../atoms/ProductSeller'
import ProductName from '../atoms/ProductName'
import ProductPrice from '../atoms/ProductPrice'
import ProductPriceCount from '../atoms/ProductPriceCount'
import ProductText from '../atoms/ProductText'

export default function ProductInformation(props) {

  return (
   <>
        <ProductSeller text= {props.data.store_name} />
        <ProductName text= {props.data.product_name} />
        <ProductPrice text={props.data.price} />
        <ProductPriceCount />
        <ProductText text = {props.data.shipping_method+' / '+ props.data.shipping_fee +'원'} fontsize = {(props)=>props.theme.sm}/>
    </>
  )
}
