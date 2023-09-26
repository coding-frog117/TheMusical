import React, { useState } from 'react'
import styled from 'styled-components'

const ProductInput = styled.input`
    width : 740px;
    height : 54px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    border-radius : ${(props)=>props.theme.radius};
    font-size : ${(props)=>props.theme.sm};
`

export default ProductInput;
