import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
    width : 70px;
    height : 70px;
    border-radius : 50%;
`
export default function SellingItemImg(props) {
  return (
    <Img src = {props.src}/>
  )
}
