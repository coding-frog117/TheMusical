import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton'
import Layout from '../../Common/Signup with Login/Layout';
import Logo from '../../Common/Signup with Login/Logo';
import SignupForm from '../organisms/SignupForm';
import Terms from '../molecules/Terms';

export default function SignupTemplates() {
  return (
    <Layout>
        <Logo />
        <SignupForm />
        <Terms />
        <JoinWithSignupButton text = "가입하기"/>
    </Layout>
  )
}
