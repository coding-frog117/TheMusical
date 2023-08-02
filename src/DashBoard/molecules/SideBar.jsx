import React, { useState } from 'react'
import styled from 'styled-components'
import Category from '../atoms/Category'

const Ul = styled.ul`
    display : flex;
    gap : 10px;
    flex-direction : column;
`

export default function SideBar() {
    const [bgColor, setBgColor] =useState("#fff");
    const categoryName = ["판매중인 상품","주문/배송","문의/리뷰","통계","스토어 설정"];

  return (
    <Ul>
        {categoryName.map((a,i)=>(
            <Category text = {a} key = {i} bgColor = {bgColor} setBgColor ={setBgColor}/>
        ))
        }
    </Ul>
  )
}
