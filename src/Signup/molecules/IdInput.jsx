import React, { useState } from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from "../atoms/FlexBox"
import InputBox from "../atoms/InputBox"
import ConfirmButton from '../atoms/ConfirmButton'
import ConfirmText from '../../Common/Signup with Login/ConfirmText'
import styled from 'styled-components'
import { usePost } from '../../hooks/useFetch'
import { idDoubleCheck } from '../../apis/idDoubleCheck'

const Label = styled.label`
  width : 100%;
`
  
export default function IdInput(props) {
  const postFunc = usePost('accounts/signup/valid/username/'); 
  
  const [id, setId] = useState(''); 
  const [confirmtext, setConfirmtext] =useState('');

  return (
    <>
       <InputTitle title = "아이디" />
        <FlexBox >
          <Label 
          htmlFor = "id" 
          onChange={
            (e)=>{setId(e.target.value)}} >

            <InputBox 
              id = "id"
              {...props.register("id",{
                required : '아이디를 입력해주세요.'
              })}
              />
          </Label>

          <ConfirmButton onClick ={()=>{idDoubleCheck(id, postFunc, setConfirmtext)}} type = "button">중복확인</ConfirmButton>
        </FlexBox>
        {props.error.id && <small>{props.error.id.message}</small>}
        <ConfirmText text = {confirmtext} color = {confirmtext ==="멋진 아이디네요:)" 
        ? (props)=>props.theme.mainColor 
        : (props)=>props.theme.red}/>
    </>
  )}