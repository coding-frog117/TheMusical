import React from 'react'
import GrayBox from '../atoms/GrayBox'
import TitleText from '../../Common/TitleText'
import RadioButton from '../atoms/RadioButton'

export default function TitleBox() {
  return (
    <GrayBox>
        <RadioButton />
        <TitleText text = "상품정보" marginLt ="314px" marginRt = "379px"/>
        <TitleText text = "수량" marginRt = "238px"/>
        <TitleText text = "상품금액" marginRt ="131px"/>
    </GrayBox>
  )
}
