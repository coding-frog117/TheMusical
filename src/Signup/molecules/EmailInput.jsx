import React from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from '../atoms/FlexBox'
import InputBox from "../atoms/InputBox"
import EmailText from '../atoms/EmailText'

export default function EmailInput(props) {
  return (
    <div>
        <InputTitle title = "이메일" />
        <FlexBox>
            <InputBox onChange={(e)=>props.setEmailFirst(e.target.value)}
            {...props.register('emailFirst',{
              required : '이메일을 입력해주세요',
              pattern : {
                value : '/[a-z0-9]g/',
                message : '올바른 이메일 형식을 입력해주세요.'}
            })}/>
            <EmailText />
            <InputBox onChange={(e)=>props.setEmailSecond(e.target.value)}
            {...props.register('emailSecond',{
              required : '이메일을 입력해주세요',
              pattern : {
                value : '[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]',
                message : '올바른 이메일 형식을 입력해주세요.'}
            })}/>
        </FlexBox>

        {(props.error.emailFirst) 
        ? <small>{props.error.emailFirst.message}</small> 
        : (props.error.emailSecond) 
        ? <small>{(props.error.emailSecond.message)}</small>: null}
    </div>
  )
}
