import React from 'react'
import InputTitle from '../atoms/InputTitle'
import FlexBox from '../atoms/FlexBox'
import InputBox from '../atoms/InputBox'
import ConfirmButton from '../atoms/ConfirmButton'
import styled from 'styled-components'

const Div = styled.div`
    margin-top : 50px;
`
export default function BusinessNumberInput(props) {
  return (
    <Div>
    <InputTitle title = "사업자등록번호" />
        <FlexBox >
            <InputBox 
              id = "business"
              {...props.register("business",{
                required : '사업자등록번호를 입력해주세요.',
                pattern : {
                    value : '[0-9]',
                    message : '숫자만 입력 가능합니다.'
                }
              })}/>
          <ConfirmButton onClick ={()=>{}} type = "button">인증</ConfirmButton>
        </FlexBox>
        {props.error.business && <small>{props.error.business.message}</small>}
    </Div>
  )
}
