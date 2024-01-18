import React from 'react';
import RankLayout from '../atoms/RankLayout';
import RankBox from '../atoms/RankBox';
import RankTitle from '../molecules/RankTitle';
import RankItem from './RankItem';

export default function RankInfo() {
	return (
		<RankLayout>
			<RankBox>
				<RankTitle />
			</RankBox>
			<RankItem />
		</RankLayout>
	);
}
