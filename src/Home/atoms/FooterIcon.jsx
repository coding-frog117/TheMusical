import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width : 32px;
    height : 32px;
`

export default function FooterIcon(props) {
  return (
    <Img src={props.src}/>
  )
}
