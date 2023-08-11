import styled from 'styled-components'

const Button = styled.button`
    width : 220px;
    height : ${(props)=>props.height};
    text-align : center;
    color : ${(props)=>props.theme.darkGray};
    border : 1px solid ${(props)=>props.theme.lightGray};
    border-radius : 5px;
    font-size : ${(props)=>props.theme.sm};
    font-weight : 500;
`
export default function SelectWhiteButton(props){
    return(
        <Button height = {props.height}>{props.text}</Button>
        )
}