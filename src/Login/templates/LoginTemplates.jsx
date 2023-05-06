import React from 'react'
import Layout from '../../Common/Signup with Login/Layout'
import Logo from '../../Common/Signup with Login/Logo'
import LoginForm from '../organisms/LoginForm'
import FindTexts from '../molecules/FindTexts'

export default function LoginTemplates() {
  return (
    <Layout>
      <Logo />
      <LoginForm />
      <FindTexts />
    </Layout>
  )
}
