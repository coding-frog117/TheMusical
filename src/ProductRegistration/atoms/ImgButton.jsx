import React from 'react'
import styled from 'styled-components'
import IconImg from '../../assets/icon-img.png'

const Input = styled.input`
    width : 50px;
    height : 50px;
    display: inline-block;
`

export default function ImgButton() {
  return (
    <Input type = "image" src = {IconImg} alt = "사진"/>
  )
}
