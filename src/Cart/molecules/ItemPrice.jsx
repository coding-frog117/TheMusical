import React from 'react'
import ItemPriceBox from '../atoms/ItemPriceBox'
import PriceText from '../atoms/PriceText'
import SmallButton from '../atoms/SmallButton'

export default function ItemPrice() {
  return (
    <ItemPriceBox>
        <PriceText text = "17,500원" />
        <SmallButton text = "주문하기" height = "40px" bgColor = {(props)=>props.theme.mainColor} />
    </ItemPriceBox>
  )
}
