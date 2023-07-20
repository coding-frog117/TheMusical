import React from 'react'
import ItemTextBox from '../atoms/ItemTextBox'
import Text from '../atoms/Text'

export default function ItemText() {
  return (
    <ItemTextBox>
        <Text text ="백엔드글로벌" fontSize = "14px" color ={(props)=>props.theme.darkGray} margin= "0 0 10px"/>
        <Text text ="딥러닝 개발자 무릎 담요" fontSize = {(props)=>props.theme.md} margin= "0 0 10px"/>
        <Text text ="17,500원" fontSize = {(props)=>props.theme.sm} fontWeight= {(props)=>props.theme.bold} margin= "0 0 40px"/>
        <Text text = "택배배송 / 무료배송" color = {(props)=>props.theme.darkGray} fontSize= "14px" />
    </ItemTextBox>
  )
}
