import React from 'react';
import Wrapper from '../atoms/Wrapper';
import Header from '../../Common/Header/Header';
import Banner from '../atoms/Banner';
import Main from '../organisms/Main';
import Footer from '../organisms/Footer';

export default function HomeTemplates() {
	return (
		<Wrapper>
			<Header />

			<Banner />
			<Main />

			<Footer />
		</Wrapper>
	);
}
