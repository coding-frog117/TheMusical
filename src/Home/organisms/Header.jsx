import React from 'react'
import { HeaderBar } from '../atoms/HeaderBar'
import HeaderLogo from '../atoms/HeaderLogo'
import SearchBar from '../molecules/SearchBar'
import CartButton from '../molecules/CartButton'
import MyPageButton from '../molecules/MyPageButton'

export default function Header() {
  return (
    <HeaderBar>
        <HeaderLogo />
        <SearchBar />
        <MyPageButton />
        <CartButton />
        
    </HeaderBar>

  )
}
