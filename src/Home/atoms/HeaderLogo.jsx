import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

const HeaderLogoCont = styled.img`
	width: 150px;
	height: 70px;
	pointer: cursor;
	float: left;
	position: relative;
	bottom: 15px;
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
