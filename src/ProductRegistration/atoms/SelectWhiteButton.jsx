import styled from 'styled-components'

export const SelectWhiteButton = styled.button`
    width : 220px;
    text-align : center;
    color : ${(props)=>props.theme.darkGray};
    border : 1px solid ${(props)=>props.theme.lightGray};
    border-radius : 5px;
    font-size : ${(props)=>props.theme.sm};
    font-weight : 500;
`
export default SelectWhiteButton;