import styled from 'styled-components';

const MyPageModalButton = styled.button`
	font-size: ${(props) => props.theme.sm};
	color: ${(props) => props.theme.darkGray};
	font-weight: ${(props) => props.theme.bold};
	padding: 10px;
	border-radius: 5px;

	&:hover {
		border: 2px solid ${(props) => props.theme.darkGray};
		color: #000;
	}
`;

export default MyPageModalButton;
