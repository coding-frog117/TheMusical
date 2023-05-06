import React from 'react'
import InputBoxLayout from '../atoms/InputBoxLayout'
import InputBox from '../atoms/InputBox'

export default function InputForm() {
  return (
        <InputBoxLayout>
            <InputBox text="아이디"/>
            <InputBox text="비밀번호"/>
        </InputBoxLayout>
  )
}
