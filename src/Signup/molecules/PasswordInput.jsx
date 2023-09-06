import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
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

    const {register, formState : {errors}} = useFormContext();

  return (
    <div>
    <InputTitle title = "비밀번호" htmlFor = "password"/>
    <PwLabel onChange={(e)=>{
          props.setPassword(e.target.value);
          checkPw(e.target.value , setCheck);
        }}>
        <PwInput 
          id = "password"
          type='text'
          {
            ...register("password",{
              required : "비밀번호를 입력해주세요",
              minLength : {
                value : 8,
                message : '8자리 이상 입력해야 합니다.'
              },
              pattern : {
                value : /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/,
                message : '비밀번호는 영문, 숫자가 하나 이상 포함되어야 합니다.'
              } 
            })
          }

        />
        {check === true ? <CheckImg src = {IconCheckOn}/> : <CheckImg src = {IconCheckOff}/>}
    </PwLabel>
    {errors.password && <small>{errors.password.message}</small>}
    </div>
  )
}
