import React from 'react'
import styled from 'styled-components'
import SideBar from './molecules/SideBar'
import DashBoardHeader from './molecules/DashBoardHeader'
import DashboardBox from './organisms/DashboardBox'
import SellerHeader from '../Common/Header/SellerHeader'

const Div = styled.section`
    width : 1720px;
    display : flex;
    gap : 30px;
    margin : 0 auto;
`

const Cont = styled.section`
  margin : 0 auto;
`
export default function DashBoardTemplates() {
  return (
    <>
    <DashBoardHeader />
    <Div>
        <SideBar />
        <DashboardBox />
    </Div>
    </>
  )
}
