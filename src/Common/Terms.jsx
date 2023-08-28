import React from 'react'
import styled from 'styled-components'
import emptyCheckbox from '../assets/check-box.svg'
import fillCheckbox from '../assets/check-fill-box.svg'

const TermsContainer = styled.label`
  display : block;
  margin : 34px 0;
`

export const TermsInp = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
  background-image: url(${emptyCheckbox});

  &:checked {
    background-image: url(${fillCheckbox});
  }
`

const TermsText = styled.span`
  font-size: ${(props) => props.theme.sm};
`

export default function Terms(props) {
    return (
          <TermsContainer htmlFor = "terms">
            <TermsInp 
            id = "terms" 
            type='checkbox' 
            {...props.register('terms',{
              required : '약관을 동의해주세요.'
            })}
            />
            <TermsText>
              {props.text}
            </TermsText>
          </TermsContainer>
  )
}