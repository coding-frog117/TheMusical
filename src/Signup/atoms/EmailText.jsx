import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    font-size : ${(props) => props.theme.sm};
    color : ${(props) => props.theme.darkGray};
    line-height : 54px;
    height : 54px;
    margin : 10px 0;
`
export default function EmailText() {
  return (
    <Text>@</Text>
  )
}
