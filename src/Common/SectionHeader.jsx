import React from 'react';
import styled from 'styled-components';

const SectionHeader = styled.header`
	width: 100%;
	font-size: 35px;
	font-weight: ${(props) => props.theme.bold};
	text-align: center;
	padding: 50px 0;
	margin: ${(props) => props.margin};
`;

export default SectionHeader;
