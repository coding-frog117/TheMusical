import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGet } from '../../hooks/useFetch';

const Div = styled.div`
	width: 100%;
	height: 500px;
	font-size: ${(props) => props.theme.md};
`;

export default function MainCont(props) {
	const { id } = useParams();
	const getFunc = useGet(`products/${id}`);
	const [data, setData] = useState('');

	useEffect(() => {
		getFunc().then((res) => {
			return setData(res.data.product_info);
		});
	}, []);

	return <Div>{props.button === 0 ? data.slice(12) : null}</Div>;
}
