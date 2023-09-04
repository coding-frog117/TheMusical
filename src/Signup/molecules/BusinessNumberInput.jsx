import React, { useState } from 'react'
import InputTitle from '../atoms/InputTitle'
import FlexBox from '../atoms/FlexBox'
import InputBox from '../atoms/InputBox'
import ConfirmButton from '../atoms/ConfirmButton'
import styled from 'styled-components'
import { usePost } from '../../hooks/useFetch'
import ConfirmText from '../../Common/Signup with Login/ConfirmText'
import { businessDoubleCheck } from '../../apis/businessDoubleCheck'

const Div = styled.div`
    margin-top : 50px;
`

const Label = styled.label`
  width : 100%;
`

export default function BusinessNumberInput(props) {
  const postFunc = usePost('accounts/signup/valid/company_registration_number/'); 

  const [businessNumber, setBusinessNumber] = useState('');
  const [confirmtext, setConfirmtext] = useState('');

  return (
    <Div>
    <InputTitle title = "사업자등록번호" />
        <FlexBox >
          <Label
            htmlFor = "business"
            onChange={
              (e)=>{setBusinessNumber(e.target.value)}}>
            <InputBox 
              id = "business"
              {...props.register("business",{
                required : '사업자등록번호를 입력해주세요.',
                pattern : {
                    value : '[0-9]',
                    message : '숫자만 입력 가능합니다.'
                }
              })}/>
            </Label>
          <ConfirmButton onClick={()=>businessDoubleCheck(businessNumber, postFunc, setConfirmtext)} type = "button">인증</ConfirmButton>
        </FlexBox>
        {props.error.business && <small>{props.error.business.message}</small>}
        <ConfirmText text = {confirmtext} color = {confirmtext ==="사용 가능한 사업자등록번호입니다." 
        ? (props)=>props.theme.mainColor 
        : (props)=>props.theme.red}/>
    </Div>
  )
}
