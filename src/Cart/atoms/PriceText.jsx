import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
	color: #eb5757;
	font-size: ${(props) => props.theme.md};
	font-weight: ${(props) => props.theme.bold};
	display: inline-block;
	margin-bottom: 26px;
`;
export default function PriceText(props) {
	return <Span>{props.text}</Span>;
}
