import styled from 'styled-components';

export const SearchBarLayout = styled.div`
	width: 400px;
	height: 46px;
	background-color: #fff;
	border-radius: ${(props) => (props.searchList.length === 0 ? '50px' : '20px 20px 0 0')};
	display: inline-block;
	position: relative;
	bottom: 5px;
	border: 2px solid ${(props) => (props.searchList.length === 0 ? props.theme.mainColor : props.theme.whiteGray)};
	font-size: ${(props) => props.theme.sm};
	color: ${(props) => props.theme.darkGray};
	//box-shadow: ${(props) => (props.searchList.length === 0 ? '' : 'rgba(0, 0, 0, 0.24) 0px 2px 5px')};
`;
