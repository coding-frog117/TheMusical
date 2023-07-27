import React, { useState } from 'react'
import CartMainBox from '../atoms/CartMainBox'
import ItemPrice from '../molecules/ItemPrice'
import ItemText from '../molecules/ItemText'
import RadioButton from '../atoms/RadioButton'
import GoodsImg from '../../Home/atoms/GoodsImg'
import ItemBox from '../atoms/ItemBox'
import CountControllButton from '../../Common/CountcontrollButton'
import DeleteImg from '../../Common/DeleteImg'

export default function CartMain(props) {
    
    return (
    <CartMainBox>
    {
     props.arr.map((_,index)=>( 
        <ItemBox key = {index}>
            <RadioButton />
            <GoodsImg size = "160px" margin = "0 36px 0 40px"/>
            <ItemText />
            <CountControllButton />
            <ItemPrice />
            <DeleteImg index = {index} arr = {props.arr} setArr = {props.setArr}/>
       </ItemBox>
      ))}
    
  </CartMainBox>
  )
}
