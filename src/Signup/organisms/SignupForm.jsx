import React, { useState } from 'react'
import BuyWithSellSelectTab from '../molecules/BuyWithSellSelectTab'
import Form from '../atoms/Form'
import IdInput from '../molecules/IdInput'
import PWConfirmInput from '../molecules/PWConfirmInput'
import NameInput from '../molecules/NameInput'
import PhoneNumberInput from '../molecules/PhoneNumberInput'
import EmailInput from '../molecules/EmailInput'
import PasswordInput from '../molecules/PasswordInput'

export default function SignupForm(props) {
  const [password, setPassword] =useState('');

  return (
    <>
        <BuyWithSellSelectTab />
        <Form>      
            <IdInput />
            <PasswordInput password = {password} setPassword ={setPassword} />
            <PWConfirmInput password = {password}/>
            <NameInput />
            <PhoneNumberInput />
            <EmailInput />
        </Form>
    </>
  )
}
