import styled from 'styled-components';

export const MyPageModalLayout = styled.div`
	width: 150px;
	border: 2px solid ${(props) => props.theme.lightGray};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px;
	z-index: 10;
	position: absolute;
	right: -10px;
	top: 100px;
`;

export default MyPageModalLayout;
