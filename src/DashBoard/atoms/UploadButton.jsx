import React from 'react'
import styled from 'styled-components'
import Plus from '../../assets/icon-plus.svg'
import InlineText from '../../Common/InlineText'

const Button = styled.button`
    width : 168px;
    height : 54px;
    background-color : ${(props)=>props.theme.mainColor};
    border-radius : ${(props)=>props.theme.radius}; 
    float : right;
`

const Text = styled.span`
  font-size : 18px;
  color : #fff;
  font-weight : 500;
  vertical-align : top;
  position : relative;
  top : 3px;
`

export default function UploadButton(props) {
  return (
    <Button>
        <img src={Plus} />
        <Text>상품 업로드</Text>
    </Button>
  )
}
