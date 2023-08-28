import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from '../atoms/FlexBox'
import InputBox from "../atoms/InputBox"
import EmailText from '../atoms/EmailText'

export default function EmailInput(props) {
  return (
    <>
        <InputTitle title = "이메일" />
        <FlexBox>
            <InputBox onChange={(e)=>props.setEmailFirst(e.target.value)}
            {...props.register('emailFirst',{
              required : '이메일을 입력해주세요',
              pattern : '/[a-z0-9]g/'
            })}/>
            <EmailText />
            <InputBox onChange={(e)=>props.setEmailSecond(e.target.value)}
            {...props.register('emailSecond',{
              required : '이메일을 입력해주세요',
              pattern : '/[a-z]+\.[a-z]/'
            })}/>
        </FlexBox>
    </>
  )
}
