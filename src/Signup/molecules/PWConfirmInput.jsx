import {React, useState, useEffect} from 'react'
import { useFormContext } from 'react-hook-form'
import InputTitle from "../atoms/InputTitle"
import ConfirmText from '../../Common/Signup with Login/ConfirmText'
import PwLabel from '../atoms/PwLabel'
import PwInput from '../atoms/PwInput'
import CheckImg from '../atoms/CheckImg'
import IconCheckOff from '../../assets/icon-check-off.svg'
import IconCheckOn from '../../assets/icon-check-on.svg'

function confirmCheck(value, password, setConfirm){
  value === password 
  ? setConfirm(true)
  : setConfirm(false)
}


export default function PWConfirmInput(props) {
  const [passwordConfirm, setPasswordConfirm] = useState(''); 
  const [confirm, setConfirm] = useState(false);
  const {register, formState : {errors}} = useFormContext();

  useEffect(()=>{
    passwordConfirm === props.password 
  ? setConfirm(true)
  : setConfirm(false)

  },[passwordConfirm, props.password])

  return (
    <>
    <InputTitle title = "비밀번호 확인" />
    <PwLabel onChange={(e)=>{
          setPasswordConfirm(e.target.value);
        }}>
          
        <PwInput 
        {...register('pwconfirm',{
          required : '비밀번호 확인을 입력해주세요'
        })}/>
        {(confirm === false || passwordConfirm === '') ? <CheckImg src = {IconCheckOff}/> : <CheckImg src = {IconCheckOn}/>}
    </PwLabel>

    {errors.pwconfirm && <small>{errors.pwconfirm.message}</small>}
    <ConfirmText 
      text = {
        passwordConfirm === '' ? null : 
        (confirm === true ? "비밀번호가 확인되었습니다." : "비밀번호가 다릅니다.")}
      color = {confirm === true ? (props)=>props.theme.mainColor : (props)=> props.theme.red}
    />
    </>
  )
}
