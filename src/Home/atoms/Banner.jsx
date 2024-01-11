import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerLayout from './BannerLayout';
import { xmlToJson } from '../../xmlToJson/xmlToJson';

const Img = styled.img`
	height: 320px;
`;

const Caption = styled.figcaption`
	font-size: ${(props) => props.theme.md};
	font-weight: 500;
	text-align: center;
	margin-top: 10px;
`;

export default function Banner() {
	const ServiceKey = '2a7c8f0ba63c4661b6a06dfdca5182a6';
	const getUrl = `http://kopis.or.kr/openApi/restful/boxoffice?service=${ServiceKey}&ststype=week&date=20240110&catecode=GGGA`;
	const getDetailUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr/PF227003?service=${ServiceKey}&newsql=Y`;
	const [boxoffice, setBoxOffice] = useState([]);

	const getdata = async () => {
		const response = await fetch(getUrl);

		const xmlString = await response.text();
		const XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');

		// import해온 xmlToJson함수 안에 변형한 XmlNode를 넣어준다. 그러면 json객체를 return해준다.
		const item = xmlToJson(XmlNode);
		setBoxOffice(item.boxofs.boxof);
	};

	useEffect(() => {
		getdata();
	}, []);

	return (
		<BannerLayout>
			{boxoffice.map((_, index) => {
				if (index < 10) {
					return (
						<figure>
							<Img src={`http://www.kopis.or.kr` + boxoffice[index].poster} />
							<Caption>{boxoffice[index].prfnm}</Caption>
						</figure>
					);
				}
			})}
		</BannerLayout>
	);
}
