import React, { useState } from 'react';
import GrayBox from '../atoms/GrayBox';
import TitleText from '../../Common/TitleText';
import RadioButton from '../atoms/RadioButton';

export default function TitleBox() {
	const [btnCheck, setBtnCheck] = useState(true);

	if (btnCheck == true) {
	}

	return (
		<GrayBox>
			<RadioButton btnCheck={btnCheck} setBtnCheck={setBtnCheck} />
			<span>전체 삭제</span>
			<TitleText text="상품정보" marginLt="304px" marginRt="359px" />
			<TitleText text="수량" marginRt="230px" />
			<TitleText text="상품금액" marginRt="100px" />
		</GrayBox>
	);
}
