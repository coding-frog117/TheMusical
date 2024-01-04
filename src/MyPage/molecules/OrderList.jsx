import React, { useState, useEffect } from 'react';
import { useGet } from '../../hooks/useFetch';
import { Li } from '../../DashBoard/atoms/Category';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

export default function OrderList() {
	const getFunc = useGet('order/');
	const token = useSelector((state) => {
		return state.persistedReducer.token.value;
	});
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		getFunc(token).then((res) => {
			setItemList(res.data.results);
		});
	}, []);

	return (
		<ul>
			{itemList.map((item) => {
				console.log(item);
				return (
					<OrderItem
						id={item.order_items[0]}
						time={item.created_at}
						price={item.total_price}
						status={item.delivery_status}
					/>
				);
			})}
		</ul>
	);
}
