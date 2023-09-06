import React, { useState } from 'react'
import Form from '../../Common/Signup with Login/Form'
import BuyWithSellSelectTab from '../../Common/Signup with Login/BuyWithSellSelectTab'
import InputForm from '../molecules/InputForm'
import WarningText from '../atoms/WarningText'
import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton'
import { useForm, FormProvider } from 'react-hook-form'
import login from '../../apis/login'
import { usePost } from '../../hooks/useFetch'

export default function LoginForm(props) {
  const [buySelect, setBuySelect] = useState(true);
  const [sellSelect, setSellSelect] = useState(false);
  const [warningText , setWarningText] = useState('');

  const postFunc = usePost('accounts/login/');

  const methods = useForm();
  const {handleSubmit, formState : {isSubmitting}} = methods;

  return (
    <>
        <BuyWithSellSelectTab buySelect = {buySelect} setBuySelect = {setBuySelect} sellSelect = {sellSelect} setSellSelect = {setSellSelect}/>
        <FormProvider {...methods}>
            <Form 
              onSubmit = {
                handleSubmit(async(data)=>{
                  await new Promise((r) => setTimeout(r, 1000));
                  console.log(data);
                  login(data, postFunc, buySelect, setWarningText);
                  })}>
                
              <InputForm />
              
              <WarningText text={warningText}/>
              <JoinWithSignupButton disabled = {isSubmitting}>
                가입하기
              </JoinWithSignupButton>
            </Form>
        </FormProvider>
        
    </>

  )
}
