import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width : ${(props)=>props.size};
    height : ${(props)=>props.size};
`

export default function IconImg(props) {
  return (
    <Img src = {props.src} size = {props.size}/>
  )
}
