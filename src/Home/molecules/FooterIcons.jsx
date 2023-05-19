import React from 'react'
import FooterFlexLayout from '../atoms/FooterFlexLayout'
import Insta from '../../assets/icon-insta.svg'
import FaceBook from '../../assets/icon-fb.svg'
import Youtube from '../../assets/icon-yt.svg'
import FooterIcon from '../atoms/FooterIcon'

export default function FooterIcons() {
  return (
    <FooterFlexLayout>
        <FooterIcon src={Insta}/>
        <FooterIcon src={FaceBook}/>
        <FooterIcon src={Youtube}/>
    </FooterFlexLayout>
  )
}
