import React from 'react'
import styled from 'styled-components'
import Text from './Text'

const Div = styled.div`
    width : 100%;
    padding : 150px 0 380px;
    margin : 0 auto;
    text-align : center;
`

export default function EmptyCart() {
  return (
    <Div>
        <Text text= "장바구니에 담긴 상품이 없습니다." fontWeight = "700" fontSize = {(props)=>props.theme.md} margin = "0 0 17px 0"/>
        <Text text="원하는 상품을 장바구니에 담아보세요!" fontSize ="14px" color ={(props)=>props.theme.darkGray}/>
       
    </Div>
  )
}
