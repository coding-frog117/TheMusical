import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width : 600px;
  height : 600px;
`

export default function ProductImg(props) {
  return (
    <Img src = {props.data.image}/>
  )
}
