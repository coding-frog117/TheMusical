import React from 'react'
import Text from '../../Cart/atoms/Text'

export default function GrayTitleText(props) {
  return (
    <Text color = {(props)=>props.theme.darkGray} fontSize = {(props)=>props.theme.sm} margin = "0 0 10px" text = {props.text}/>
  )
}
