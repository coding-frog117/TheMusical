import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton'
import Layout from '../../Common/Signup with Login/Layout';
import Logo from '../../Common/Signup with Login/Logo';
import SignupForm from '../organisms/SignupForm';
import Terms from '../../Common/Terms';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';

export default function SignupTemplates() {
  const navigate = useNavigate();

  const gotoLogin = ()=>{
    navigate('/login');
  }

  const Button = styled.button`
    width : 100%;
    height : 60px;
    background-color : ${(props)=>props.bgColor};
    font-weight : 700;
    font-size : ${(props)=>props.theme.md};
    color : #fff;
    border-radius : 5px;
  `

  return ( 
    <Layout>
        <Logo />
        <SignupForm />
        <Terms text = "OO마켓의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다."/>
        <Button onClick = {gotoLogin} bgColor = {(props)=>props.theme.lightGray} >가입하기</Button>
    </Layout>
  )
}
