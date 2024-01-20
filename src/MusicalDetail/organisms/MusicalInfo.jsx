import React, { useEffect, useState } from 'react';
import AssociateProductList from './AssociateProductList';
import Header from '../../Common/Header/Header';
import { MusicalName } from '../atoms/MusicalName';
import { InfoLayout } from '../atoms/InfoLayout';
import { MusicalImg } from '../atoms/MusicalImg';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetJsonData } from '../../hooks/useGetJsonData';
import styled from 'styled-components';
import InlineText from '../../Common/InlineText';
import MusicalHeader from '../molecules/MusicalHeader';
import MusicalDetailInfo from '../molecules/MusicalDetailInfo';
import MusicalHeaderCont from '../atoms/MusicalHeaderCont';

const ImgCont = styled.div`
	width: 850px;
	display: flex;
	flex-direction: column;
`;

export default function MusicalInfo() {
	const [musicalData, setMusicalData] = useState('');
	const [name, setName] = useState();
	const getData = useGetJsonData;
	const { id } = useParams();
	const ServiceKey = useSelector((state) => {
		return state.musicalServiceKey.value;
	});

	const getUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr/${id}?service=${ServiceKey}&usesql=Y`;

	const getMusicalData = (getUrl) => {
		getData(getUrl).then((res) => {
			console.log(res.dbs.db);
			setMusicalData(res.dbs.db);
			setName(res.dbs.db.prfnm);
		});
	};

	useEffect(() => {
		getMusicalData(getUrl);
	}, []);

	return (
		<>
			<MusicalHeader data={musicalData} />
			<InfoLayout>
				<ImgCont>
					<MusicalDetailInfo data={musicalData} />
					<MusicalHeaderCont>
						<InlineText text="상세 정보" fontSize="20px" />
					</MusicalHeaderCont>

					{musicalData.styurls ? (
						Array.isArray(musicalData.styurls.styurl) ? (
							musicalData.styurls.styurl.map((item) => {
								return <MusicalImg src={item} alt="공연 상세 정보" />;
							})
						) : (
							<MusicalImg src={musicalData.styurls.styurl} alt="공연 상세 정보" />
						)
					) : null}
				</ImgCont>
				<AssociateProductList name={name} />
			</InfoLayout>
		</>
	);
}
