import React from 'react';
import TitleText from '../../Common/TitleText';
import OrderGrayBox from '../atoms/OrderGrayBox';

export default function OrderTItleBox() {
	return (
		<OrderGrayBox>
			<TitleText text="상품정보" marginRt="360px" />
			<TitleText text="할인" marginRt="188px" />
			<TitleText text="배송비" marginRt="171px" />
			<TitleText text="주문금액" />
		</OrderGrayBox>
	);
}
