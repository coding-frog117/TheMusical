import React from 'react'
import { useState } from 'react';
import TabButtons from '../molecules/TabButtons';
import MainCont from '../atoms/MainCont'

export default function MainBottom() {

  const [button , setButton] = useState(0);

    return (
    <>
        <TabButtons button = {button} setButton = {setButton}/>
        <MainCont button = {button} setButton = {setButton} />
    </>
  )
}
