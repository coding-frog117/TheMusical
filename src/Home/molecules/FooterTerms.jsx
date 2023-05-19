import React from 'react'
import FooterFlexLayout from '../atoms/FooterFlexLayout'
import FooterTextBold from '../atoms/FooterTextBold'
import FooterText from '../atoms/FooterText'
import FooterSpan from '../atoms/FooterSpan'

export default function FooterTerms() {
  return (
    <FooterFlexLayout>
        <FooterText text="호두샵 소개"/>
        <FooterSpan />
        <FooterText text="이용약관"/>
        <FooterSpan />
        <FooterTextBold text="개인정보처리방침"/>
        <FooterSpan />
        <FooterText text="전자금융거래약관"/>
        <FooterSpan />
        <FooterText text="청소년보호정책"/>
        <FooterSpan />
        <FooterText text="제휴문의"/>
    </FooterFlexLayout>
  )
}
