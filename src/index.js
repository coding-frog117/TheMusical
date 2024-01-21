import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './store.js';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
