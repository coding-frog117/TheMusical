import styled from 'styled-components';

export const Icon = styled.img`
	width: 80px;
	height: 80px;
	position: absolute;
	background-color: ${(props) => props.theme.darkGray};
	opacity: 0.8;
	border-radius: 50%;
	z-index: 10;
	cursor: pointer;
`;
