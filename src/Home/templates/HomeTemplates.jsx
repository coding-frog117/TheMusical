import React from 'react';
import Wrapper from '../atoms/Wrapper';
import Header from '../../Common/Header/Header';
import Banner from '../atoms/Banner';
import Main from '../organisms/Main';
import Footer from '../organisms/Footer';
import SellerTopHeader from '../../Common/Header/SellerBasicHeader';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export default function HomeTemplates() {
	const loginType = useSelector((state) => {
		return state.persistedReducer.login_type.value.payload;
	});

	console.log(loginType);
	return (
		<Wrapper>
			<Outlet />
			<Banner />
			<Main />

			<Footer />
		</Wrapper>
	);
}
