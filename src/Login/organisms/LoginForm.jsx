import React, { useState } from 'react';
import Form from '../../Common/Signup with Login/Form';
import BuyWithSellSelectTab from '../../Common/Signup with Login/BuyWithSellSelectTab';
import InputForm from '../molecules/InputForm';
import WarningText from '../atoms/WarningText';
import JoinWithSignupButton from '../../Common/Signup with Login/JoinWithSignupButton';
import { useForm, FormProvider } from 'react-hook-form';
import login from '../../apis/login';
import { usePost } from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(props) {
	const [buySelect, setBuySelect] = useState(true);
	const [sellSelect, setSellSelect] = useState(false);
	const [warningText, setWarningText] = useState('');

	const selector = useSelector((state) => {
		return state;
	});
	console.log(selector);

	const postFunc = usePost('accounts/login/');

	const methods = useForm();
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	let dispatch = useDispatch();

	const navigate = useNavigate();

	return (
		<>
			<BuyWithSellSelectTab
				buySelect={buySelect}
				setBuySelect={setBuySelect}
				sellSelect={sellSelect}
				setSellSelect={setSellSelect}
			/>
			<FormProvider {...methods}>
				<Form
					onSubmit={handleSubmit(async (data) => {
						await new Promise((r) => setTimeout(r, 1000));
						login(data, postFunc, buySelect, setWarningText, dispatch, navigate);
					})}
				>
					<InputForm />

					<WarningText text={warningText} />
					<JoinWithSignupButton disabled={isSubmitting}>로그인</JoinWithSignupButton>
				</Form>
			</FormProvider>
		</>
	);
}
