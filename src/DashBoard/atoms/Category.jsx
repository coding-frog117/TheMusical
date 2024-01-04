import React, { useState } from 'react';
import styled from 'styled-components';

export const Li = styled.li`
	width: 250px;
	height: 50px;
	padding: 15px 20px;
	font-size: 16px;
	list-style: none;
	border-radius: ${(props) => props.theme.radius};
	color: ${(props) => (props.backgroundColor == false ? 'black' : 'white')};
	background-color: ${(props) => (props.backgroundColor == false ? 'white' : (props) => props.theme.mainColor)};

	&:hover {
		background-color: #effff3;
		color: black;
	}
`;

export default function Category(props) {
	const [bgColor, setBgColor] = useState(0);

	return (
		<>
			{props.categoryName.map((a, i) => (
				<Li
					backgroundColor={bgColor === i ? true : false}
					onClick={() => {
						setBgColor(i);
					}}
				>
					{a}
				</Li>
			))}
		</>
	);
}
