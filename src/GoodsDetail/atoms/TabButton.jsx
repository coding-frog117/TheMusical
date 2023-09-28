import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const TabButton = styled.button`
    width : 320px;
    height : 60px;
    color : ${(props)=>props.theme.darkGray};
    border-bottom : 6px solid #E0E0E0;
    font-weight : 500;
    font-size : 16px;

    &:focus{
      color : ${(props)=>props.theme.mainColor};
      border-bottom : 6px solid ${(props) => props.theme.mainColor};
      font-weight : 700;
    }
` 
export default TabButton;
