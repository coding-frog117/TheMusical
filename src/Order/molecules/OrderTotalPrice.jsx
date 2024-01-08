import React from 'react';
import InlineText from '../../Common/InlineText';
import OrderTotalPriceBox from '../atoms/OrderTotalPriceBox';

export default function OrderTotalPrice(props) {
	// navigate로 전달하다보니 뒤로가기 했을 때 중복되어서 전달되는 문제 발생 ,
	// 총 구매금액 -> 중복해서 더해짐 -> 뒤로가기, 앞으로가기 할 때 reload되어야 함
	return (
		<OrderTotalPriceBox>
			<InlineText text="총 주문금액 " fontSize={(props) => props.theme.md} fontWeight="500" />
			<InlineText
				text={props.price.toLocaleString() + '원'}
				color={(props) => props.theme.red}
				fontSize={(props) => props.theme.xLg}
				fontWeight={(props) => props.theme.bold}
			/>
		</OrderTotalPriceBox>
	);
}
