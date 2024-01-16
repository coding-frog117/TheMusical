import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import { useGetJsonData } from '../../hooks/useGetJsonData';

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
	const getData = useGetJsonData;
	const navigate = useNavigate();
	const ServiceKey = useSelector((state) => {
		return state.musicalServiceKey.value;
	});
	const getUrl = `http://kopis.or.kr/openApi/restful/boxoffice?service=${ServiceKey}&ststype=week&date=20240110&catecode=GGGA`;
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

	useEffect(() => {
		getData(getUrl).then((data) => {
			makeNewArray(data.boxofs.boxof);
		});
	}, []);

	console.log(boxoffice);

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
								<figure
									onClick={() => {
										navigate(`/musicalDetail/${item.mt20id}`);
									}}
								>
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
