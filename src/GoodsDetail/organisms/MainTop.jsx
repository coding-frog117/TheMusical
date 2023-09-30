import React, { useEffect, useState } from 'react'
import ProductImg from '../atoms/ProductImg'
import ProductLayout from '../atoms/ProductLayout'
import ProductInformation from '../molecules/ProductInformation'
import CountControllButton from '../../Common/CountcontrollButton'
import ProductPriceInfo from '../molecules/ProductPriceInfo'
import Buttons from '../molecules/Buttons'
import BorderLine from '../atoms/BorderLine'
import { useParams } from 'react-router-dom'
import { useGet } from '../../hooks/useFetch'

export default function MainTop() {
  const {id} = useParams();
  const getFunc = useGet(`products/${id}`);
  const [data, setData] = useState('');
  const [count, setCount] = useState(1);

  useEffect(()=>{
    getFunc().then((res)=>{
      console.log(res.data)
      return setData(res.data);
    })    
  },[])

  return (
    <ProductLayout>
        <div>
        <ProductImg data = {data}/>
        </div>
        <div>
            <ProductInformation data = {data}/>
            <BorderLine margin ="0 0 30px"/>
            <CountControllButton count = {count} setCount = {setCount}/>
            <BorderLine margin = "30px 0 0"/>
            <ProductPriceInfo data = {data} count = {count}/>
            <Buttons />
        </div>
    </ProductLayout>
  )
}
