import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'styles/globalStyles.css';
import 'tailwindcss/dist/base.css';

import HomePage from 'pages/Home.js';
import AboutPage from 'pages/About.js';
import ContactPage from 'pages/Contact.js';
import PartnerPage from 'pages/Partner';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path='/lien-he'>
					<ContactPage />
				</Route>
				<Route path='/ve-chung-toi'>
					<AboutPage />
				</Route>
				<Route path='/doi-tac'>
					<PartnerPage />
				</Route>
				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}
