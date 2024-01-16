import styled from 'styled-components';

export const ProductLayout = styled.li`
	width: 300px;
	height: 154px;
	padding: 16px;
	margin: ${(props) => props.margin};
	border-bottom: 1px solid ${(props) => props.borderBottom};
`;
