import styled from 'styled-components'

export const SearchBarLayout = styled.div`
  width : 400px;
  height : 46px;
  background-color : #fff;
  border-radius : 50px;
  display : inline-block;
  position : relative;
  bottom : 5px;
  border : 2px solid ${(props)=>props.theme.mainColor};
  font-size : ${(props) => props.theme.sm};
  color : ${(props) => props.theme.darkGray};
`
