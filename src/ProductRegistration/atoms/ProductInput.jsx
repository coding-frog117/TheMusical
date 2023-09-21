import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components'

const Input = styled.input`
    width : ${(props)=>props.width};
    height : 54px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    border-radius : ${(props)=>props.theme.radius};
    font-size : ${(props)=>props.theme.sm};
`

export default function ProductInput(props) {
  const {register, formState : {errors}} = useFormContext();

  return (
    <Input 
    width={props.width} 
    radius={props.radius} 
    onChange={(e)=>{props.setCount(e.target.value.length)}}
    {
      ...register('product_name',{
        required : '상품 이름을 입력해주세요',
      })
    }/>
  )
}
