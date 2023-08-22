import React, { useState } from 'react'
import BuyWithSellSelectTab from '../molecules/BuyWithSellSelectTab'
import Form from '../atoms/Form'
import IdInput from '../molecules/IdInput'
import PWInput from '../molecules/PWInput'
import PWConfirmInput from '../molecules/PWConfirmInput'
import NameInput from '../molecules/NameInput'
import PhoneNumberInput from '../molecules/PhoneNumberInput'
import EmailInput from '../molecules/EmailInput'
import IconInputLabel from '../atoms/IconInputLabel'

export default function SignupForm() {

  return (
    <>
        <BuyWithSellSelectTab />
        <Form>      
            <IdInput />
            <PWInput />
            <IconInputLabel />
            
            <PWConfirmInput />
            <NameInput />
            <PhoneNumberInput />
            <EmailInput />
        </Form>
    </>
  )
}
