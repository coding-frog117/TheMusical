import React from 'react'
import styled from 'styled-components'
import ModalButtons from './ModalButtons'

const ModalGreenButton = styled(ModalButtons)`
    background-color : ${(props)=>props.theme.mainColor};
    color : #fff;
    font-weight : 500;

`
export default ModalGreenButton;
