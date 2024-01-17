import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo-hodu.png';
import { useNavigate } from 'react-router-dom';

const HeaderLogoCont = styled.img`
	width: 124px;
	height: 38px;
	margin-right: 30px;
	position: relative;
	top: 7px;
	pointer: cursor;
`;

export default function HeaderLogo() {
	const navigate = useNavigate();

	return (
		<HeaderLogoCont
			src={Logo}
			onClick={() => {
				navigate('/');
			}}
		/>
	);
}
