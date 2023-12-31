import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function Token() {
	const selector = useSelector((state) => {
		return state.persistedReducers.token.value;
	});
}
