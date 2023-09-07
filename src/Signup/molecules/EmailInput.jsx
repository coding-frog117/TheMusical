import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from '../atoms/FlexBox'
import InputBox from "../atoms/InputBox"
import EmailText from '../atoms/EmailText'
import { useFormContext } from 'react-hook-form'

export default function EmailInput() {

  const {register, formState : {errors}} = useFormContext();

  return (
    <div>
        <InputTitle title = "이메일" />
        <FlexBox>
            <InputBox
            {...register('emailFirst',{
              required : '이메일을 입력해주세요',
              pattern : {
                value : '/[a-z0-9]g/',
                message : '올바른 이메일 형식을 입력해주세요.'}
            })}/>
            <EmailText />
            <InputBox
            {...register('emailSecond',{
              required : '이메일을 입력해주세요',
              pattern : {
                value : '[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]',
                message : '올바른 이메일 형식을 입력해주세요.'}
            })}/>
        </FlexBox>

        {(errors.emailFirst) 
        ? <small>{errors.emailFirst.message}</small> 
        : (errors.emailSecond) 
        ? <small>{(errors.emailSecond.message)}</small>: null}
    </div>
  )
}
