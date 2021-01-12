import React from 'react';
import { Route } from 'react-router-dom';
import modClass from './Content.module.css';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';

const Content = () => {
	return (
		<div className={modClass.content}>
			<Route path='/profile' component={Profile} />
			<Route path='/dialogs' component={Dialogs} />
		</div>
	);
}

export default Content;