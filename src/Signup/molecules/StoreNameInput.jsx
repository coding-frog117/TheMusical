import React from 'react'
import InputTitle from '../atoms/InputTitle'
import InputBox from '../atoms/InputBox'
import { useFormContext } from 'react-hook-form'

export default function StoreNameInput() {
  const {register, formState : {errors}} = useFormContext();

  return (
    <div>
        <InputTitle title = "스토어 이름" />
        <InputBox 
        {...register('storename',{
          required : "스토어 이름을 입력해주세요", 
        })}/>
        {errors.storename && <small>{errors.storename.message}</small>}
    </div>
  )
}
