import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from "../atoms/FlexBox"
import InputBox from "../atoms/InputBox"
import ConfirmButton from '../atoms/ConfirmButton'
import ConfirmText from '../../Common/Signup with Login/ConfirmText'

export default function IdInput() {
  return (
    <>
       <InputTitle title = "아이디" />
        <FlexBox>
          <InputBox />
          <ConfirmButton text= "중복확인"/>
        </FlexBox>
        <ConfirmText text = "멋진 아이디군요:)"/>
    </>
  )
}