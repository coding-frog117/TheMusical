import React from 'react';
import styled from 'styled-components';
import SellingItem from '../molecules/SellingItem';
import SellingTitle from '../molecules/SellingTitle';

export const Main = styled.main`
	width: 1440px;
	height: 884px;
	border: 1px solid ${(props) => props.theme.lightGray};
	margin: 0 auto;
	background-color: ${(props) => props.theme.whiteGray};
	overflow-y: auto;
	overflow-x: hidden;
`;

export const Div = styled.div`
	width: 1440px;
`;

export default function DashboardBox() {
	return (
		<Main>
			<SellingTitle />
			<SellingItem />
			<Div />
		</Main>
	);
}
