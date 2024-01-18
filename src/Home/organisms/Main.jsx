import React from 'react';
import GoodsLayout from '../atoms/GoodsLayout';
import Goods from '../molecules/Goods';
import { HomeLayout } from '../../Common/HomeLayout';
import SectionHeader from '../atoms/SectionHeader';
export default function Main() {
	return (
		<HomeLayout>
			<SectionHeader>New</SectionHeader>
			<GoodsLayout>
				<Goods />
			</GoodsLayout>
		</HomeLayout>
	);
}
