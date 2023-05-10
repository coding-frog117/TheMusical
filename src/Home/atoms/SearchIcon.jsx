import React from 'react'
import styled from 'styled-components'
import Icon from '../../assets/search.svg'

const Search = styled.img`
    width : 28px;
    height : 42px;
    line-height : 42px;
    float : right;
    margin-right : 22px;
`

export default function SearchIcon() {
  return (
    <Search src={Icon}/>
  )
}
