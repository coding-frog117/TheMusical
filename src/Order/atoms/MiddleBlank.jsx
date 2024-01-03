import React from 'react';
import styled from 'styled-components';

export const MiddleBlank = styled.input`
	width: 334px;
	height: 40px;
	font-size: ${(props) => props.theme.md};
	border: ${(props) => props.theme.lightGray} 1px solid;
`;

export default MiddleBlank;
