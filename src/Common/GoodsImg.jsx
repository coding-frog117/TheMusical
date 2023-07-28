import React from 'react'
import styled from 'styled-components'
import Img from '../assets/goodsImg.jpg'

export const ImgLayout = styled.img`
    width : ${(props)=>props.size};
    height : ${(props)=>props.size};
    margin : ${(props)=>props.margin};
    border : 1px solid ${(props)=>props.theme.lightGray};
    border-radius : ${(props)=>props.theme.radiusLg};
`
export default function GoodsImg(props) {
  return (
    <ImgLayout src = {Img} size = {props.size} margin = {props.margin} />
  )
}
