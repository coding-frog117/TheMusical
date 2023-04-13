import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from '../atoms/FlexBox'
import InputBox from "../atoms/InputBox"
import EmailText from '../atoms/EmailText'

export default function EmailInput() {
  return (
    <>
        <InputTitle title = "이메일" />
        <FlexBox>
            <InputBox />
            <EmailText />
            <InputBox />
        </FlexBox>
    </>
  )
}
