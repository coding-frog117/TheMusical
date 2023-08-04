import React, { useState } from 'react'
import styled from 'styled-components'
import SellingItemImg from '../atoms/SellingItemImg'
import InlineText from '../../Common/InlineText'
import EditButton from '../atoms/EditButton'
import DeleteButton from '../atoms/DeleteButton'
import SellingItemName from './SellingItemName'

const Li = styled.li`
    width : 100%;
    height : 103px;
    padding : 16px 30px 17px;
    display : flex;
    align-items : center;
    border-bottom : 1px solid ${(props)=> props.theme.lightGray};
    background-color : #fff;
`
export default function SellingItem() {
  const [item ,setItem] = useState([1,2,3]);

  return (
    <ul>
    {item.map(()=>(
      <Li>
        <SellingItemImg />
        <SellingItemName text = "딥러닝 개발자 무릎 담요" count = "370"/>
        <InlineText text = "17500원" fontSize = {(props)=>props.theme.md} margin = "0 217px 0 0"/>
        <EditButton text = "수정"/>
        <DeleteButton text = "삭제"/>
    </Li>
   
    )
    
    )}
    </ul>
  )
}
