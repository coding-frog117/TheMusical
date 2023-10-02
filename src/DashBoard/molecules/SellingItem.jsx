import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import SellingItemImg from '../atoms/SellingItemImg'
import InlineText from '../../Common/InlineText'
import EditButton from '../atoms/EditButton'
import DeleteButton from '../atoms/DeleteButton'
import SellingItemName from './SellingItemName'
import { useSelector } from 'react-redux'
import { useGet } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import ProductDeleteModal from '../organisms/ProductDeleteModal'

const Li = styled.li`
    width : 100%;
    height : 103px;
    padding : 16px 30px 17px;
    display : flex;
    align-items : center;
    border-bottom : 1px solid ${(props)=> props.theme.lightGray};
    background-color : #fff;
`

const TextSpan = styled.span`
  width : 100px;
  display : inline-block;
  text-align : center;
  margin-right : 200px;
  font-size : ${(props)=>props.theme.md};
`

export default function SellingItem() {
  const [itemList , setItemList] = useState([]);
  const [modal ,setModal] = useState(false);
  const token = useSelector((state)=>{return state.persistedReducer.user.value});
  const getFunc = useGet('seller');
  const navigator = useNavigate();

  useEffect(()=>{
    getFunc(token).then((res)=>{
      setItemList(...[res.data.results]);
  })
},[]);

  return ( 
    <ul>
    {itemList.map((item)=>(
      <Li>
        <SellingItemImg src = {item.image} onClick={()=>{navigator(`/productDetail/${item.product_id}`)}}/>
        <SellingItemName text = {item.product_name} count = {item.stock} id ={item.product_id} />
        <TextSpan>
          {item.price}
        </TextSpan>
        <EditButton text = "수정"/>
        <DeleteButton onClick = {()=>{setModal(item.product_id)}}>
          삭제
        </DeleteButton>
        {modal === item.product_id ? <ProductDeleteModal setModal = {setModal} id = {item.product_id}/> : null}
    </Li>
    )
    
    )}
    
    </ul>
  )
}
