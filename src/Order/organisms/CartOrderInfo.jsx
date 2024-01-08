import React, { useState, useEffect } from 'react';
import OrderTItleBox from '../molecules/OrderTItleBox';
import OrderListBox from '../atoms/OrderListBox';
import OrderList from './OrderList';
import OrderTotalPrice from '../molecules/OrderTotalPrice';
import { useGet } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

// 카트에서 전체 주문 시 나타나는 컴포넌트
export default function CartOrderInfo() {
	const getFunc = useGet('cart');
	const [data, setData] = useState([]);

	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});

	const itemPrice = useSelector((state) => {
		return state.totalCartPriceSlice.value - state.selectedItemSlice.item;
	});

	const fee = useSelector((state) => {
		return state.deliveryFeeSlice.value - state.selectedItemSlice.fee;
	});

	useEffect(() => {
		getFunc(token).then((res) => {
			return setData(res.data.results);
		});
	}, []);

	return (
		<>
			<OrderTItleBox />
			<OrderListBox>
				{data.map((item) => {
					if (item.is_active) {
						return <OrderList id={item.product_id} quantity={item.quantity} />;
					}
				})}
			</OrderListBox>
			<OrderTotalPrice price={itemPrice + fee} />
		</>
	);
}
