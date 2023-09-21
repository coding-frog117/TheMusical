import styled from 'styled-components'

const Button = styled.button`
    width : 220px;
    height : ${(props)=>props.height};
    text-align : center;
    color : #fff;
    background-color : ${(props)=>props.theme.mainColor};
    border-radius : 5px;
    font-size : ${(props)=>props.theme.sm};
    font-weight : 500;
    margin : ${(props)=>props.margin};
`

export default function SelectGreenButton(props){
    return(
    <Button
     height = {props.height} 
     margin = {props.margin}
     >{props.text}</Button>
    )
}