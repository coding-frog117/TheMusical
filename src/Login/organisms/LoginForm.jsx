import React from 'react'
import Form from '../../Signup/atoms/Form'
import BuyWithSellSelectTab from '../molecules/BuyWithSellSelectTab'
import LoginButton from '../atoms/LoginButton'
import InputForm from '../molecules/InputForm'
import WarningText from '../atoms/WarningText'

export default function LoginForm() {
  return (
    <>
        <BuyWithSellSelectTab />
        <Form>
            <InputForm />
            <WarningText text="아이디 또는 비밀번호가 일치하지 않습니다."/>
            <LoginButton />
        </Form>
    </>

  )
}
