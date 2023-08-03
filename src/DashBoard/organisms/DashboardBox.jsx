import React from 'react'
import styled from 'styled-components'
import SellingItem from '../molecules/SellingItem'
import SellingTitle from '../molecules/SellingTitle';

const Main = styled.main`
    width : 1440px;
    height : 884px;
    border : 1px solid ${(props)=>props.theme.lightGray};
    margin : 0 auto;
`

const Div = styled.div`
  width : 1440px;
  background-color : ${(props)=>props.theme.whiteGray}
`
export default function DashboardBox() {
  return (
    <Main>
        <SellingTitle />
        <SellingItem />
        <Div />
    </Main>
  )
}
