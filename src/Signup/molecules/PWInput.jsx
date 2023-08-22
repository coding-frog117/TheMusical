import React, { useState } from 'react'
import InputTitle from "../atoms/InputTitle"
import IconInputBox from "../atoms/IconInputBox"

export default function PWInput() {
  const [pw, setPw] = useState("");
  return (
    <>
        <InputTitle title = "비밀번호" />
        <IconInputBox onChange={(e)=>{
          setPw(e.target.value);
          let regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,}$/g);
          regExp.test(pw) == true ? setPw(true) : setPw(false)
        }}/>

    </>
  )
}