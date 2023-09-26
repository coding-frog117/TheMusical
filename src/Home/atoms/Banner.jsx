import React, { useEffect } from 'react'
import styled from 'styled-components'
import BannerImg from '../../assets/bannerImg.jpg'
import { useGet } from '../../hooks/useFetch'

const Img = styled.img`
    width : 100%;
    height : 500px;
`

export default function Banner() {
  // const getFunc = async()=>{
  //     const response = await fetch('http://api.kcisa.kr/openapi/CNV_060/request?serviceKey=ff7fa7df-4ed4-41d8-9b05-24ab747780e9&numOfRows=10&pageNo=1')
  //     const result = await response.json();
  //     return result;
  // } 

  // useEffect(()=>{
  //   console.log(getFunc());

  // },[])

  return (
    <Img src={BannerImg}/>
  )
}
