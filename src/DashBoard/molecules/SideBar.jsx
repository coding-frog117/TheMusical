import React from 'react';
import styled from 'styled-components';
import Category from '../atoms/Category';

const Ul = styled.ul`
	display: flex;
	gap: 10px;
	flex-direction: column;
`;

export default function SideBar(props) {
	return (
		<Ul>
			<Category categoryName={props.categoryName} />
		</Ul>
	);
}
