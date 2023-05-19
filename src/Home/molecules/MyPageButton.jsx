import React from 'react'
import MyPageIcon from '../atoms/MyPageIcon'
import IconText from '../atoms/IconText'

export default function MyPageButton() {
  return (
    <button>
        <MyPageIcon />
        <IconText text="마이페이지"/>
    </button>
  )
}
