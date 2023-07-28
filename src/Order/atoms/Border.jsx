import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width : 100%;
    height : ${(props)=>props.height ? props.height : "1px"};
    background-color : ${(props)=>props.theme.lightGray};
    margin : ${(props)=>props.margin};
`

export default function Border(props) {
  return (
    <Div margin = {props.margin} height = {props.height}/>
  )
}
