import React, { useState } from 'react'
import InputTitle from "../atoms/InputTitle"
import FlexBox from "../atoms/FlexBox"
import InputBox from "../atoms/InputBox"
import ConfirmButton from '../atoms/ConfirmButton'
import ConfirmText from '../../Common/Signup with Login/ConfirmText'
import {useSelector , useDispatch} from 'react-redux'
import {changename, increase} from '../../store'


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
   
export default function IdInput() {

  // const a = useSelector((state)=>{return state})

  // console.log(a);

  // const dispatch = useDispatch();
  
  // dispatch(changename());
  // dispatch(increase());

  const [username , setUsername] = useState('');
  const [confirmtext, setConfirmtext] =useState('');

  return (
    <>
       <InputTitle title = "아이디" />
        <FlexBox>
          <InputBox onChange = {(e)=>{setUsername(e.target.value)}}/>
          <ConfirmButton onClick ={()=>{doubleCheck(username,setConfirmtext)}} type = "button">중복확인</ConfirmButton>
        </FlexBox>
        <ConfirmText text = {confirmtext} color = {confirmtext === "멋진 아이디네요:)" 
        ? (props)=>props.theme.mainColor 
        : (props)=>props.theme.red}/>
    </>
  )
}