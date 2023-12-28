import React from 'react';
import { useState } from 'react';
import PlusIcon from '../assets/icon-plus-line.svg';
import MinusIcon from '../assets/icon-minus-line.svg';
import CountButton from './CountButton';
import CountText from '../GoodsDetail/atoms/CountText';
import ControllButtonFrame from '../Cart/atoms/ControllButtonFrame';
import styled from 'styled-components';

const PlusButton = styled(CountButton)`
	background-image: url(${PlusIcon});
`;

const MinusButton = styled(CountButton)`
	background-image: url(${MinusIcon});
`;

export default function CountControllButton({ count, setCount }) {
	return (
		<ControllButtonFrame>
			<MinusButton
				onClick={() => {
					if (count > 1) {
						setCount(count - 1);
					}
				}}
			/>
			<CountButton>
				<CountText>{count}</CountText>
			</CountButton>
			<PlusButton onClick={() => setCount(count + 1)} />
		</ControllButtonFrame>
	);
}
