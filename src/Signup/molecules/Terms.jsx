import React from 'react'
import styled from 'styled-components'
import emptyCheckbox from '../../assets/check-box.svg'
import fillCheckbox from '../../assets/check-fill-box.svg'

const TermsContainer = styled.div`
  margin : 34px 0;
`

const TermsInp = styled.input`
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
  color: ${(props) => props.theme.lightGray}; 
  font-size: ${(props) => props.theme.sm};
`

export default function Terms() {
    return (
          <TermsContainer>
            <TermsInp type='checkbox' />
            <TermsText>
              OO마켓의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.
            </TermsText>
          </TermsContainer>
  )
}