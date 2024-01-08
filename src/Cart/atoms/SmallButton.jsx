import styled from 'styled-components';

const SmallButton = styled.button`
	width: 130px;
	height: ${(props) => props.height};
	color: #fff;
	background-color: ${(props) => props.bgColor};
	font-size: ${(props) => props.theme.sm};
	font-weight: 500;
	border-radius: ${(props) => props.theme.radius};
`;

export default SmallButton;
