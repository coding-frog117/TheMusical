import React from 'react'
import styled from 'styled-components'

const ModalBackdrop = styled.div`
    position: fixed;
    margin: 0 auto;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display :flex; 
    justify-content:center;
    align-items :center;
`

export default ModalBackdrop;