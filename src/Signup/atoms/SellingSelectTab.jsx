import styled from "styled-components";
import SelectTab from "../../Common/Signup with Login/SelectTab";
import React, { useState } from 'react'

const Div = styled.div`
  background-color : ${(props)=>props.bgColor};
`

export default function SellingSelectTab() {
  const [bgColor,setBgColor]=useState('#C4C4C4');

  return (
    <Div bgColor= {bgColor}>
    <SelectTab text = "판매회원가입"  onClick = {()=>setBgColor('#fff')}/>
    </Div>
  )
}
