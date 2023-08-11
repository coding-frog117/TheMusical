import React from 'react'
import InlineText from '../../Common/InlineText'
import Text from '../../Cart/atoms/Text'
import CautionBox from '../../ProductRegistration/atoms/CautionBox'
import styled from 'styled-components'

const Section = styled.section`
  margin : 0 auto;
`

export default function Caution() {
  return (
    <Section>
    <Text text = "*상품 등록 주의사항" color = {(props)=>props.theme.red} fontSize = {(props)=>props.theme.sm} margin ="0 0 10px 0"/>
    <CautionBox>
      <Text text = "-너무 귀여운 사진은 심장이 아플수 있습니다" fontSize = "14px"/>
      <Text text = "- 상품 등록 시 정확한 판매가를 입력하시기 바랍니다. 시세보다 과도하게 높은 가격은 판매율이 낮아질 수 있습니다." fontSize = "14px"/>
    </CautionBox>
    </Section>
  )
}
