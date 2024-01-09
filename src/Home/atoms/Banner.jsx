import React, { useEffect } from 'react';
import styled from 'styled-components';
// import convert from 'xml-js';

const Img = styled.img`
	width: 100%;
	height: 500px;
`;

export default function Banner() {
	const ServiceKey = '2a7c8f0ba63c4661b6a06dfdca5182a6';
	const getUrl = `/openApi/restful/boxoffice?service=${ServiceKey}&ststype=day&date=20240102&catecode=AAAA&area=11`;

	useEffect(() => {
		fetch(getUrl, { method: 'GET' }).then((res) => {
			console.log(res);
		});
	}, []);

	return <Img />;
}
