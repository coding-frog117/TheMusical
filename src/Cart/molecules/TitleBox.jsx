import React, { useState } from 'react';
import GrayBox from '../atoms/GrayBox';
import TitleText from '../../Common/TitleText';
import AllSelectButton from '../atoms/AllSelectButton';
import styled from 'styled-components';
import AllDeleteModal from '../organisms/AllDeleteModal';
import { useSelector } from 'react-redux';

const AllSelect = styled.button`
	width: 70px;
	font-size: ${(props) => props.theme.sm};
	margin-left: 10px;
`;

export default function TitleBox(props) {
	const allSelect = useSelector((state) => {
		return state.cartAllSelectSlice.value;
	});
	const [modal, setModal] = useState(false);

	return (
		<GrayBox>
			<AllSelectButton allSelect={props.allSelect} setAllSelect={props.setAllSelect} />
			{allSelect == true ? (
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
