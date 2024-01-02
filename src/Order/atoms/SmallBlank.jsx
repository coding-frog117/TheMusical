import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const SmallBlank = styled.input`
	width: 80px;
	display: inline-block;
	height: 40px;
	font-size: ${(props) => props.theme.md};
	border: ${(props) => props.theme.lightGray} 1px solid;
`;

export default SmallBlank;
