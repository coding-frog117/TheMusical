import React, { useState, useEffect } from 'react'
import BuyWithSellSelectTab from '../molecules/BuyWithSellSelectTab'
import Form from '../atoms/Form'
import IdInput from '../molecules/IdInput'
import PWConfirmInput from '../molecules/PWConfirmInput'
import NameInput from '../molecules/NameInput'
import PhoneNumberInput from '../molecules/PhoneNumberInput'
import EmailInput from '../molecules/EmailInput'
import PasswordInput from '../molecules/PasswordInput'
import {useForm} from 'react-hook-form'
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

  const [password , setPassword] = useState('');
  const {register, handleSubmit, formState : {isSubmitting, errors}} = useForm();

  const [buySelect, setBuySelect] = useState(true);
  const [sellSelect, setSellSelect] = useState(false);

  return (
      <SignForm
      onSubmit={
        handleSubmit(async(data)=>{
        await new Promise((r) => setTimeout(r, 1000));
        console.log(data);
        signup(data, postFunc, buySelect);
      }
      )}>

      <BuyWithSellSelectTab buySelect = {buySelect} setBuySelect = {setBuySelect} sellSelect = {sellSelect} setSellSelect = {setSellSelect}/>
        <Form>
            {buySelect === true 
            ? <> 
            <IdInput register = {register} error = {errors}/>
            <PasswordInput register = {register} password = {password} setPassword = {setPassword} error = {errors}/>
            <PWConfirmInput register = {register} password = {password} setPassword = {setPassword} error = {errors}/>
            <NameInput register = {register} error = {errors}/>
            <PhoneNumberInput register = {register} error = {errors}/>
            <EmailInput register = {register} error = {errors}/>
            </>
          : <>
            <IdInput register = {register} error = {errors}/>
            <PasswordInput register = {register} password = {password} setPassword = {setPassword} error = {errors}/>
            <PWConfirmInput register = {register} password = {password} setPassword = {setPassword} error = {errors}/>
            <NameInput register = {register} error = {errors}/>
            <PhoneNumberInput register = {register} error = {errors}/>
            <EmailInput register = {register} error = {errors}/>
            <BusinessNumberInput register = {register} error = {errors}/>
            <StoreNameInput register = {register} error = {errors}/>
            </>}
            
        </Form>

          <Terms text = "OO마켓의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다." register = {register}/>
          <JoinWithSignupButton disabled={isSubmitting}>가입하기</JoinWithSignupButton>

      </SignForm>
  )
}
