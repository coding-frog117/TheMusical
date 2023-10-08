import styled from "styled-components"

export const AutoCompleteResult = styled.div`
  height : 40px;
  line-height : 40px;
  font-size : 16px;
  padding-left : 22px;
  z-index : 50;
  display : ${(props)=>props.display};
  position : relative;
  background-color : #fff;

  &:hover{
    background-color : ${(props)=>props.theme.whiteGray};
  }
`