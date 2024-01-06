import React, { useEffect, useState } from 'react';
import OrderTItleBox from '../molecules/OrderTItleBox';
import OrderList from './OrderList';
import OrderTotalPrice from '../molecules/OrderTotalPrice';
import { useLocation } from 'react-router-dom';
import OrderListBox from '../atoms/OrderListBox';
import { useGet } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function OrderInfo() {
	const location = useLocation();
	const { state } = location;

	console.log(state.data)

	const itemPrice = useSelector((state) => {
		return state.totalCartPriceSlice.value - state.selectedItemSlice.item;
	});

	const fee = useSelector((state) => {
		return state.deliveryFeeSlice.value - state.selectedItemSlice.fee;
	});

	return (
		<>
			<OrderTItleBox />
			<OrderListBox>
				{state.data.map((item) => {
					console.log(item);
					if (item.is_active) {
						return <OrderList data={item.data} quantity={item.quantity} id={item.product_id} />;
					} else if (item.image) {
						return <OrderList id={item.product_id} quantity={state.quantity} />;
					}
				})}
			</OrderListBox>
			<OrderTotalPrice data={state.data} quantity={state.quantity} price={itemPrice + fee} />
		</>
	);
}
