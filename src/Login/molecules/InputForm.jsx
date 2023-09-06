import React from 'react'
import InputBoxLayout from '../atoms/InputBoxLayout'
import { useFormContext } from 'react-hook-form'
import LoginInputBox from '../atoms/LoginInputBox'

export default function InputForm() {

  const {register, formState : {errors}} = useFormContext();

  return (
    <InputBoxLayout>
          <label htmlFor = "id">
            <LoginInputBox 
              placeholder = "아이디"
              id = "id"
              text="아이디" 
              {...register('id',{
                required: '아이디를 입력해주세요'
              })}
              />
          </label>
          {errors.id && <small>{errors.id.message}</small>}

          <label htmlFor = "password">
            <LoginInputBox 
              placeholder='비밀번호'
              id = "password"
              text="비밀번호"
              {...register('password',{
                required: '비밀번호를 입력해주세요'
              })}
              />
          </label>
          {errors.password && <small>{errors.password.message}</small>}
    </InputBoxLayout>
  )
}
