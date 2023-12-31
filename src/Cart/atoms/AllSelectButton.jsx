import React from 'react';
import { Input } from './RadioButton';

export default function AllSelectButton({ btnCheck, setBtnCheck }) {
	return (
		<label id="allSelect">
			<Input
				for="allSelect"
				type="checkbox"
				checked={btnCheck}
				onChange={() => {
					setBtnCheck(!btnCheck);
				}}
			/>
		</label>
	);
}
