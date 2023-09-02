import React, { useState } from 'react'
import InputTitle from '../atoms/InputTitle'
import FlexBox from '../atoms/FlexBox'
import InputBox from '../atoms/InputBox'
import ConfirmButton from '../atoms/ConfirmButton'
import styled from 'styled-components'
import { usePost } from '../../hooks/useFetch'

const Div = styled.div`
    margin-top : 50px;
`
export default function BusinessNumberInput(props) {
  const postFunc = usePost('accounts/signup/valid/company_registration_number/'); 

  const [businessNumber, setBusinessNumber] = useState('');
  const [confirmtext, setConfirmtext] = useState('');

  const doubleCheck = async(number)=>{
    try{
      const response = await postFunc(number);
      console.log(response);

      if (response) {
        return setConfirmtext('사용 가능한 사업자등록번호입니다.');
      }

    } catch(error){
      console.log(error);

    }
  }

  return (
    <Div>
    <InputTitle title = "사업자등록번호" />
        <FlexBox >
          <label
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
            </label>
          <ConfirmButton onClick ={()=>doubleCheck(businessNumber)} type = "button">인증</ConfirmButton>
        </FlexBox>
        {props.error.business && <small>{props.error.business.message}</small>}
    </Div>
  )
}
