import React from 'react'
import { useState } from "react";
import PlusIcon from '../../assets/icon-plus-line.svg'
import MinusIcon from '../../assets/icon-minus-line.svg'
import CountButton from '../atoms/CountButton'
import { Button } from '../atoms/CountButton';
import CountText from '../atoms/CountText'
import BorderLine from '../atoms/BorderLine'

export default function CountControllButton() {
  const [count, setCount] = useState(1);
  return (
    <>
    <BorderLine />
      <CountButton bgImg = {MinusIcon}/>
      <Button>
        <CountText>{count}</CountText>
      </Button>
      <CountButton bgImg = {PlusIcon} onClick ={()=>setCount( + 1)}/>
    <BorderLine />
    </>
  )
}
