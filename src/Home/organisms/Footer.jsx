import React from 'react'
import { HomeLayout } from '../../Common/HomeLayout'
import FooterTop from '../molecules/FooterTop'
import FooterBottom from '../molecules/FooterBottom'

export default function Footer() {
  return (
    <HomeLayout>
      <FooterTop />
      <FooterBottom />
    </HomeLayout>
  )
}
