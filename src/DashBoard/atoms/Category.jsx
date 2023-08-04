import React, { useState } from 'react'
import styled from 'styled-components'

export const Li = styled.li`
    width : 250px;
    height : 50px;
    padding : 15px 20px;
    font-size : 16px;
    list-style : none;
    border-radius : ${(props)=>props.theme.radius};
    color : ${(props)=>props.backgroundColor == false ?  'black' : 'white'};
    background-color : ${(props)=>props.backgroundColor == false ?  'white' : (props)=>props.theme.mainColor};

    &:hover {
        background-color : #EFFFF3;
        color : black;
    }
`

export default function Category(props) {
    const [bgColor , setBgColor] = useState(0);
    const categoryName = ["판매중인 상품","주문/배송","문의/리뷰","통계","스토어 설정"];

    return (
        <>
        {categoryName.map((a,i)=>(
            <Li backgroundColor = {bgColor === i ? true : false} onClick={()=>{setBgColor(i)}}>{a}</Li>

        ))}
        </>
  )
}
