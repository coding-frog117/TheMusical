import React from 'react';
import styled from 'styled-components';
import SideBar from '../molecules/SideBar';
import DashBoardHeader from '../molecules/DashBoardHeader';
import DashboardBox from '../organisms/DashboardBox';
import SellerHeader from '../../Common/Header/SellerHeader';

export const Div = styled.section`
	width: 1720px;
	display: flex;
	gap: 30px;
	margin: 0 auto;
`;

export const Cont = styled.section`
	margin: 0 auto;
	padding: 38px 0 96px;
`;

export default function DashBoardTemplates() {
	const categoryName = ['판매중인 상품', '주문/배송', '문의/리뷰', '통계', '스토어 설정'];

	return (
		<Cont>
			<DashBoardHeader />
			<Div>
				<SideBar categoryName={categoryName} />
				<DashboardBox />
			</Div>
		</Cont>
	);
}
