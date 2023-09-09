import React, { useState } from 'react'
import BuyWithSellSelectTab from '../../Common/Signup with Login/BuyWithSellSelectTab'
import Form from '../../Common/Signup with Login/Form'
import IdInput from '../molecules/IdInput'
import PWConfirmInput from '../molecules/PWConfirmInput'
import NameInput from '../molecules/NameInput'
import PhoneNumberInput from '../molecules/PhoneNumberInput'
import EmailInput from '../molecules/EmailInput'
import PasswordInput from '../molecules/PasswordInput'
import { useForm, FormProvider } from 'react-hook-form'
import Terms from '../../Common/Terms'
import styled from 'styled-components'
import BusinessNumberInput from '../molecules/BusinessNumberInput'
import StoreNameInput from '../molecules/StoreNameInput'
import { usePost } from '../../hooks/useFetch'
import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton'
import { signup } from '../../apis/signup'

  const SignForm = styled.form`
    width : 550px;
    margin : 0 auto;
  `

export default function SignupForm(props) {

  const postFunc = usePost("accounts/signup/");

  const methods = useForm();
  const {handleSubmit, formState : {isSubmitting}} = methods;

  const [password , setPassword] = useState('');
  const [buySelect, setBuySelect] = useState(true);
  const [sellSelect, setSellSelect] = useState(false);

  return (
    <FormProvider {...methods}>
      <SignForm
      onSubmit={
        handleSubmit(async(data)=>{
        await new Promise((r) => setTimeout(r, 1000));
        signup(data, postFunc, buySelect);
      }
      )}>

      <BuyWithSellSelectTab buySelect = {buySelect} setBuySelect = {setBuySelect} sellSelect = {sellSelect} setSellSelect = {setSellSelect}/>
        <Form>
            {buySelect === true 
            ? <> 
            <IdInput />
            <PasswordInput password = {password} setPassword = {setPassword}/>
            <PWConfirmInput password = {password} setPassword = {setPassword}/>
            <NameInput />
            <PhoneNumberInput />
            <EmailInput />
            </>
          : <>
            <IdInput />
            <PasswordInput password = {password} setPassword = {setPassword} />
            <PWConfirmInput password = {password} setPassword = {setPassword} />
            <NameInput />
            <PhoneNumberInput />
            <EmailInput />
            <BusinessNumberInput />
            <StoreNameInput />
            </>}
            
        </Form>

          <Terms text = "OO마켓의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다." />
          <JoinWithSignupButton disabled={isSubmitting}>가입하기</JoinWithSignupButton>

      </SignForm>
    </FormProvider>
  )
}
