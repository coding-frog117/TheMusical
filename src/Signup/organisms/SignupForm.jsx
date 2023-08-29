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
import Layout from '../../Common/Signup with Login/Layout'
import styled from 'styled-components'

const GrayBox = styled(Form)`
    width : 550px;
    margin : 0 auto;
  `

  const Div = styled.div`
    width : 550px;
    margin : 0 auto;
  `

  const SignForm = styled.form`
    width : 550px;
    margin : 0 auto;
  `

  const Button = styled.button`
    width : 100%;
    height : 60px;
    background-color : ${(props)=>props.theme.mainColor};
    font-weight : 700;
    font-size : ${(props)=>props.theme.md};
    color : #fff;
    border-radius : 5px;
  `

export default function SignupForm(props) {
  const [password , setPassword] = useState('');
  const {register, handleSubmit, formState : {isSubmitting, errors}} = useForm();

  function sub(data){

    const username = data.id;
    const password = data.password;
    const pwconfirm = data.pwconfirm;
    const phoneNumber = (data.phoneFirst+ data.phoneSecond+data.phoneThird)
    const name = data.name;


    console.log(username);
    console.log(password);
    console.log(pwconfirm);
    console.log(phoneNumber);
    console.log(name);

    const userData = {
        username: username,
		    password: password,
		    password2: pwconfirm,
		    phone_number: phoneNumber.toString(),
		    name: name,
    };

    const url = "https://openmarket.weniv.co.kr/";
    return fetch(url+"accounts/signup/",{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify(userData),
    })
    .then(
      response => response.json())
  }

  async function signup(data){
    try{
      let account = await sub(data);
      console.log(account);

    } catch(error) {
      console.log(error);
    }
  } 

  return (
    <>
      <SignForm onSubmit={handleSubmit(async(data)=>{
        await new Promise((r) => setTimeout(r, 1000));
        console.log(data)
        signup(data)}
        )}>

      <BuyWithSellSelectTab />
        <GrayBox>
            <IdInput register = {register} error = {errors}/>
            <PasswordInput register = {register} password = {password} setPassword = {setPassword} error = {errors}/>
            <PWConfirmInput register = {register} password = {password} setPassword = {setPassword} error = {errors}/>
            <NameInput register = {register} error = {errors}/>
            <PhoneNumberInput register = {register} error = {errors}/>
            <EmailInput register = {register} error = {errors}/>
        </GrayBox>

        <Div>
          <Terms text = "OO마켓의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다." register = {register}/>
          <Button disabled={isSubmitting}>가입하기</Button>
        </Div>
          
      </SignForm>

    </>
  )
}
