import React from 'react';
import { Route } from 'react-router-dom';
import modClass from './Content.module.css';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';


const Content = () => {
	return (
		<div className={modClass.wrapper}>
			<Route exact path='/' component={Home} />
			<Route path='/Profile' component={Profile} />
			<Route path='/dialogs' component={Dialogs} />
		</div>
	);
}

export default Content;