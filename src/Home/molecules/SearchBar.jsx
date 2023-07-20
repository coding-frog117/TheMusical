import React from 'react'
import {SearchBarLayout} from '../atoms/SearchBarLayout'
import SearchBarText from '../atoms/SearchBarText'
import SearchIcon from '../atoms/SearchIcon'

export default function SearchBar() {
  return (
    <SearchBarLayout>
        <SearchBarText text="상품을 검색해보세요!"/>
        <SearchIcon />
    </SearchBarLayout>
  )
}
