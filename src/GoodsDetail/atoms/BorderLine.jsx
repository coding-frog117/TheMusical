import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width : 630px;
    border : 1px solid ${(props)=> props.theme.lightGray};
    margin : ${(props)=>props.margin};
`

export default function BorderLine(props) {
  return (
    <Div margin = {props.margin}/>
  )
}
