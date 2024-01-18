import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/Logo.svg';

const LogoCont = styled.div`
	text-align: center;
`;
const LogoImg = styled.img`
	width: 238px;
	height: 74px;
`;

export default function Logo() {
	return (
		<LogoCont>
			<LogoImg src={LogoImage} />
		</LogoCont>
	);
}
