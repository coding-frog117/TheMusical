import React from 'react'
import { useState } from 'react';
import TabButtons from '../molecules/TabButtons';
import MainCont from '../atoms/MainCont'

export default function MainBottom() {
    return (
    <>
        <TabButtons />
        <MainCont />
    </>
  )
}
