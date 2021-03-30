import React from 'react';
import { Route } from 'react-router-dom';
import modClass from './Content.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';


const Content = (props) => {
	return (
		<div className={modClass.wrapper}>
			<Route exact path='/' component={Profile} />
			<Route path='/Messages' component={Messages} />
			<Route path='/News' component={News} />
			<Route path='/Music' component={Music} />
			<Route path='/Settings' component={Settings} />
		</div>
	);
}

export default Content;