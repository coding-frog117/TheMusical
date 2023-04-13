import React from 'react'
import InputTitle from "../atoms/InputTitle"
import IconInputBox from "../atoms/IconInputBox"
import ConfirmText from '../../Common/Signup with Login/ConfirmText'

export default function PWConfirmInput() {
  return (
    <>
        <InputTitle title = "비밀번호 재확인" />
        <IconInputBox />
        <ConfirmText text = "비밀번호가 확인되었습니다."/>
    </>
  )
}
