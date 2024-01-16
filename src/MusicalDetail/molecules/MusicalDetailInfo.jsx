import React from 'react';
import MusicalInfoCont from '../atoms/MusicalInfoName';
import MusicalInfoData from '../atoms/MusicalInfoData';
import styled from 'styled-components';
import { BannerImg } from '../../Home/atoms/BannerImg';

const Dl = styled.dl`
	border-bottom: 1px solid ${(props) => props.theme.lightGray};
	padding-bottom: 25px;
`;

export default function MusicalDetailInfo({ data }) {
	return (
		<Dl>
			<MusicalInfoCont>포스터</MusicalInfoCont>
			<MusicalInfoData>
				<BannerImg src={data.poster} />
			</MusicalInfoData>
			<MusicalInfoCont>등급</MusicalInfoCont>
			<MusicalInfoData>{data.prfage}</MusicalInfoData>
			<MusicalInfoCont>관람 시간</MusicalInfoCont>
			<MusicalInfoData>{data.prfruntime}</MusicalInfoData>
			<MusicalInfoCont>출연</MusicalInfoCont>
			<MusicalInfoData>{data.prfcast}</MusicalInfoData>
			<MusicalInfoCont>가격</MusicalInfoCont>
			<MusicalInfoData>{data.pcseguidance}</MusicalInfoData>
			<MusicalInfoCont>공연 시간</MusicalInfoCont>
			<MusicalInfoData>{data.dtguidance}</MusicalInfoData>
		</Dl>
	);
}
