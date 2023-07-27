import React from 'react'
import styled from 'styled-components'
import Delete from '../assets/icon-delete.svg'

const Img = styled.img`
    width : 22px;
    height : 22px;
    float : right;
    vertical-align : top;
    cursor : pointer;
    background-image : ${Delete}
`


export default function DeleteImg(props) {

  const deleteItem = ()=>{
    let newArr = props.arr.filter((value,i) => (i !== props.index));
    props.setArr([...newArr])
  }

  return (
    <Img src = {Delete} onClick={deleteItem}/>
  )
}
