import React from 'react'
import OrderInputBox from '../atoms/OrderInputBox'
import MiddleBlank from '../atoms/MiddleBlank'
import Text from '../../Cart/atoms/Text'

export default function OrderNameInput() {
  return (
    <OrderInputBox>
        <Text text = "이름" fontSize = {(props)=>props.theme.sm}/>
        <MiddleBlank />
    </OrderInputBox>
  )
}
