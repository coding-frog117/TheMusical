import React from 'react';
import OrderTitle from '../molecules/OrderTitle';
import { Div, Main } from '../../DashBoard/organisms/DashboardBox';
import OrderList from '../molecules/OrderList';

export default function OrderBox() {
	return (
		<Main>
			<OrderTitle />
			<OrderList />
			<Div />
		</Main>
	);
}
