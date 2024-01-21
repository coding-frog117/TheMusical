import React from 'react';
import { HomeLayout } from '../HomeLayout';
import { HeaderBar } from '../../Home/atoms/HeaderBar';
import HeaderLogo from '../../Home/atoms/HeaderLogo';
import SearchBar from '../../Home/molecules/SearchBar';
import { Button, Text } from '../../DashBoard/atoms/UploadButton';
import Bag from '../../assets/icon-shopping-bag.svg';
import { Outlet, useNavigate } from 'react-router-dom';
import MyPageButton from '../../Home/molecules/MyPageButton';
import styled from 'styled-components';

const Div = styled.div`
	float: right;
	margin-left: 20px;
`;

export default function SellerBasicHeader() {
	const navigator = useNavigate();

	return (
		<HomeLayout>
			<HeaderBar>
				<HeaderLogo />
				<SearchBar />
				<Div>
					<MyPageButton />
				</Div>
				<Button
					onClick={() => {
						navigator('/dashBoard');
					}}
				>
					<img src={Bag} alt="추가 버튼" />
					<Text>판매자 센터</Text>
				</Button>
			</HeaderBar>
			<Outlet />
		</HomeLayout>
	);
}
