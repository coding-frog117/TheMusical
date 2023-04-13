import React from 'react'
import Form from '../atoms/Form'
import IdInput from '../molecules/IdInput'
import PWInput from '../molecules/PWInput'
import PWConfirmInput from '../molecules/PWConfirmInput'
import NameInput from '../molecules/NameInput'
import PhoneNumberInput from '../molecules/PhoneNumberInput'
import EmailInput from '../molecules/EmailInput'

export default function SignupForm() {
  return (
        <Form>
            <IdInput />
            <PWInput />
            <PWConfirmInput />
            <NameInput />
            <PhoneNumberInput />
            <EmailInput />
        </Form>
  )
}
