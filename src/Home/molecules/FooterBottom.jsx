import React from 'react'
import FooterBottomLayout from '../atoms/FooterBottomLayout'
import FooterTextBold from '../atoms/FooterTextBold'
import FooterBottomText from '../atoms/FooterBottomText'

export default function FooterBottom() {
  return (
    <FooterBottomLayout>
        <FooterTextBold text="(주)HODU SHOP"/>
        <FooterBottomText text="제주특별자치도 제주시 동광고 137 제주코딩베이스캠프"/>
        <FooterBottomText text="사업자 번호 : 000-0000-0000 | 통신판매업 대표 : 김호두"/>
        <FooterBottomText text="대표 : 김호두"/>
    </FooterBottomLayout>
  )
}
