import React from 'react'
import InputTitle from "../atoms/InputTitle"
import InputBox from "../atoms/InputBox"
import { useFormContext } from 'react-hook-form'

export default function NameInput() {

  const {register, formState : {errors}} = useFormContext();

  return (
    <div>
        <InputTitle title = "이름" />
        <InputBox
        {...register('name',{
          required : "이름을 입력해주세요", 
        })}/>
        {errors.name && <small>{errors.name.message}</small>}
    </div>
  )
}
