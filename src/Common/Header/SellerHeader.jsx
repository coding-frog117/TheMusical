import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../Home/atoms/HeaderLogo';
import { Outlet } from 'react-router-dom';
import { HomeLayout } from '../HomeLayout';

export const H1 = styled.h1`
	width: 100%;
	height: 90px;
	padding: 26px 0;
	margin: 0 auto;
	font-size: 30px;
	font-weight: 500;
	box-shadow: 4px 0 5px gray;
`;

export const Div = styled.div`
	width: 1720px;
	margin: 0 auto;
	font-size: 30px;
	font-weight: 500;
`;

export default function SellerHeader() {
	return (
		<HomeLayout>
			<H1>
				<HeaderLogo />
				<Div>판매자 센터</Div>
			</H1>
			<Outlet />
		</HomeLayout>
	);
}
