import React from 'react'
import styled from 'styled-components'

const ProductInputSmall = styled.input`
    width : 166px;
    height : 54px;
    border-radius : 5px 0 0 5px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    font-size : ${(props)=>props.theme.sm};
`

export default ProductInputSmall;
