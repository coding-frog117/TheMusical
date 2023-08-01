import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton'
import Layout from '../../Common/Signup with Login/Layout';
import Logo from '../../Common/Signup with Login/Logo';
import SignupForm from '../organisms/SignupForm';
import Terms from '../../Common/Terms';

export default function SignupTemplates() {
  return (
    <Layout>
        <Logo />
        <SignupForm />
        <Terms text = "OO마켓의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다."/>
        <JoinWithSignupButton text = "가입하기"/>
    </Layout>
  )
}
