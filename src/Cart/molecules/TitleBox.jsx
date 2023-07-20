import React from 'react'
import GrayBox from '../atoms/GrayBox'
import TitleText from '../atoms/TitleText'
import RadioButton from '../atoms/RadioButton'

export default function TitleBox() {
  return (
    <GrayBox>
        <RadioButton />
        <TitleText text = "상품정보" fontsize = "18px" marginLt ="314px" marginRt = "379px"/>
        <TitleText text = "수량" fontsize = "18px" marginRt = "238px"/>
        <TitleText text = "상품금액" fontsize = "18px" marginRt ="131px"/>
    </GrayBox>
  )
}
