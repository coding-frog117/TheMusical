import React from 'react'
import styled from 'styled-components'
import IconImg from '../../assets/icon-img.png'
import { useFormContext } from 'react-hook-form'

const Label = styled.label`
    width : 50px;
    height : 50px;
    display: inline-block;
    background-image : url(${IconImg});
`

export default function ImgButton(props) {
  const {register, formState : {errors}} = useFormContext();

  return (
    <Label htmlFor='image'>
    <input  
      {
        ...register('image',{
          required : '상품 이미지를 넣어주세요'
        })
      }
      type = "file"
      id = "image"
      alt = "사진"
      style = {{display : "none"}} 
      onChange={(e)=>{
        props.setImage(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        props.setImageUrl(url);
      }
        }
      />
    </Label>
  )
}
