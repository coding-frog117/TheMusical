import React from 'react';
import SectionHeader from '../../Common/SectionHeader';
import { HomeLayout } from '../../Common/HomeLayout';
import RankInfo from '../organisms/RankInfo';

export default function MusicalRankTemplates() {
	return (
		<HomeLayout>
			<SectionHeader>주간 랭킹</SectionHeader>
			<RankInfo />
		</HomeLayout>
	);
}
