import React from 'react';
import InlineText from '../../Common/InlineText';
import OrderTotalPriceBox from '../atoms/OrderTotalPriceBox';

export default function OrderTotalPrice(props) {
	return (
		<OrderTotalPriceBox>
			<InlineText text="총 주문금액 " fontSize={(props) => props.theme.md} fontWeight="500" />
			<InlineText
				text={(props.data.price * props.quantity + props.data.shipping_fee).toLocaleString() + '원'}
				color={(props) => props.theme.red}
				fontSize={(props) => props.theme.xLg}
				fontWeight={(props) => props.theme.bold}
			/>
		</OrderTotalPriceBox>
	);
}
