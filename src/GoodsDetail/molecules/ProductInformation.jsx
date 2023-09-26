import React, { useEffect, useState } from 'react'
import ProductSeller from '../atoms/ProductSeller'
import ProductName from '../atoms/ProductName'
import ProductPrice from '../atoms/ProductPrice'
import ProductPriceCount from '../atoms/ProductPriceCount'
import ProductText from '../atoms/ProductText'
import { useParams } from 'react-router-dom'
import { useGet } from '../../hooks/useFetch'

export default function ProductInformation() {
  const {id} = useParams();
  const getFunc = useGet(`products/${id}`);
  const [data, setData] = useState('');

  useEffect(()=>{
    getFunc(id).then((res)=>{
      console.log(res.data)
      return setData(res.data);
    })    
  },[])

  return (
    <>
        <ProductSeller text= {data.store_name} />
        <ProductName text= {data.product_name} />
        <ProductPrice text={data.price} />
        <ProductPriceCount />
        <ProductText text = {data.shipping_method
} fontsize = {(props)=>props.theme.sm}/>
    </>
  )
}
