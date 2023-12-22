import React from 'react';
import { Div } from '../../ProductRegistration/organisms/Main';
import Caution from '../../ProductRegistration/molecules/Caution';
import EditMain from './EditMain';

export default function Main() {
	return (
		<Div>
			<Caution />
			<EditMain />
		</Div>
	);
}
