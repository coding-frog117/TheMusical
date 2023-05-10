import React from 'react'
import { IconLayout } from '../atoms/IconLayout'
import MyPageIcon from '../atoms/MyPageIcon'
import IconText from '../atoms/IconText'

export default function MyPageButton() {
  return (
    <IconLayout>
        <MyPageIcon />
        <IconText text="마이페이지"/>
    </IconLayout>
  )
}
