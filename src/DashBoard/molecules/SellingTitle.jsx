import React from 'react'
import styled from 'styled-components'
import TitleText from '../../Common/TitleText'

const SellingBox = styled.div`
    width : 1440px;
    height : 60px;
    border-bottom : 1px solid ${(props)=>props.theme.lightGray};
    padding : 18px 0;
`

export default function SellingTitle() {
  return (
    <SellingBox>
        <TitleText text = "상품정보" marginLt= "366px" marginRt = "473px"/>
        <TitleText text = "판매가격" marginRt = "240px"/>
        <TitleText text = "수정" marginRt = "106px"/>
        <TitleText text = "삭제" marginRt = "40px" />
    </SellingBox>
  )
}
