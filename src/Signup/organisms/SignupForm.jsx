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
import BusinessNumberInput from '../molecules/BusinessNumberInput'
import StoreNameInput from '../molecules/StoreNameInput'
import { usePost } from '../../hooks/useFetch'
import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton'

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

  async function signup(data){
    const username = data.id;
    const password = data.password;
    const pwconfirm = data.pwconfirm;
    const phoneNumber = (data.phoneFirst+ data.phoneSecond+data.phoneThird)
    const name = data.name;
    const company_registration_number = data.business;
		const store_name = data.storename;

    const buyerData = {
      username: username,
      password: password,
      password2: pwconfirm,
      phone_number: phoneNumber.toString(),
      name: name,
  };

    const sellerData = {
        username: username,
		    password: password,
		    password2: pwconfirm,
		    phone_number: phoneNumber.toString(),
		    name: name,
        company_registration_number: company_registration_number,
		    store_name: store_name,
    };

    try{
      let account = await postFunc(buySelect === true ? buyerData : sellerData);
      console.log(account);
      alert(name+'님 반갑습니다*^^* 회원가입이 완료되었습니다');

    } catch(error) {
      alert(Object.values(error.response.data)[0]);
    }
  }

  return (
      <SignForm
      onSubmit={
        handleSubmit(async(data)=>{
        await new Promise((r) => setTimeout(r, 1000));
        console.log(data);
        signup(data);
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
