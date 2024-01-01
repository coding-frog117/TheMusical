import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	width: 800px;
	height: 40px;
	font-size: ${(props) => props.theme.md};
	border: ${(props) => props.theme.lightGray} 1px solid;
	display: block;
`;

export default function BigBlank() {
	return <Input />;
}
