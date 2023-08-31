import React, { useState } from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from "../atoms/FlexBox"
import InputBox from "../atoms/InputBox"
import ConfirmButton from '../atoms/ConfirmButton'
import ConfirmText from '../../Common/Signup with Login/ConfirmText'
import styled from 'styled-components'
import { usePost } from '../../hooks/useFetch'

const Label = styled.label`
  width : 100%;
`
  
export default function IdInput(props) {
  const postFunc = usePost('accounts/signup/valid/username/'); 
  
  const [id, setId] = useState(''); 
  const [confirmtext, setConfirmtext] =useState('');

  const doubleCheck = async(id) =>{
    try{
        const response = await postFunc(id);
        console.log(response);

        if (response){
          return setConfirmtext("멋진 아이디네요:)");
        } 
        }
    catch(error){
        if (error.response.data.FAIL_Message === 'username 필드를 추가해주세요 :)'){
          return setConfirmtext("아이디를 입력해주세요.");
        } else {
          return setConfirmtext("중복된 아이디입니다.");
        }
  }}

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

          <ConfirmButton onClick ={()=>{doubleCheck(id)}} type = "button">중복확인</ConfirmButton>
        </FlexBox>
        {props.error.id && <small>{props.error.id.message}</small>}
        <ConfirmText text = {confirmtext} color = {confirmtext ==="멋진 아이디네요:)" 
        ? (props)=>props.theme.mainColor 
        : (props)=>props.theme.red}/>
    </>
  )}