import React from 'react';
import styled from 'styled-components';

export const AddressBlank = styled.input`
	width: 170px;
	height: 40px;
	border: ${(props) => props.theme.lightGray} 1px solid;
	margin-right: 10px;
	font-size: ${(props) => props.theme.sm};
`;

export default AddressBlank;
