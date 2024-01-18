import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/Logo.svg';

const LogoCont = styled.div`
	text-align: center;
`;
const LogoImg = styled.img`
	width: 400px;
	height: 150px;
`;

export default function Logo() {
	return (
		<LogoCont>
			<LogoImg src={LogoImage} />
		</LogoCont>
	);
}
