import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'styles/globalStyles.css';
import 'tailwindcss/dist/base.css';

import HotelTravelLandingPage from 'pages/HotelTravelLandingPage.js';
import AboutUsPage from 'pages/AboutUs.js';
import ContactUsPage from 'pages/ContactUs.js';
import BlogIndexPage from 'pages/BlogIndex';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path='/lien-he'>
					<ContactUsPage />
				</Route>
				<Route path='/ve-chung-toi'>
					<AboutUsPage />
				</Route>
				<Route path='/doi-tac'>
					<BlogIndexPage />
				</Route>
				<Route path='/'>
					<HotelTravelLandingPage />
				</Route>
			</Switch>
		</Router>
	);
}
