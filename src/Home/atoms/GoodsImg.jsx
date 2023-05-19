import React from 'react'
import styled from 'styled-components'
import Img from '../../assets/goodsImg.jpg'

const ImgLayout = styled.img`
    width : 380px;
    height : 380px;
    margin-bottom : 16px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    border-radius : ${(props)=>props.theme.radiusLg};
`
export default function GoodsImg() {
  return (
    <ImgLayout src = {Img}/>
  )
}
