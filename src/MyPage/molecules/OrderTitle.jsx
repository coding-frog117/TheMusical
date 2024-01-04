import React from 'react';
import { SellingBox } from '../../DashBoard/molecules/SellingTitle';
import TitleText from '../../Common/TitleText';
import styled from 'styled-components';
import InlineText from '../../Common/InlineText';

const Div = styled(SellingBox)`
	display: grid;
	grid-template-columns: 5fr 1fr 1fr 1fr;
`;

export default function OrderTitle() {
	return (
		<Div>
			<InlineText text="상품정보" fontSize={(props) => props.theme.md} margin="0 auto" />
			<TitleText text="주문일자" />
			<TitleText text="주문금액" />
			<TitleText text="주문상태" />
		</Div>
	);
}
