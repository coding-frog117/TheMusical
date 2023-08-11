import React from 'react'
import styled from 'styled-components'
import SelectGreenButton from '../atoms/SelectGreenButton'
import SelectWhiteButton from '../atoms/SelectWhiteButton'

const Span = styled.div`
    text-align : right;
    margin-top : 50px;
`

export default function SaveAndCancelBtn() {
  return (
    <Span>
        <SelectWhiteButton text= "취소" height = "60px"/>
        <SelectGreenButton text= "저장하기" margin = "0 0 0 10px" height = "60px"/>
    </Span>
  )
}
