import React from 'react'
import styled from 'styled-components'

const Title = styled.label`
    color: ${(props) => props.theme.lightGray};
    font-size: ${(props)=> props.theme.sm};
`

export default function InputTitle(props) {
  return (
    <Title>{props.title}</Title>
  )
}