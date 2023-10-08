import React, { useState } from 'react'
import {SearchBarLayout} from '../atoms/SearchBarLayout'
import SearchBarText from '../atoms/SearchBarText'
import SearchIcon from '../atoms/SearchIcon'
import { AutoCompleteLayout } from '../atoms/AutoCompleteLayout'
import { AutoCompleteResult } from '../atoms/AutoCompleteResult'

export default function SearchBar(props) {

  const [searchList, setSearchList] = useState([]);
  
  return (
    <>
    <SearchBarLayout searchList = {searchList}>
        <SearchBarText text="상품을 검색해보세요!" setSearchList = {setSearchList}/>
        <SearchIcon />

        <AutoCompleteLayout display = {searchList.length === 0 ? 'none' : 'block'}>
          {searchList.map((item)=>{
            return(
              <AutoCompleteResult display = {searchList.length === 0 ? 'none' : 'block'}>{item.product_name}</AutoCompleteResult>
            )
          })}
        </AutoCompleteLayout>
    
    </SearchBarLayout>
    </>
  )
}
