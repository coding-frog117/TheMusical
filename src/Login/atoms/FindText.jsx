import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FindText = styled(Link)`
	font-size: ${(props) => props.theme.sm};
	color: #333333;
	text-align: center;
`;
