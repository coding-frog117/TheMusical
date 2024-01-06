import styled from 'styled-components';

export const BigButton = styled.button`
	width: 220px;
	height: 68px;
	color: #fff;
	background-color: ${(props) => props.theme.mainColor};
	font-size: ${(props) => props.theme.xLg};
	font-weight: 700;
	border-radius: ${(props) => props.theme.radius};
	display: block;
	margin: 0 auto;
	margin-bottom: 160px;
`;

export default BigButton;
