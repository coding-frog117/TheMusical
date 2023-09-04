import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import FindTextLayout from '../atoms/FindTextLayout'
import FindText from '../atoms/FindText'
import DivideBar from '../../Common/DivideBar';

export default function FindTexts() {
  return (
    <FindTextLayout>
        <FindText text = "회원가입"/>
        <DivideBar text = "|" fontsize = "16px" margin = "14px"/>
        <FindText text = "비밀번호 찾기"/>
    </FindTextLayout>
  )
}