import React from 'react'
import styled from 'styled-components'
import BannerImg from '../../assets/bannerImg.jpg'

const Img = styled.img`
    width : 100%;
    height : 500px;
`

export default function Banner() {
  return (
    <Img src={BannerImg}/>
  )
}
