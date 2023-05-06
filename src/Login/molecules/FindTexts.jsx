import React from 'react'
import FindTextLayout from '../atoms/FindTextLayout'
import FindText from '../atoms/FindText'

export default function FindTexts() {
  return (
    <FindTextLayout>
        <FindText text = "아이디"/>
        <FindText text = "|"/>
        <FindText text = "비밀번호 찾기"/>
    </FindTextLayout>
  )
}
