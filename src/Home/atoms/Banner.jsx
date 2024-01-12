import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import BannerLayout from './BannerLayout';
import { xmlToJson } from '../../xmlToJson/xmlToJson';
import InlineText from '../../Common/InlineText';
import Prev from '../../assets/prev.png';
import Next from '../../assets/next.png';
import { Caption } from './Caption';
import { BannerImg } from './BannerImg';
import { Slider } from './Slider';
import { BannerIconCont } from './BannerIconCont';
import { Icon } from './Icon';

const Div = styled.div`
	width: 100%;
	display: relative;
`;

const LeftIcon = styled(BannerIconCont)`
	right: 100%;
`;

const RightIcon = styled(BannerIconCont)`
	left: 100%;
`;

export default function Banner() {
	const ServiceKey = '2a7c8f0ba63c4661b6a06dfdca5182a6';
	const getUrl = `http://kopis.or.kr/openApi/restful/boxoffice?service=${ServiceKey}&ststype=week&date=20240110&catecode=GGGA`;
	const getDetailUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr/PF227003?service=${ServiceKey}&newsql=Y`;
	const [boxoffice, setBoxOffice] = useState([]);
	const [swipIndex, setSwipIndex] = useState(2);
	const [carouselTransition, setCarouselTransition] = useState('all 0.5s ease-in-out');
	const TOTAL_SLIDE = 10;

	const sliceArray = (arr) => {
		return arr.slice(0, TOTAL_SLIDE);
	};

	const makeNewArray = (arr) => {
		const firstData = arr[0];
		const lastMinusOneData = arr[TOTAL_SLIDE - 2];
		const lastData = arr[TOTAL_SLIDE - 1];
		const slicedData = sliceArray(arr);

		const newArray = [lastMinusOneData, lastData, ...slicedData, ...slicedData, firstData];
		setBoxOffice(newArray);
	};

	const prevSlide = () => {
		const newCurr = swipIndex - 1;
		setSwipIndex(newCurr);

		if (newCurr === 1) {
			moveToNthSlide(TOTAL_SLIDE + 1);
		}
		setCarouselTransition('all 0.5s ease-in-out');
	};

	const nextSlide = () => {
		const newCurr = swipIndex + 1;
		setSwipIndex(newCurr);

		if (newCurr === TOTAL_SLIDE + 1) {
			moveToNthSlide(1);
		}

		setCarouselTransition('all 0.5s ease-in-out');
	};

	const moveToNthSlide = (n) => {
		setTimeout(() => {
			setCarouselTransition('');
			setSwipIndex(n);
		}, 500);
	};

	const getdata = async () => {
		const response = await fetch(getUrl);

		const xmlString = await response.text();
		const XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');

		// import해온 xmlToJson함수 안에 변형한 XmlNode를 넣어준다. 그러면 json객체를 return해준다.
		const item = xmlToJson(XmlNode);
		return item.boxofs.boxof;
	};

	useEffect(() => {
		getdata().then((data) => {
			makeNewArray(data);
		});
	}, []);

	return (
		<>
			<Div>
				<Slider>
					<LeftIcon>
						<Icon src={Prev} onClick={prevSlide} />
					</LeftIcon>
					<BannerLayout
						style={{
							transform: `translateX(-${swipIndex * 255}px)`,
							transition: `${carouselTransition}`,
						}}
					>
						{boxoffice.map((item) => {
							return (
								<figure>
									<InlineText
										text={item.rnum}
										fontSize={(props) => props.theme.big}
										fontWeight={(props) => props.theme.bold}
										color={(props) => props.theme.lightGray}
									/>
									<BannerImg src={`http://www.kopis.or.kr` + item.poster} alt={item.prfnm} />
									<Caption>{item.prfnm}</Caption>
								</figure>
							);
						})}
					</BannerLayout>

					<RightIcon>
						<Icon src={Next} onClick={nextSlide} />
					</RightIcon>
				</Slider>
			</Div>
		</>
	);
}
