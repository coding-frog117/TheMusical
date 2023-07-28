import React, { useState } from 'react'
import styled from 'styled-components'
import OrderItemTextBox from '../atoms/OrderItemTextBox'
import Text from '../../Cart/atoms/Text'

export default function OrderItemText() {
  const [count,setCount] = useState(1);

  return (
    <OrderItemTextBox>
        <Text text ="백엔드글로벌" fontSize = "14px" color ={(props)=>props.theme.darkGray} margin= "0 0 6px"/>
        <Text text ="딥러닝 개발자 무릎 담요" fontSize = {(props)=>props.theme.md} margin= "0 0 10px"/>
        <Text text ={`수량${count}개`} fontSize = "14px" color ={(props)=>props.theme.darkGray} />
    </OrderItemTextBox>
  )
}
