import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import TabButton from '../atoms/TabButton'

const Div = styled.div`
    margin-top : 140px;
`

export default function TabButtons(props) {
    
  const tabContent = ['상품 설명','상세 내용','배송 안내','Q&A'];

  return (
    <Div >
        {tabContent.map((item,index)=>{
          return(
          <TabButton onClick = {()=>{props.setButton(index)}}>
            {item}
          </TabButton>
        )}
      )
      }
    </Div>
  )
}
