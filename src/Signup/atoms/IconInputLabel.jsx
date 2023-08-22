import React, { useState } from 'react'
import styled from 'styled-components'
import IconCheckOff from '../../assets/icon-check-off.svg'
import IconCheckOn from '../../assets/icon-check-on.svg'

const checkPW = (value, setPw) =>{
        let regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,}$/g);
        regExp.test(value) === true ? setPw(true) : setPw(false);
}

const Label = styled.label`
    display : block;
    width : 100%;
    height : 54px;
    border : 1px solid #C4C4C4;
    border-radius : ${(props)=> props.theme.radius};
    margin : 10px 0;
`

const Input = styled.input`
    width : 436px;
    height : 52px;
    line-height : 52px;
    font-size: ${(props) => props.theme.sm};
`

const CheckImg = styled.img`
    vertical-align : top;
    display : inline-block;
    position : relative;
    top : 13px;
`

export default function IconInputLabel(props) {
    const [pw, setPw] =useState('');
    
  return (
    <Label>
        <Input onChange={(e)=>{
          setPw(e.target.value);
          checkPW(e.target.value , setPw);
        }}/>
        {pw === true ? <CheckImg src = {IconCheckOn}/> : <CheckImg src = {IconCheckOff}/>}

    </Label>
  )
}
