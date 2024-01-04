import React, { useEffect, useState } from 'react';
import SellingItemImg from '../../DashBoard/atoms/SellingItemImg';
import { Li } from '../../DashBoard/molecules/SellingItem';
import { useGet } from '../../hooks/useFetch';
import InlineText from '../../Common/InlineText';
import OrderItemName from './OrderItemName';
import styled from 'styled-components';

const List = styled(Li)`
	display: grid;
	grid-template-columns: 0fr 5fr 1fr 1fr 1fr;
`;

export default function OrderItem(props) {
	const getFunc = useGet(`/products/${props.id}/`);
	const [data, setData] = useState([]);

	useEffect(() => {
		getFunc().then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<List>
			<SellingItemImg src={data.image} />
			<OrderItemName text={data.product_name} count={data.stock} id={data.product_id} />
			<InlineText text={props.time.slice(0, 10)} fontSize={(props) => props.theme.sm} />
			<InlineText text={props.price.toLocaleString() + '원'} fontSize={(props) => props.theme.sm} />
			<InlineText text={props.status == 'COMPLETE_PAYMENT' ? '결제완료' : null} fontSize={(props) => props.theme.sm} />
		</List>
	);
}
