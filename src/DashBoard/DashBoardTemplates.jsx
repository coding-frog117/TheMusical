import React from 'react'
import styled from 'styled-components'
import SellingItem from './molecules/SellingItem'
import SideBar from './molecules/SideBar'
import DashBoardHeader from './molecules/DashBoardHeader'
import DashboardBox from './organisms/DashboardBox'

const Div = styled.section`
    display : flex;
    gap : 30px;
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
