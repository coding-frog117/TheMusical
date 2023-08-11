import React from 'react'
import GrayTitleText from '../atoms/GrayTitleText'
import SelectGreenButton from '../atoms/SelectGreenButton'
import SelectWhiteButton from '../atoms/SelectWhiteButton'

export default function DeliveryOptions() {
  return (
    <div>
        <GrayTitleText text = "배송방법"/>
        <SelectGreenButton text = "택배, 소포, 등기" height ="54px" margin = "0 10px 0 0"/>
        <SelectWhiteButton text = "직접배송(화물배달)" height = "54px"/>
    </div>
  )
}
