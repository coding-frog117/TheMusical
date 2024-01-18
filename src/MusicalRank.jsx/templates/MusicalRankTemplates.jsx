import React from 'react';
import SectionHeader from '../../Common/SectionHeader';
import { HomeLayout } from '../../Common/HomeLayout';
import RankInfo from '../organisms/RankInfo';
import Header from '../../Common/Header/Header';

export default function MusicalRankTemplates() {
	return (
		<HomeLayout>
			<Header />
			<SectionHeader>주간 랭킹</SectionHeader>
			<RankInfo />
		</HomeLayout>
	);
}
