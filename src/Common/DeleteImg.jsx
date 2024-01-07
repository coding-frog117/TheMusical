import React from 'react';
import styled from 'styled-components';
import Delete from '../assets/icon-delete.svg';

const DeleteImg = styled.button`
	width: 22px;
	height: 22px;
	float: right;
	vertical-align: top;
	cursor: pointer;
	background-image: url(${Delete});
`;

export default DeleteImg;
