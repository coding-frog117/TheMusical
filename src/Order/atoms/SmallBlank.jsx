import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	width: 80px;
	display: inline-block;
	height: 40px;
	font-size: ${(props) => props.theme.md};
	border: ${(props) => props.theme.lightGray} 1px solid;
`;

export default function SmallBlank() {
	return <Input />;
}
