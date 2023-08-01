import React from 'react'
import PayButton from '../atoms/PayButton'
import InlineText from '../../Common/InlineText'
import styled from 'styled-components'

const Li = styled.li`
    margin-right : 20px;
    display : inline;
`

export default function PaymentCheckButton(props) {
  return (
    <Li>
        <PayButton />
        <InlineText text ={props.text} fontSize = {(props)=>props.theme.sm} />
    </Li>
  )
}
