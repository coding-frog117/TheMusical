import React from 'react';
import styled from 'styled-components';
import SelectGreenButton from '../atoms/SelectGreenButton';
import SelectWhiteButton from '../atoms/SelectWhiteButton';
import { useNavigate } from 'react-router-dom';

const Span = styled.div`
	text-align: right;
	margin-top: 50px;
`;

const SaveButton = styled(SelectGreenButton)`
	height: 60px;
	margin: 0 0 0 10px;
`;

const CancelButton = styled(SelectWhiteButton)`
	height: 60px;
`;

export default function SaveAndCancelBtn() {
	const navigator = useNavigate();

	return (
		<Span>
			<CancelButton
				type="button"
				onClick={() => {
					navigator(-1);
				}}
			>
				취소
			</CancelButton>
			<SaveButton type="submit">저장하기</SaveButton>
		</Span>
	);
}
