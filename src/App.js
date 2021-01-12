import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import './App.css';


const App = () => {
	return (
		<BrowserRouter>
			<div className="wraper_App">
				<Header />
				<main className="main">
					<Content />
					<Aside />
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
