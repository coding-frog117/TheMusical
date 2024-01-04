import React from 'react';
import { OrderItemNameLayout } from '../atoms/OrderItemNameLayout';
import InlineText from '../../Common/InlineText';
import { useNavigate } from 'react-router-dom';

export default function OrderItemName(props) {
	const navigator = useNavigate();

	return (
		<OrderItemNameLayout
			onClick={() => {
				navigator(`/productDetail/${props.id}`);
			}}
		>
			<InlineText text={props.text} fontSize={(props) => props.theme.md} />
			<InlineText
				text={`재고 : ${props.count}개`}
				color={(props) => props.theme.darkGray}
				fontSize={(props) => props.theme.sm}
			/>
		</OrderItemNameLayout>
	);
}
