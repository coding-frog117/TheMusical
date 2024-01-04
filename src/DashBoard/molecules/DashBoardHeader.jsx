import React from 'react';
import styled from 'styled-components';
import InlineText from '../../Common/InlineText';
import UploadButton from '../atoms/UploadButton';

export const H2 = styled.h2`
	width: 1720px;
	margin: 0 auto;
	margin-bottom: 42px;
`;

export default function DashBoardHeader() {
	return (
		<H2>
			<InlineText
				text="대시보드"
				fontSize={(props) => props.theme.big}
				fontWeight={(props) => props.theme.bold}
				margin="0 16px 0 0"
			/>
			<InlineText
				text="백엔드글로벌"
				fontSize={(props) => props.theme.big}
				color={(props) => props.theme.mainColor}
				fontWeight="500"
			/>
			<UploadButton text="상품 업로드" />
		</H2>
	);
}
