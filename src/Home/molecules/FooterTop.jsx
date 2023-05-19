import React from 'react'
import FooterTopLayout from '../atoms/FooterTopLayout'
import FooterTerms from './FooterTerms'
import FooterIcons from './FooterIcons'

export default function FooterTop() {
  return (
    <FooterTopLayout>
        <FooterTerms />
        <FooterIcons />
    </FooterTopLayout>
  )
}
