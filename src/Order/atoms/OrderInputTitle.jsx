import React from 'react';
import styled from 'styled-components';

export const P = styled.p`
	width: 170px;
	font-size: 16px;
`;

export default function OrderInputTitle(props) {
	return <P>{props.text}</P>;
}
