import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Profile } from './Components/Profile';
import { configureStore } from './redux/store';

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<>
			<Main />
		</>
	</Provider>
);

export default hot(module)(App);
