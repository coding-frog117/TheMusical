import React, { useEffect, useState } from 'react';
import OrderTItleBox from '../molecules/OrderTItleBox';
import OrderList from './OrderList';
import OrderTotalPrice from '../molecules/OrderTotalPrice';
import { useLocation, useParams } from 'react-router-dom';
import OrderListBox from '../atoms/OrderListBox';
import { useGet } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function OneOrderInfo() {
	// cart정보와 상품 정보를 어떻게 둘다 get 받아올지?
	// params를 id 로 받자니 quantity가 없음.
	// cartId 로 받자니 두번 받아와야 함. -> 비효율적
	// 쿼리스트링은 받아오는 정보가 조건부로 많을 때 쓰는 듯. 탈락
	// url로 id를 받고 state로 cart에서 필요한 정보인 quantity만 받기

	const { id } = useParams();

	const getItemFunc = useGet(`products/${id}/`);
	const [data, setData] = useState([]);
	const { state } = useLocation();

	useEffect(() => {
		getItemFunc().then((res) => {
			setData(res.data);
		});
	}, []);

	const totalPrice = state.quantity * data.price + data.shipping_fee;

	return (
		<>
			<OrderTItleBox />
			<OrderListBox>
				<OrderList quantity={state.quantity} id={id} />;
			</OrderListBox>
			<OrderTotalPrice price={totalPrice} />
		</>
	);
}
