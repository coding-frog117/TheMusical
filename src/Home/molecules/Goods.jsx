import React, { useState, useEffect } from 'react'
import GoodsImg from '../../Common/GoodsImg'
import GoodsSeller from '../atoms/GoodsSeller'
import GoodsName from '../atoms/GoodsName'
import GoodsPrice from '../atoms/GoodsPrice'
import GoodsPriceCount from '../../Common/GoodsPriceCount'
import { useGet } from '../../hooks/useFetch'

export default function Goods() {
  const [itemList , setItemList] = useState([]);
  const getFunc = useGet('products/');

  useEffect(()=>{
      getFunc().then((res)=>{
        setItemList(...[res.data.results]);
    })
  },[]);

  return (
    <>
    {itemList.map((item,index)=>(
              <li key={index}>
                <GoodsImg size= "380px" margin = "0 0 16px" src = {item.image}/>
                <GoodsSeller text = {item.store_name} />
                <GoodsName text={item.product_name} />
                <GoodsPrice text={item.price}/>
                <GoodsPriceCount />
              </li>
    ))
    }
    </>
  )
}
