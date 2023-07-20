import React from 'react'
import { HomeLayout } from '../../Common/HomeLayout'
import { HeaderBar } from '../atoms/HeaderBar'
import HeaderLogo from '../atoms/HeaderLogo'
import SearchBar from '../molecules/SearchBar'
import Buttons from '../molecules/Buttons'

export default function Header() {
  return (
    <HomeLayout>
      <HeaderBar>
        <HeaderLogo />
        <SearchBar />
        <Buttons />
      </HeaderBar>
    </HomeLayout>

  )
}
