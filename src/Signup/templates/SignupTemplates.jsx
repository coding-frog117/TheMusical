import { useState } from 'react';
import Layout from '../../Common/Signup with Login/Layout';
import Logo from '../../Common/Signup with Login/Logo';
import SignupForm from '../organisms/SignupForm';
import Terms from '../../Common/Terms';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignupTemplates() {
  const [id , setId] = useState('');
  const [password , setPassword] = useState('');
  const [name , setName] = useState('');
  const [phoneFirst , setPhoneFirst] = useState('');
  const [phoneSecond, setPhoneSecond] = useState('');
  const [phoneThird , setPhoneThird] = useState('');
  const [emailFirst , setEmailFirst] = useState('');
  const [emailSecond , setEmailSecond] = useState('');
  const [termsInput, setTermsInput] = useState(false);

  console.log(termsInput)

  const [buttonColor, setButtonColor] = useState('#C4C4C4');

  const navigate = useNavigate();

  // const gotoLogin = ()=>{
  //   navigate('/login');
  // }


  console.log(phoneFirst);
 

  return (              
      <>         
        <Logo />
        <SignupForm />
      </>    
  )
}
