import React from 'react';
import InlineText from '../../Common/InlineText';
import { H2 } from '../../DashBoard/molecules/DashBoardHeader';

export default function Header() {
	return (
		<H2>
			<InlineText
				text="주문/배송 조회"
				fontSize={(props) => props.theme.big}
				fontWeight={(props) => props.theme.bold}
			/>
		</H2>
	);
}
