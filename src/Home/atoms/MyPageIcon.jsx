import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../../assets/icon-user.svg'
import IconOn from '../../assets/icon-user-2.svg'

const MyPage = styled.img`
    width : 56px;
    height : 36px; 
`

export default function MyPageIcon() {
  const [IconSrc,setIconSrc] = useState(false); 

  return (
    <>
    <MyPage src={IconSrc === false ? Icon : IconOn} onClick={
      ()=> {
        setIconSrc(IconSrc === false ? true : false);
        }}/>
    </>
  )
}
