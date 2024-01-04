import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../../assets/icon-user.svg';
import IconOn from '../../assets/icon-user-2.svg';

const MyPage = styled.img`
	width: 56px;
	height: 36px;
`;

export default function MyPageIcon(props) {
	return (
		<>
			<MyPage
				src={props.IconSrc === false ? Icon : IconOn}
				onClick={() => {
					props.setIconSrc(!props.IconSrc);
				}}
			/>
		</>
	);
}
