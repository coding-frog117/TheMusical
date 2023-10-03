import React from 'react'
import styled from 'styled-components'
import ModalButtons from './ModalButtons'

const ModalWhiteButton = styled(ModalButtons)`
    border: 1px solid ${(props)=>props.theme.lightGray};
    color : ${(props)=>props.theme.darkGray};
    font-weight : 500;
`

export default ModalWhiteButton;