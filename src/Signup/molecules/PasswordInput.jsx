import React, { useState } from 'react'
import PwLabel from '../atoms/PwLabel'
import PwInput from '../atoms/PwInput'
import CheckImg from '../atoms/CheckImg'
import InputTitle from '../atoms/InputTitle'
import IconCheckOff from '../../assets/icon-check-off.svg'
import IconCheckOn from '../../assets/icon-check-on.svg'

let regExp = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/);

function checkPw(value, setCheck){    
    regExp.test(value) === true ? setCheck(true) : setCheck(false);
}

export default function PasswordInput(props) {
    const [check, setCheck] = useState(false);
  return (
    <>
    <InputTitle title = "비밀번호" />
    <PwLabel onChange={(e)=>{
          props.setPassword(e.target.value);
          checkPw(e.target.value , setCheck);
        }}>
        <PwInput />
        {check === true ? <CheckImg src = {IconCheckOn}/> : <CheckImg src = {IconCheckOff}/>}
    </PwLabel>
    </>
  )
}
