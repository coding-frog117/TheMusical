import React from 'react'
import { useState } from "react";
import PlusIcon from '../assets/icon-plus-line.svg'
import MinusIcon from '../assets/icon-minus-line.svg'
import CountButton from './CountButton'
import { Button } from './CountButton';
import CountText from '../GoodsDetail/atoms/CountText'
import ControllButtonFrame from '../Cart/atoms/ControllButtonFrame';

export default function CountControllButton() {
  const [count, setCount] = useState(1);
  return (
      <ControllButtonFrame>
      <CountButton bgImg = {MinusIcon}/>
      <Button>
        <CountText>{count}</CountText>
      </Button>
      <CountButton bgImg = {PlusIcon} onClick ={()=>setCount( + 1)}/>
      </ControllButtonFrame>
  )
}
