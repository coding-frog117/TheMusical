import React, { useState } from 'react';
import styled from 'styled-components';
import SelectTabLayout from './SelectTabLayout';
import SelectTab from './SelectTab';

const Tab = styled(SelectTab)`
	background-color: ${(props) => props.bgColor};
`;

export default function BuyWithSellSelectTab(props) {
	return (
		<SelectTabLayout>
			<Tab
				bgColor={props.buySelect === true ? '#fff' : (props) => props.theme.lightGray}
				onClick={() => {
					props.setBuySelect(true);
					props.setSellSelect(false);
				}}
			>
				{props.buyer}
			</Tab>

			<Tab
				bgColor={props.sellSelect === true ? '#fff' : (props) => props.theme.lightGray}
				onClick={() => {
					props.setSellSelect(true);
					props.setBuySelect(false);
				}}
			>
				{props.seller}
			</Tab>
		</SelectTabLayout>
	);
}
