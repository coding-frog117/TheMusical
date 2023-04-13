import JoinButton from "./Signup/molecules/JoinButton";
import Layout from './Common/Signup with Login/Layout'
import Logo from "./Signup/atoms/Logo";
import SignupForm from "./Signup/organisms/SignupForm";
import Terms from './Signup/molecules/Terms'

function App() {
    return (
    <Layout>
        <Logo />
        <SignupForm />
        <Terms />
        <JoinButton text = "가입하기"/>
    </Layout>
  );
}

export default App;
