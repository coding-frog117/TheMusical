import React from 'react';
import { CheckButton } from '../../Common/Signup with Login/Button';
import styled from 'styled-components';

const Div = styled.div`
	width: 1008px;
	margin: 0 auto;
	text-align: center;
`;

export const Button = styled(CheckButton)`
	width: 300px;
	border-radius: 50px;
	border: 2px solid ${(props) => props.theme.lightGray};
	font-size: ${(props) => props.theme.md};
	background-color: #fff;
	color: #000;
	font-weight: 400;
	margin-top: 30px;
`;

export default function MoreRankingButton() {
	return (
		<Div>
			<Button>Top 50 더보기</Button>
		</Div>
	);
}
