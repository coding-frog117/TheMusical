import React from 'react'
import CartMainBox from '../../Common/CartMainBox'
import ItemPrice from '../molecules/ItemPrice'
import ItemText from '../molecules/ItemText'
import RadioButton from '../atoms/RadioButton'
import GoodsImg from '../../Home/atoms/GoodsImg'
import ItemBox from '../atoms/ItemBox'
import CountControllButton from '../../Common/CountcontrollButton'

export default function CartMain() {
  return (
    <CartMainBox>
    {[1,2,3].map(()=>( 
            <ItemBox>
                <RadioButton />
                <GoodsImg size = "160px" margin = "0 36px 0 40px"/>
                <ItemText />
                <CountControllButton />
                <ItemPrice />
            </ItemBox>
  ))}
  </CartMainBox>
  )
}
