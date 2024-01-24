import React from 'react';
import { Cont, Div } from '../../DashBoard/templates/DashBoardTemplates';
import SideBar from '../../DashBoard/molecules/SideBar';
import OrderBox from '../organisms/OrderBox';
import Header from '../molecules/Header';

export default function MyPageTemplates() {
	const categoryName = ['주문/배송 조회', '마이페이지', '설정'];

	return (
		<Cont>
			<Header />
			<Div>
				<SideBar categoryName={categoryName} />
				<OrderBox />
			</Div>
		</Cont>
	);
}
