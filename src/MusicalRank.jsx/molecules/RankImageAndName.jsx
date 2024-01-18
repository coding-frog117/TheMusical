import React from 'react';
import AssociateImage from '../../MusicalDetail/atoms/AssociateImage';
import InlineText from '../../Common/InlineText';
import styled from 'styled-components';
import TitleText from '../../Common/TitleText';

const Figure = styled.figure`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export default function RankImageAndName({ item }) {
	return (
		<Figure>
			<AssociateImage src={'https://www.kopis.or.kr' + item.poster} />
			<InlineText text={item.prfnm} fontSize={(props) => props.theme.sm} />
		</Figure>
	);
}
