import React from 'react'
import styled from 'styled-components'
import Icon from '../../assets/icon-user.svg'

const MyPage = styled.img`
    width : 56px;
    height : 36px; 
`

export default function MyPageIcon() {
  return (
    <MyPage src={Icon}/>
  )
}
