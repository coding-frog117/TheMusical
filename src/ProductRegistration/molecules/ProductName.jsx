import React, { useState } from 'react'
import GrayTitleText from '../atoms/GrayTitleText'
import ProductInput from '../atoms/ProductInput'
import InlineText from '../../Common/InlineText'
import styled from 'styled-components'

export default function ProductName() {
  const [count, setCount] = useState(0); 

  return (
   <div>
    <GrayTitleText text = "상품명"/>
    <ProductInput width = "740px" count = {count} setCount= {setCount} radius = {(props)=>props.theme.radius}/>
    <InlineText text = {`${count}/20`} fontSize = "14px" color = {(props)=>props.theme.lightGray}/>
    </div>
  )
}
