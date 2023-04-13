import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from '../atoms/FlexBox'
import InputBox from "../atoms/InputBox"

export default function PhoneNumberInput() {
  return (
    <>
        <InputTitle title = "휴대폰 번호" />
        <FlexBox>
            <InputBox />
            <InputBox />
            <InputBox />
        </FlexBox>
    </>
  )
}
