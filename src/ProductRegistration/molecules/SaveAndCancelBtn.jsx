import React from 'react'
import styled from 'styled-components'
import SelectGreenButton from '../atoms/SelectGreenButton'
import SelectWhiteButton from '../atoms/SelectWhiteButton'

const Span = styled.div`
    text-align : right;
    margin-top : 50px;
`

const SaveButton = styled(SelectGreenButton)`
  height : 60px;
  margin : 0 0 0 10px;
` 

const CancelButton = styled(SelectWhiteButton)`
  height : 60px;
`

export default function SaveAndCancelBtn() {
  return (
    <Span>
        <CancelButton>취소</CancelButton>
        <SaveButton>저장하기</SaveButton>
    </Span>
  )
}
