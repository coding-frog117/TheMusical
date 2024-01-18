import React from 'react';
import GoodsLayout from '../atoms/GoodsLayout';
import Goods from '../molecules/Goods';
import { HomeLayout } from '../../Common/HomeLayout';
import SectionHeader from '../../Common/SectionHeader';

export default function Main() {
	return (
		<HomeLayout>
			<SectionHeader margin="50px 0 0">New</SectionHeader>
			<GoodsLayout>
				<Goods />
			</GoodsLayout>
		</HomeLayout>
	);
}
