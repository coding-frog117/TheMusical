import React, { useState } from 'react';
import GrayBox from '../atoms/GrayBox';
import TitleText from '../../Common/TitleText';
import AllSelectButton from '../atoms/AllSelectButton';
import styled from 'styled-components';
import AllDeleteModal from '../organisms/AllDeleteModal';

export default function TitleBox() {
	const [btnCheck, setBtnCheck] = useState(true);
	const [modal, setModal] = useState(false);

	const AllSelect = styled.button`
		width: 70px;
		font-size: ${(props) => props.theme.sm};
		margin-left: 10px;
	`;

	return (
		<GrayBox>
			<AllSelectButton btnCheck={btnCheck} setBtnCheck={setBtnCheck} />
			{btnCheck == true ? (
				<AllSelect
					onClick={() => {
						setModal(true);
					}}
				>
					전체삭제
				</AllSelect>
			) : (
				<AllSelect />
			)}
			{modal == true ? <AllDeleteModal modal={modal} setModal={setModal} /> : null}
			<TitleText text="상품정보" marginLt="304px" marginRt="315px" />
			<TitleText text="수량" marginRt="230px" />
			<TitleText text="상품금액" marginRt="90px" />
		</GrayBox>
	);
}
