import React, { useState } from 'react';
import { HomeLayout } from '../HomeLayout';
import { HeaderBar } from '../../Home/atoms/HeaderBar';
import HeaderLogo from '../../Home/atoms/HeaderLogo';
import SearchBar from '../../Home/molecules/SearchBar';
import Buttons from '../../Home/molecules/Buttons';
import { Outlet } from 'react-router-dom';

export default function Header() {
	return (
		<HomeLayout>
			<HeaderBar>
				<HeaderLogo />
				<SearchBar />
				<Buttons />
			</HeaderBar>
			<Outlet />
		</HomeLayout>
	);
}
