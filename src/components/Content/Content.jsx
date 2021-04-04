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
			<Route exact path='/' render={ ()=> <Profile
				profilePage={props.profilePage}
				dispatch={props.dispatch}
			/> } />
			<Route path='/messages' render={ ()=> <Messages
				massagesPage={props.massagesPage}
				dispatch={props.dispatch}
			/> } />
			<Route path='/news' render={ ()=> <News /> } />
			<Route path='/music' render={ ()=> <Music /> } />
			<Route path='/settings' render={ ()=> <Settings /> } />
		</div>
	);
}

export default Content;