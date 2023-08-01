import React from 'react'
import PayOptions from './PayOptions'
import PayTotalInfo from './PayTotalInfo'
import styled from 'styled-components'

const Div = styled.div`
  display : flex;
  gap : 40px;
  margin-top : 70px;
`
export default function Payment() {
  return (
    <Div>
      <PayOptions />
      <PayTotalInfo />
    </Div>

  )
}
