import React, { useState } from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from "../atoms/FlexBox"
import InputBox from "../atoms/InputBox"
import ConfirmButton from '../atoms/ConfirmButton'
import ConfirmText from '../../Common/Signup with Login/ConfirmText'
import styled from 'styled-components'

const Label = styled.label`
  width : 100%;
`

function checkButton(username){
  const url = "https://openmarket.weniv.co.kr/";
  return fetch(url+"accounts/signup/valid/username/",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username : username,
    }),
  })
.then(response => response.json())

}

async function doubleCheck(username, setConfirmtext){
  try{
    let user = await checkButton(username); 
    console.log(user);

    if (user.Success !== undefined){
      return setConfirmtext("멋진 아이디네요:)")

    } if (user.FAIL_Message === 'username 필드를 추가해주세요 :)'){
      return setConfirmtext("아이디를 입력해주세요.");
    
    } else {
      return setConfirmtext("중복된 아이디입니다.")}
    }

  catch(error){
    console.log(error);
  }
}
   
export default function IdInput(props) {
  const [id, setId] = useState(''); 
  const [confirmtext, setConfirmtext] =useState('');

  const errorId = props.error;
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

          <ConfirmButton onClick ={()=>{doubleCheck(id,setConfirmtext)}} type = "button">중복확인</ConfirmButton>
        </FlexBox>
        {props.error.id && <small>{props.error.id.message}</small>}
        <ConfirmText text = {confirmtext} color = {confirmtext === "멋진 아이디네요:)" 
        ? (props)=>props.theme.mainColor 
        : (props)=>props.theme.red}/>
    </>
  )
}