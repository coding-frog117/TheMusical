import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import TabButton from '../atoms/TabButton'

const Div = styled.div`
    margin-top : 140px;
`

export default function TabButtons() {
    const [button , setButton] = useState(false);
  return (
    <Div>
        <TabButton text = "버튼" button = {button} setButton = {setButton} onClick={()=>setButton(0)}/>
        <TabButton text = "버튼" onClick={()=>setButton(1)}/>
        <TabButton text = "버튼" onClick={()=>setButton(2)}/>
        <TabButton text = "버튼" onClick={()=>setButton(3)}/>
    </Div>
  )
}
