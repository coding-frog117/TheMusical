import React from 'react'
import styled from 'styled-components'

export const CheckButton = styled.button`
    width: 122px;
    height: 60px;
    background-color : ${(props) => props.theme.mainColor};
    color : #fff;
    font-size: ${(props) => props.theme.sm};
    font-weight : 700;
    border-radius: ${(props) => props.theme.radius};
`
export default function Button(props) {
  return (
    <CheckButton type='button'>
        {props.text}
    </CheckButton>
  )
}
