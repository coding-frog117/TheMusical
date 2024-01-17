import React from 'react';
import InlineText from '../../Common/InlineText';
import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	padding: 30px;
`;

export default function AssociateNoneProduct() {
	return (
		<Div>
			<InlineText
				text="관련 상품이 없습니다."
				fontSize={(props) => props.theme.sm}
				fontWeight={(props) => props.theme.bold}
			/>
		</Div>
	);
}
