import styled from "styled-components"

export const AutoCompleteLayout = styled.div`
  display : ${(props)=>props.display};
  position : absolute;
  width : 397px;
  border : 2px solid ${(props)=>props.theme.whiteGray};
  border-radius : 0 0 20px 20px;
  padding-bottom :20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px;
`