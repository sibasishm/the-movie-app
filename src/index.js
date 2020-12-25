import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import { App } from './app';
import { AppProviders } from './context';

ReactDOM.render(
	<AppProviders>
		<App />
	</AppProviders>,
	document.getElementById('root')
);
