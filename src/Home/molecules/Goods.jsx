import React, { useState, useEffect } from 'react'
import GoodsImg from '../../Common/GoodsImg'
import GoodsSeller from '../atoms/GoodsSeller'
import GoodsName from '../atoms/GoodsName'
import GoodsPrice from '../atoms/GoodsPrice'
import GoodsPriceCount from '../../Common/GoodsPriceCount'
import { useGet } from '../../hooks/useFetch'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Li = styled.li`
  cursor : pointer;
`

export default function Goods() {
  const [itemList , setItemList] = useState([]);
  const token = useSelector((state)=>{return state.persistedReducer.user.value});
  const getFunc = useGet('seller');
  const navigator = useNavigate();

  useEffect(()=>{
      getFunc(token).then((res)=>{
        setItemList(...[res.data.results]);
    })
  },[]);

  return (
    <>
    {itemList.map((item)=>(
              <Li 
              key={item.product_id} 
              onClick={()=>{navigator(`/productDetail/${item.product_id}`)}}>
                <GoodsImg size= "380px" margin = "0 0 16px" src = {item.image}/>
                <GoodsSeller text = {item.store_name} />
                <GoodsName text={item.product_name} />
                <GoodsPrice text={item.price}/>
                <GoodsPriceCount />
              </Li>
    ))
    }
    </>
  )
}
