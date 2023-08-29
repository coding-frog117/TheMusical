import React, { useState } from 'react'
import SelectTabLayout from '../../Common/Signup with Login/SelectTabLayout'
import BuyingSelectTab from '../atoms/BuyingSelectTab'
import SellingSelectTab from '../atoms/SellingSelectTab'
import styled from 'styled-components'

const SelectTab = styled.div`
    width : 100%;
    font-size : ${(props)=>props.theme.sm};
    font-weight : 500;
    padding : 20px;
    border : 1px solid #C4C4C4;
    border-bottom : 0px;
    border-radius : ${(props) => props.theme.radiusLg} ${(props) => props.theme.radiusLg} 0 0;
    background-color : ${(props)=>props.bgColor};
`

export default function BuyWithSellSelectTab() {
  const [buySelect, setBuySelect] = useState('#C4C4C4');
  const [sellSelect, setSellSelect] = useState('#C4C4C4');
{console.log(sellSelect);}
  return (
    <SelectTabLayout>
        <SelectTab 
        text = "구매 회원가입"
        bgcolor = {buySelect}
        onClick = {()=>{
          setBuySelect("#fff");
          setSellSelect('#C4C4C4');
      }}/>
        <SelectTab 
        text = "판매 회원가입"
        bgColor = {sellSelect}
        onClick = {()=>{
          setSellSelect('#fff');
          setBuySelect('#C4C4C4');
      }}/>
    </SelectTabLayout>
  )
}
