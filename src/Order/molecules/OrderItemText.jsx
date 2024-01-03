import React from 'react';
import OrderItemTextBox from '../atoms/OrderItemTextBox';
import Text from '../../Cart/atoms/Text';

export default function OrderItemText(props) {
	const data = props.data;
	const quantity = props.quantity;

	return (
		<OrderItemTextBox>
			<Text text={data.store_name} fontSize="14px" color={(props) => props.theme.darkGray} margin="0 0 6px" />
			<Text text={data.product_name} fontSize={(props) => props.theme.md} margin="0 0 10px" />
			<Text text={`수량${quantity}개`} fontSize="14px" color={(props) => props.theme.darkGray} />
		</OrderItemTextBox>
	);
}
