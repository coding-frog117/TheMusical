import {React,useState} from 'react'
import ProductImg from '../atoms/ProductImg'
import ImgButton from '../atoms/ImgButton'
import GrayTitleText from '../atoms/GrayTitleText'
import styled from 'styled-components'

export default function ProductImage(props) {

  const [imageUrl , setImageUrl] = useState('');

  const Img = styled.img`
    width : 454px;
    height : 454px;
  `

  return (
    <div>
    <GrayTitleText text = "상품 이미지"/>
    {imageUrl === '' 
      ? <ProductImg>
          <ImgButton setImage = {props.setImage} setImageUrl = {setImageUrl}/>
        </ProductImg>

      : <Img src = {imageUrl}/>
      }
    
    </div>
  )
}
