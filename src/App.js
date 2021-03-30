import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas }  from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import './App.css';

library.add(fab, fas)


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="wrapper_App">
				<Header />
				<main className="main">
					<Aside />
					<Content />
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
