import React from 'react';
import OrderItemText from '../molecules/OrderItemText';
import GoodsImg from '../../Common/GoodsImg';
import OrderPriceBox from '../atoms/OrderPriceBox';
import InlineText from '../../Common/InlineText';
import OrderListMainBox from '../atoms/OrderListMainBox';
import OrderListBox from '../atoms/OrderListBox';

export default function OrderList(props) {
	const arr2 = [1, 2, 3];

	return (
		<OrderListBox>
			<OrderListMainBox>
				<GoodsImg size="104px" margin="0 36px 0 0" src={props.data.image} />
				<OrderItemText data={props.data} quantity={props.quantity} />
				<OrderPriceBox>
					<InlineText text="-" />
				</OrderPriceBox>
				<OrderPriceBox>
					<InlineText
						text={props.data.shipping_fee === 0 ? '무료배송' : Number(props.data.shipping_fee).toLocaleString() + '원'}
						color={(props) => props.theme.darkGray}
						fontSize={(props) => props.theme.md}
					/>
				</OrderPriceBox>

				<OrderPriceBox>
					<InlineText
						text={Number(`${props.data.price * props.quantity}`).toLocaleString() + '원'}
						fontWeight={(props) => props.theme.bold}
						fontSize={(props) => props.theme.md}
					/>
				</OrderPriceBox>
			</OrderListMainBox>
		</OrderListBox>
	);
}
