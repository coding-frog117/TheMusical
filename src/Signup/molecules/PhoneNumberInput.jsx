import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from '../atoms/FlexBox'
import InputBox from "../atoms/InputBox"
import { useFormContext } from 'react-hook-form'

export default function PhoneNumberInput() {
  const {register, formState : {errors}} = useFormContext();

  return (
    <div>
        <InputTitle title = "휴대폰 번호" />
        <FlexBox>
            <InputBox
            {...register('phoneFirst',{
              required : '휴대폰 번호를 입력해주세요',
              minLength : 3,
              pattern : '/[0-9]{3,4}g/'
            })}/>
            <InputBox 
            {...register('phoneSecond',{
              required : '휴대폰 번호를 입력해주세요',
              minLength : 3,
              pattern : '/[0-9]{3,4}g/'
            })}/>
            <InputBox
            {...register('phoneThird',{
              required : '휴대폰 번호를 입력해주세요',
              minLength : 3,
              pattern : '/[0-9]{3,4}g/'
            })}/>
        </FlexBox>
        
        {(errors.phoneFirst) 
        ? <small>{errors.phoneFirst.message}</small> 
        : (errors.phoneSecond) 
        ? <small>{(errors.phoneSecond.message)}</small>
        : (errors.phoneThird)
        ? <small>{errors.phoneThird.message}</small> : null}

    </div>
  )
}
