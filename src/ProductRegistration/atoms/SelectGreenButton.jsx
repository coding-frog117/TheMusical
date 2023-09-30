import styled from 'styled-components'

export const SelectGreenButton = styled.button`
    width : 220px;
    text-align : center;
    color : #fff;
    background-color : ${(props)=>props.theme.mainColor};
    border-radius : 5px;
    font-size : ${(props)=>props.theme.sm};
    font-weight : 500;
`

export default SelectGreenButton;