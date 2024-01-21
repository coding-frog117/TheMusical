import React, { useState, useEffect } from 'react';
import InlineText from '../../Common/InlineText';
import RankImageAndName from '../molecules/RankImageAndName';
import styled from 'styled-components';
import RankBox from '../atoms/RankBox';
import { getToday } from '../../business/getToday';
import { useSelector } from 'react-redux';
import { useGetJsonData } from '../../hooks/useGetJsonData';
import { useNavigate } from 'react-router-dom';

const Div = styled(RankBox)`
	height: 154px;
	align-items: center;
	cursor: pointer;
`;

export default function RankItem() {
	const getData = useGetJsonData;
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	const today = getToday();
	const ServiceKey = useSelector((state) => {
		return state.musicalServiceKey.value;
	});
	const getUrl = `https://kopis.or.kr/openApi/restful/boxoffice?service=${ServiceKey}&ststype=week&date=${today}&catecode=GGGA`;

	useEffect(() => {
		getData(getUrl).then((data) => {
			setData(data.boxofs.boxof);
		});
	}, []);

	return (
		<>
			{data.map((item) => {
				return (
					<Div
						onClick={() => {
							navigate(`/musicalDetail/${item.mt20id}`);
						}}
					>
						<InlineText text={item.rnum} fontSize="30px" color={(props) => props.theme.mainColor} />
						<RankImageAndName item={item} />
						<InlineText text={item.prfpd} fontSize={(props) => props.theme.sm} />
						<InlineText text={item.prfplcnm} fontSize={(props) => props.theme.sm} />
					</Div>
				);
			})}
		</>
	);
}
