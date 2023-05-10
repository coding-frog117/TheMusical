import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import FindTextLayout from '../atoms/FindTextLayout'
import FindText from '../atoms/FindText'

export default function FindTexts() {
  return (
    <BrowserRouter>
    <FindTextLayout>
        <FindText text = "아이디"/>
        <FindText text = "|"/>
        <FindText text = "비밀번호 찾기"/>
    </FindTextLayout>
    </BrowserRouter>
  )
}