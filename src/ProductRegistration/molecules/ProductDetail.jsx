import React from 'react';
import GrayTitleText from '../atoms/GrayTitleText';
import EditorBox from '../atoms/EditorBox';
import styled from 'styled-components';

const Div = styled.div`
	margin-top: 40px;
`;

export default function ProductDetail(props) {
	return (
		<Div>
			<GrayTitleText text="상품 상세 정보" />
			<EditorBox info={props.info} text="에디터 영역" />
		</Div>
	);
}
