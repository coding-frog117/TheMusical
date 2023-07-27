import React,{useState} from 'react'
import { HomeLayout } from '../../Common/HomeLayout'
import PageTitle from '../../Common/PageTitle'
import TitleBox from '../molecules/TitleBox'
import CartMain from '../organisms/CartMain'
import PriceBox from '../molecules/PriceBox'
import BigButton from '../atoms/BigButton'
import EmptyCart from '../atoms/EmptyCart'

export default function CartTemplates() {
    let [arr,setArr] = useState([1,2,3,4,5]);

  return (
    <HomeLayout>
      
      <PageTitle text = "장바구니"/>
      <TitleBox />
      {arr.length === 0 
      ? <EmptyCart />
      :
      <>
      <CartMain arr = {arr} setArr = {setArr}/>
      <PriceBox />
      <BigButton text = "주문하기"/>
      </>}
    </HomeLayout>
  )
}
