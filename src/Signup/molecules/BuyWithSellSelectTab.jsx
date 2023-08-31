import React, { useState } from 'react'
import styled from 'styled-components'
import SelectTabLayout from '../../Common/Signup with Login/SelectTabLayout'
import SelectTab from '../../Common/Signup with Login/SelectTab'

const Div = styled(SelectTab)`
    background-color : ${(props)=>props.bgColor};
`

export default function BuyWithSellSelectTab(props) {

  return (
    <SelectTabLayout>
        <Div
        bgColor = {props.buySelect === true ? '#fff' : (props)=>props.theme.lightGray}
        onClick = {()=>{
          props.setBuySelect(true);
          props.setSellSelect(false);
      }}>
        구매 회원가입
        </Div>

        <Div 
        bgColor = {props.sellSelect === true ? '#fff' : (props)=>props.theme.lightGray}
        onClick = {()=>{
          props.setSellSelect(true);
          props.setBuySelect(false);
      }}>
        판매 회원가입
      </Div>
    </SelectTabLayout>
  )
}
