import React from 'react'
import styled from 'styled-components'

export const CheckButton = styled.button`
    width: 122px;
    height: 54px;
    flex-shrink : 0;
    background-color : ${(props) => props.theme.mainColor};
    color : #fff;
    font-size: ${(props) => props.theme.sm};
    border-radius: ${(props) => props.theme.radius};
    margin : 10px 0; 
`
export default function Button(props) {
  return (
    <CheckButton type='button'>
        {props.text}
    </CheckButton>
  )
}
