import React from 'react'
import { useState } from "react";
import PlusIcon from '../assets/icon-plus-line.svg'
import MinusIcon from '../assets/icon-minus-line.svg'
import CountButton from './CountButton'
import CountText from '../GoodsDetail/atoms/CountText'
import ControllButtonFrame from '../Cart/atoms/ControllButtonFrame';
import styled from 'styled-components';

const PlusButton = styled(CountButton)`
  background-image : url(${PlusIcon});
`

const MinusButton = styled(CountButton)`
  background-image : url(${MinusIcon});
`

export default function CountControllButton(props) {

  return (
      <ControllButtonFrame>
      <MinusButton onClick ={()=>{
        if (props.count > 1){
        props.setCount(props.count-1)
        }}
        } />
      <CountButton>
        <CountText>{props.count}</CountText>
      </CountButton>
      <PlusButton onClick ={()=>props.setCount(props.count+1)} />
      </ControllButtonFrame>
  )
}
