import React from 'react'
import InputTitle from '../atoms/InputTitle'
import InputBox from '../atoms/InputBox'

export default function StoreNameInput(props) {
  return (
    <div>
        <InputTitle title = "스토어 이름" />
        <InputBox 
        {...props.register('storename',{
          required : "스토어 이름을 입력해주세요", 
        })}/>
        {props.error.storename && <small>{props.error.storename.message}</small>}
    </div>
  )
}
