import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className="wraper_App">
				<Header />
				<main className="main">
					<div className="content">
						<Route path='/profile' component={Profile} />
						<Route path='/dialogs' component={Dialogs} />
					</div>
					<Aside />
					\яч
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
