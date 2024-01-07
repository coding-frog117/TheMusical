import React, { useEffect, useState } from 'react';
import OrderItemText from '../molecules/OrderItemText';
import GoodsImg from '../../Common/GoodsImg';
import OrderPriceBox from '../atoms/OrderPriceBox';
import InlineText from '../../Common/InlineText';
import OrderListMainBox from '../atoms/OrderListMainBox';
import { useGet } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function OrderList(props) {
	const getFunc = useGet(`products/${props.id}/`);

	const [arr, setArr] = useState([]);

	useEffect(() => {
		getFunc().then((res) => {
			return setArr(res.data);
		});
	}, []);

	console.log(arr);
	return (
		<OrderListMainBox>
			<GoodsImg size="104px" margin="0 36px 0 0" src={arr.image} />
			<OrderItemText data={arr} quantity={props.quantity} />
			<OrderPriceBox>
				<InlineText text="-" />
			</OrderPriceBox>
			<OrderPriceBox>
				<InlineText
					text={arr.shipping_fee === 0 ? '무료배송' : Number(arr.shipping_fee).toLocaleString() + '원'}
					color={(props) => props.theme.darkGray}
					fontSize={(props) => props.theme.md}
				/>
			</OrderPriceBox>

			<OrderPriceBox>
				<InlineText
					text={Number(`${arr.price * props.quantity}`).toLocaleString() + '원'}
					fontWeight={(props) => props.theme.bold}
					fontSize={(props) => props.theme.md}
				/>
			</OrderPriceBox>
		</OrderListMainBox>
	);
}
