import React from 'react'
import styled from 'styled-components'

const ModalFrame = styled.article`
    width : 360px;
    height : 200px;
    padding : 18px 18px 40px;
    background-color : #fff;
    border : 1px solid ${(props)=>props.theme.lightGray};
    margin : 0 auto;
    position : fixed;
    bottom : 50%;
`

export default ModalFrame;