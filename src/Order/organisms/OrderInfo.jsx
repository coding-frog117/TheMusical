import React from 'react';
import OrderTItleBox from '../molecules/OrderTItleBox';
import OrderList from './OrderList';
import OrderTotalPrice from '../molecules/OrderTotalPrice';
import { useLocation } from 'react-router-dom';

export default function OrderInfo() {
	const location = useLocation();
	const { state } = location;

	return (
		<>
			<OrderTItleBox />
			<OrderList data={state.data} quantity={state.quantity} />
			<OrderTotalPrice data={state.data} quantity={state.quantity} />
		</>
	);
}
