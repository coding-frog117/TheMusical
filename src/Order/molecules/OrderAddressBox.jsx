import React from 'react'
import OrderInputBox from '../atoms/OrderInputBox'
import OrderInputTitle from '../atoms/OrderInputTitle'
import SmallButton from '../../Cart/atoms/SmallButton'
import AddressBlank from '../atoms/AddressBlank'
import BigBlank from '../atoms/BigBlank'
import AddressLayout from '../atoms/FlexLayout'
import styled from 'styled-components'

const Div = styled.div`
  display : flex;
  flex-direction : column;
  gap : 8px;
  padding : 8px 0;
  border-bottom : ${(props)=>props.theme.lightGray} 1px solid;
`

export default function OrderAddressBox() {
  return (
    <Div>
      <AddressLayout>
        <OrderInputTitle text = "배송주소"/>
        <AddressLayout>
          <AddressBlank />
          <SmallButton text = "우편번호 조회" height = "40px" bgColor = {(props)=>props.theme.mainColor}/>
        </AddressLayout>
      </AddressLayout>

      <AddressLayout>
        <OrderInputTitle />
        <BigBlank />
      </AddressLayout>

      <AddressLayout>
        <OrderInputTitle />
        <BigBlank />
      </AddressLayout>

    </Div>
    
  )
}
