import React from 'react'
import InputTitle from "../atoms/InputTitle"
import InputBox from "../atoms/InputBox"

export default function NameInput(props) {
  return (
    <>
        <InputTitle title = "이름" />
        <InputBox onChange={(e)=>props.setName(e.target.value)}
        {...props.register('name',{
          required : "이름을 입력해주세요", 
        })}/>
    </>
  )
}
