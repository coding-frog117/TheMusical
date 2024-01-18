import React from 'react';
import styled from 'styled-components';
import { SellingBox } from '../../DashBoard/molecules/SellingTitle';

export const RankBox = styled(SellingBox)`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
	text-align: center;
	background-color: #fff;
	padding: 14px 0;
`;

export default RankBox;
