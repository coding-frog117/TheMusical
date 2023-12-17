import { createSlice } from '@reduxjs/toolkit';

export const publicToken = createSlice({
	name: 'publicToken',
	initialState: {
		value:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTcsImVtYWlsIjoiIiwidXNlcm5hbWUiOiJiZWFyc2VsbGVyMSIsImV4cCI6MTcwMzQyNjY2MH0.FaBpoeWKYwStYPK4H9RS6VG_KLR6h8sdCnjjySQBtxE',
	},
});
