import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from '../atoms/FlexBox'
import InputBox from "../atoms/InputBox"

export default function PhoneNumberInput(props) {

  return (
    <>
        <InputTitle title = "휴대폰 번호" />
        <FlexBox>
            <InputBox onChange={(e)=>props.setPhoneFirst(e.target.value)}
            {...props.register('phoneFirst',{
              required : '휴대폰 번호를 입력해주세요',
              minLength : 3,
              pattern : '/[0-9]{3,4}g/'
            })}/>
            <InputBox onChange={(e)=>props.setPhoneSecond(e.target.value)}
            {...props.register('phoneSecond',{
              required : '휴대폰 번호를 입력해주세요',
              minLength : 3,
              pattern : '/[0-9]{3,4}g/'
            })}/>
            <InputBox onChange={(e)=>props.setPhoneThird(e.target.value)}
            {...props.register('phoneThird',{
              required : '휴대폰 번호를 입력해주세요',
              minLength : 3,
              pattern : '/[0-9]{3,4}g/'
            })}/>
        </FlexBox>
    </>
  )
}
